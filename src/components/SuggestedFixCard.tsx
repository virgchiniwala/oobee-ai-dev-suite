import type { PrSuggestion } from '../fixtures/prFindings';

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
  const severityColors = {
    'must-fix': 'bg-red-50 text-red-700 border-red-200',
    'warning': 'bg-yellow-50 text-yellow-700 border-yellow-200',
  };

  const severityLabels = {
    'must-fix': 'Must-fix',
    'warning': 'Warning',
  };

  const statusDisplay = {
    pending: null,
    accepted: (
      <div className="flex items-center gap-2 mt-3 p-2 bg-green-50 border border-green-200">
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
      <div className="flex items-center gap-2 mt-3 p-2 bg-gray-50 border border-gray-200">
        <span className="text-xs font-medium text-gray-700">Rejected</span>
      </div>
    ),
  };

  return (
    <div className="p-4 bg-white border border-gray-200">
      {/* Header */}
      <div className="flex items-center gap-2 mb-3">
        <span
          className={`inline-block px-2 py-1 text-xs font-medium border ${
            severityColors[suggestion.severity]
          }`}
        >
          {severityLabels[suggestion.severity]}
        </span>
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
          <div className="p-3 bg-red-50 border border-red-200 font-mono text-xs text-gray-900">
            <pre className="whitespace-pre-wrap">{suggestion.beforeCode}</pre>
          </div>
        </div>

        {/* After */}
        <div>
          <p className="text-xs text-gray-600 mb-1">After</p>
          <div className="p-3 bg-green-50 border border-green-200 font-mono text-xs text-gray-900">
            <pre className="whitespace-pre-wrap">{suggestion.afterCode}</pre>
          </div>
        </div>

        {/* Validation */}
        <div className="flex items-center gap-2 p-2 bg-green-50 border border-green-200">
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
            className="px-3 py-1.5 text-xs font-medium text-white bg-[#6E56CF] hover:bg-[#5d47b8]"
          >
            Accept suggestion
          </button>
          <button
            onClick={() => onEdit(suggestion.id)}
            className="px-3 py-1.5 text-xs font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50"
          >
            Edit before applying
          </button>
        </div>
      ) : (
        statusDisplay[suggestion.status]
      )}
    </div>
  );
}
