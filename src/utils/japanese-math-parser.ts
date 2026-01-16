import { MathTerm, mathTerms } from '../data/math-terms';

/**
 * 日本語入力から数学用語の候補を検索する
 * @param input - ユーザーの入力文字列
 * @param maxResults - 返す最大候補数（デフォルト: 10）
 * @returns マッチした数学用語の配列
 */
export function searchMathTerms(input: string, maxResults: number = 10): MathTerm[] {
  if (!input || input.trim().length === 0) {
    return [];
  }

  // 入力を正規化（小文字化、空白削除）
  const normalizedInput = input.toLowerCase().trim();

  // キーワードと説明の両方で部分一致検索
  const matches = mathTerms.filter(term => {
    const normalizedKeyword = term.keyword.toLowerCase();
    const normalizedDescription = term.description.toLowerCase();
    
    return normalizedKeyword.includes(normalizedInput) ||
           normalizedDescription.includes(normalizedInput);
  });

  // 最大件数まで制限
  return matches.slice(0, maxResults);
}

/**
 * カーソル位置から最後に入力された単語を取得する
 * @param text - エディタの全テキスト
 * @param cursorPosition - カーソルの位置
 * @returns 最後に入力された単語
 */
export function getLastWord(text: string, cursorPosition: number): string {
  // カーソル位置までのテキストを取得
  const textBeforeCursor = text.substring(0, cursorPosition);
  
  // 最後の空白以降の文字列を取得
  const words = textBeforeCursor.split(/\s+/);
  const lastWord = words[words.length - 1] || '';
  
  return lastWord;
}
