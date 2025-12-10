import type { Finding } from '../fixtures/ideFindings';

interface PreviewFixModalProps {
  finding: Finding | null;
  onClose: () => void;
}

export default function PreviewFixModal({ finding, onClose }: PreviewFixModalProps) {
  if (!finding) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose}
    >
      <div
        className="w-full max-w-3xl max-h-[90vh] overflow-auto bg-white border border-gray-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-gray-50">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">Preview fix</h2>
            <p className="text-sm text-gray-600 mt-1">{finding.description}</p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
            aria-label="Close modal"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Before */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-900">Before</h3>
              <span className="text-xs text-gray-500 font-mono">
                {finding.location}
              </span>
            </div>
            <div className="p-4 bg-gray-50 border border-gray-200 font-mono text-sm text-gray-900">
              <pre className="whitespace-pre-wrap">{finding.beforeCode}</pre>
            </div>
          </div>

          {/* After */}
          <div className="mb-6">
            <h3 className="text-sm font-medium text-gray-900 mb-2">After</h3>
            <div className="p-4 bg-green-50 border border-green-200 font-mono text-sm text-gray-900">
              <pre className="whitespace-pre-wrap">{finding.afterCode}</pre>
            </div>
          </div>

          {/* Axe-core Status */}
          <div className="flex items-center gap-2 p-3 bg-green-50 border border-green-200">
            <svg
              className="w-5 h-5 text-green-600"
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
            <span className="text-sm font-medium text-green-900">
              axe-core check: PASSED
            </span>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 px-6 py-4 border-t border-gray-200 bg-gray-50">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50"
          >
            Cancel
          </button>
          <button className="px-4 py-2 text-sm font-medium text-white bg-[#6E56CF] hover:bg-[#5d47b8]">
            Apply fix
          </button>
        </div>
      </div>
    </div>
  );
}
