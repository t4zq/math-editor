import React, { useState, useEffect, useRef } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { MathTerm } from '../../data/math-terms';
import { searchMathTerms, getLastWord } from '../../utils/japanese-math-parser';
import { SuggestionList } from '../Suggestions/SuggestionList';

export const MathEditor: React.FC = () => {
  const [suggestions, setSuggestions] = useState<MathTerm[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [suggestionPosition, setSuggestionPosition] = useState({ top: 0, left: 0 });
  const editorRef = useRef<HTMLDivElement>(null);

  const editor = useEditor({
    extensions: [StarterKit],
    content: '',
    editorProps: {
      attributes: {
        class: 'prose prose-sm sm:prose lg:prose-lg xl:prose-2xl focus:outline-none min-h-[300px] p-4',
      },
    },
    onUpdate: ({ editor }) => {
      // エディタの内容が更新されたときに予測候補を更新
      updateSuggestions(editor);
    },
  });

  // 予測候補を更新する関数
  const updateSuggestions = (editor: any) => {
    const { state } = editor;
    const { from } = state.selection;
    const text = editor.getText();
    
    // カーソル位置の最後の単語を取得
    const lastWord = getLastWord(text, from);
    
    if (lastWord && lastWord.length > 0) {
      const matches = searchMathTerms(lastWord);
      setSuggestions(matches);
      setSelectedIndex(0);
      
      // カーソル位置を取得してサジェストリストの位置を設定
      if (matches.length > 0) {
        updateSuggestionPosition(editor);
      }
    } else {
      setSuggestions([]);
    }
  };

  // サジェストリストの位置を更新
  const updateSuggestionPosition = (editor: any) => {
    if (!editorRef.current) return;

    const { state } = editor;
    const { from } = state.selection;
    const coords = editor.view.coordsAtPos(from);
    const editorRect = editorRef.current.getBoundingClientRect();

    setSuggestionPosition({
      top: coords.bottom - editorRect.top + 5,
      left: coords.left - editorRect.left,
    });
  };

  // 候補を選択して挿入
  const selectSuggestion = (term: MathTerm) => {
    if (!editor) return;

    const { state } = editor;
    const { from } = state.selection;
    const text = editor.getText();
    const lastWord = getLastWord(text, from);

    // 最後の単語を削除
    const deleteFrom = from - lastWord.length;
    editor.chain()
      .focus()
      .deleteRange({ from: deleteFrom, to: from })
      .insertContent(term.latex)
      .run();

    setSuggestions([]);
  };

  // キーボードイベント処理
  useEffect(() => {
    if (!editor) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (suggestions.length === 0) return;

      switch (event.key) {
        case 'ArrowDown':
          event.preventDefault();
          setSelectedIndex((prev) => 
            prev < suggestions.length - 1 ? prev + 1 : 0
          );
          break;
        case 'ArrowUp':
          event.preventDefault();
          setSelectedIndex((prev) => 
            prev > 0 ? prev - 1 : suggestions.length - 1
          );
          break;
        case 'Enter':
        case 'Tab':
          if (suggestions.length > 0) {
            event.preventDefault();
            selectSuggestion(suggestions[selectedIndex]);
          }
          break;
        case 'Escape':
          event.preventDefault();
          setSuggestions([]);
          break;
      }
    };

    const editorElement = editor.view.dom;
    editorElement.addEventListener('keydown', handleKeyDown);

    return () => {
      editorElement.removeEventListener('keydown', handleKeyDown);
    };
  }, [editor, suggestions, selectedIndex]);

  return (
    <div className="relative" ref={editorRef}>
      <div className="border border-gray-300 rounded-lg bg-white shadow-sm">
        <EditorContent editor={editor} />
      </div>
      {suggestions.length > 0 && (
        <SuggestionList
          suggestions={suggestions}
          selectedIndex={selectedIndex}
          position={suggestionPosition}
          onSelect={selectSuggestion}
          onHover={setSelectedIndex}
        />
      )}
    </div>
  );
};
