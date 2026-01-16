import { MathTerm } from '../../data/math-terms';
import { SuggestionItem } from './SuggestionItem';

interface SuggestionListProps {
  suggestions: MathTerm[];
  selectedIndex: number;
  position: { top: number; left: number };
  onSelect: (term: MathTerm) => void;
  onHover: (index: number) => void;
}

export const SuggestionList = ({
  suggestions,
  selectedIndex,
  position,
  onSelect,
  onHover,
}: SuggestionListProps) => {
  if (suggestions.length === 0) {
    return null;
  }

  return (
    <div
      className="absolute z-50 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden"
      style={{
        top: `${position.top}px`,
        left: `${position.left}px`,
        minWidth: '400px',
        maxWidth: '500px',
        maxHeight: '400px',
        overflowY: 'auto',
      }}
    >
      {suggestions.map((term, index) => (
        <SuggestionItem
          key={`${term.keyword}-${term.latex}-${index}`}
          term={term}
          isSelected={index === selectedIndex}
          onClick={() => onSelect(term)}
          onMouseEnter={() => onHover(index)}
        />
      ))}
    </div>
  );
};
