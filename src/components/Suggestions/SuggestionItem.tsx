import katex from 'katex';
import { MathTerm } from '../../data/math-terms';

interface SuggestionItemProps {
  term: MathTerm;
  isSelected: boolean;
  onClick: () => void;
  onMouseEnter: () => void;
}

export const SuggestionItem = ({
  term,
  isSelected,
  onClick,
  onMouseEnter,
}: SuggestionItemProps) => {
  // KaTeXでLaTeXをレンダリング
  const renderLatex = (latex: string): string => {
    try {
      return katex.renderToString(latex, {
        throwOnError: false,
        displayMode: false,
      });
    } catch (error) {
      return latex;
    }
  };

  return (
    <div
      className={`
        px-4 py-3 cursor-pointer transition-colors duration-150
        flex items-center justify-between gap-4
        ${isSelected ? 'bg-blue-50 border-l-2 border-blue-500' : 'hover:bg-gray-50'}
      `}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
    >
      <div className="flex-1 min-w-0">
        <div className="font-medium text-gray-900 text-sm">
          {term.description}
        </div>
        <div className="text-xs text-gray-500 mt-0.5">
          {term.category}
        </div>
      </div>
      <div 
        className="text-gray-700 text-sm flex-shrink-0"
        dangerouslySetInnerHTML={{ __html: renderLatex(term.latex) }}
      />
    </div>
  );
};
