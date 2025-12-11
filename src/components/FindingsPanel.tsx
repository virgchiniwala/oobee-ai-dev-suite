import { useState } from 'react';
import type { Finding, Severity } from '../fixtures/ideFindings';
import FindingCard from './FindingCard';
import PillToggle from './PillToggle';
import SectionHeader from './SectionHeader';

interface FindingsPanelProps {
  findings: Finding[];
  onPreviewFix: (finding: Finding) => void;
}

type FilterOption = 'all' | Severity;

export default function FindingsPanel({ findings, onPreviewFix }: FindingsPanelProps) {
  const [activeFilter, setActiveFilter] = useState<FilterOption>('all');

  const filteredFindings = findings.filter((finding) => {
    if (activeFilter === 'all') return true;
    return finding.severity === activeFilter;
  });

  const filters: { value: FilterOption; label: string }[] = [
    { value: 'all', label: 'All' },
    { value: 'must-fix', label: 'Must-fix' },
    { value: 'warning', label: 'Warning' },
  ];

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header */}
      <div className="px-6 py-6 border-b border-gray-200">
        <SectionHeader level={2}>Inline accessibility checks</SectionHeader>

        {/* Severity Filters */}
        <div className="flex gap-2 mt-4">
          {filters.map((filter) => (
            <PillToggle
              key={filter.value}
              label={filter.label}
              active={activeFilter === filter.value}
              onClick={() => setActiveFilter(filter.value)}
            />
          ))}
        </div>
      </div>

      {/* Findings List */}
      <div className="flex-1 overflow-auto p-4">
        <div className="space-y-3">
          {filteredFindings.length > 0 ? (
            filteredFindings.map((finding) => (
              <FindingCard
                key={finding.id}
                finding={finding}
                onPreviewFix={onPreviewFix}
              />
            ))
          ) : (
            <div className="text-center py-8 text-gray-500 text-sm">
              No {activeFilter !== 'all' ? activeFilter : ''} findings
            </div>
          )}
        </div>
      </div>

      {/* Footer Stats */}
      <div className="px-6 py-3 border-t border-gray-200 bg-gray-50">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">
            Showing {filteredFindings.length} of {findings.length} findings
          </span>
          <span className="text-gray-500">
            {findings.filter((f) => f.severity === 'must-fix').length} must-fix ·{' '}
            {findings.filter((f) => f.severity === 'warning').length} warnings
          </span>
        </div>
      </div>
    </div>
  );
}
