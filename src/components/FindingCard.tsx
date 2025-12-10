import type { Finding } from '../fixtures/ideFindings';

interface FindingCardProps {
  finding: Finding;
  onPreviewFix: (finding: Finding) => void;
}

export default function FindingCard({ finding, onPreviewFix }: FindingCardProps) {
  const severityColors = {
    'must-fix': 'bg-red-50 text-red-700 border-red-200',
    'warning': 'bg-yellow-50 text-yellow-700 border-yellow-200',
  };

  const severityLabels = {
    'must-fix': 'Must-fix',
    'warning': 'Warning',
  };

  return (
    <div className="p-4 bg-white border border-gray-200">
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span
              className={`inline-block px-2 py-1 text-xs font-medium border ${
                severityColors[finding.severity]
              }`}
            >
              {severityLabels[finding.severity]}
            </span>
            <span className="text-xs text-gray-500">{finding.wcagReference}</span>
          </div>
          <p className="text-sm font-medium text-gray-900 mb-1">
            {finding.description}
          </p>
          <p className="text-xs text-gray-500 font-mono">{finding.location}</p>
        </div>
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => onPreviewFix(finding)}
          className="px-3 py-1.5 text-xs font-medium text-white bg-[#6E56CF] hover:bg-[#5d47b8]"
        >
          Preview fix
        </button>
        <button className="px-3 py-1.5 text-xs font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50">
          Ignore with reason…
        </button>
      </div>
    </div>
  );
}
