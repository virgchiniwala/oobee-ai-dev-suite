import type { PrSuggestion } from '../fixtures/prFindings';
import Card from './Card';
import Badge from './Badge';
import CodeBlock from './CodeBlock';

interface SuggestedFixCardProps {
  suggestion: PrSuggestion;
  onAccept: (id: string) => void;
  onEdit: (id: string) => void;
}

export default function SuggestedFixCard({
  suggestion,
  onAccept,
  onEdit,
}: SuggestedFixCardProps) {
  const statusDisplay = {
    pending: null,
    accepted: (
      <div className="flex items-center gap-2 mt-3 p-2 bg-green-50 border border-green-200 rounded">
        <svg
          className="w-4 h-4 text-green-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
        <span className="text-xs font-medium text-green-900">Accepted</span>
      </div>
    ),
    rejected: (
      <div className="flex items-center gap-2 mt-3 p-2 bg-gray-50 border border-gray-200 rounded">
        <span className="text-xs font-medium text-gray-700">Rejected</span>
      </div>
    ),
  };

  return (
    <Card>
      {/* Header */}
      <div className="flex items-center gap-2 mb-3">
        <Badge severity={suggestion.severity} />
        <span className="text-xs text-gray-500">{suggestion.wcagReference}</span>
      </div>

      {/* Description */}
      <p className="text-sm font-medium text-gray-900 mb-1">
        {suggestion.description}
      </p>
      <p className="text-xs text-gray-500 font-mono mb-4">{suggestion.location}</p>

      {/* Suggested change */}
      <div className="space-y-3">
        <p className="text-xs font-medium text-gray-700 uppercase tracking-wide">
          Suggested change
        </p>

        {/* Before */}
        <div>
          <p className="text-xs text-gray-600 mb-1">Before</p>
          <CodeBlock code={suggestion.beforeCode} variant="removed" />
        </div>

        {/* After */}
        <div>
          <p className="text-xs text-gray-600 mb-1">After</p>
          <CodeBlock code={suggestion.afterCode} variant="added" />
        </div>

        {/* Validation */}
        <div className="flex items-center gap-2 p-2 bg-green-50 border border-green-200 rounded">
          <svg
            className="w-4 h-4 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
          <span className="text-xs font-medium text-green-900">
            axe-core validation: PASS
          </span>
        </div>
      </div>

      {/* Actions or Status */}
      {suggestion.status === 'pending' ? (
        <div className="flex gap-2 mt-4">
          <button
            onClick={() => onAccept(suggestion.id)}
            className="px-3 py-1.5 text-xs font-medium text-white bg-[#6E56CF] hover:bg-[#5d47b8] rounded"
          >
            Accept suggestion
          </button>
          <button
            onClick={() => onEdit(suggestion.id)}
            className="px-3 py-1.5 text-xs font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 rounded"
          >
            Edit before applying
          </button>
        </div>
      ) : (
        statusDisplay[suggestion.status]
      )}
    </Card>
  );
}
