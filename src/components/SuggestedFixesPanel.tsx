import type { PrSuggestion } from '../fixtures/prFindings';
import SuggestedFixCard from './SuggestedFixCard';
import SectionHeader from './SectionHeader';

interface SuggestedFixesPanelProps {
  suggestions: PrSuggestion[];
  onAccept: (id: string) => void;
  onEdit: (id: string) => void;
}

export default function SuggestedFixesPanel({
  suggestions,
  onAccept,
  onEdit,
}: SuggestedFixesPanelProps) {
  const acceptedCount = suggestions.filter((s) => s.status === 'accepted').length;
  const pendingCount = suggestions.filter((s) => s.status === 'pending').length;

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header */}
      <div className="px-6 py-6 border-b border-gray-200">
        <SectionHeader level={2}>
          Suggested fixes (axe-core validated)
        </SectionHeader>
      </div>

      {/* Suggestions List */}
      <div className="flex-1 overflow-auto p-4">
        <div className="space-y-4">
          {suggestions.map((suggestion) => (
            <SuggestedFixCard
              key={suggestion.id}
              suggestion={suggestion}
              onAccept={onAccept}
              onEdit={onEdit}
            />
          ))}
        </div>
      </div>

      {/* Footer Stats */}
      <div className="px-6 py-3 border-t border-gray-200 bg-gray-50">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">
            {suggestions.length} suggestion{suggestions.length !== 1 ? 's' : ''}
          </span>
          <span className="text-gray-500">
            {acceptedCount} accepted · {pendingCount} pending
          </span>
        </div>
      </div>
    </div>
  );
}
