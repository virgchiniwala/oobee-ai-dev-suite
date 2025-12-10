import type { DiffLine } from '../fixtures/prFindings';

interface DiffViewerProps {
  fileName: string;
  diffLines: DiffLine[];
}

export default function DiffViewer({ fileName, diffLines }: DiffViewerProps) {
  const getLineStyles = (type: DiffLine['type']) => {
    switch (type) {
      case 'removed':
        return 'bg-red-50';
      case 'added':
        return 'bg-green-50';
      case 'context':
      case 'unchanged':
      default:
        return 'bg-white';
    }
  };

  const getLinePrefix = (type: DiffLine['type']) => {
    switch (type) {
      case 'removed':
        return '-';
      case 'added':
        return '+';
      default:
        return ' ';
    }
  };

  return (
    <div className="flex flex-col h-full bg-white border-r border-gray-200">
      {/* Header */}
      <div className="px-4 py-3 border-b border-gray-200 bg-gray-50">
        <span className="text-sm font-medium text-gray-900">{fileName}</span>
      </div>

      {/* Diff Content */}
      <div className="flex-1 overflow-auto">
        <div className="font-mono text-sm">
          {diffLines.map((line, index) => (
            <div
              key={index}
              className={`flex ${getLineStyles(line.type)}`}
            >
              {/* Old Line Number */}
              <span className="inline-block w-12 px-2 py-1 text-right text-gray-400 select-none bg-gray-50 border-r border-gray-200">
                {line.oldLineNumber ?? ''}
              </span>

              {/* New Line Number */}
              <span className="inline-block w-12 px-2 py-1 text-right text-gray-400 select-none bg-gray-50 border-r border-gray-200">
                {line.newLineNumber ?? ''}
              </span>

              {/* Prefix */}
              <span className="inline-block w-6 px-1 py-1 text-gray-600">
                {getLinePrefix(line.type)}
              </span>

              {/* Content */}
              <span className="flex-1 px-2 py-1 text-gray-900 whitespace-pre">
                {line.content || ' '}
              </span>

              {/* Badge */}
              {line.badge && (
                <span
                  className={`inline-flex items-center mx-2 my-1 px-2 py-0.5 text-xs font-medium border ${
                    line.badge.severity === 'must-fix'
                      ? 'bg-red-50 text-red-700 border-red-200'
                      : 'bg-yellow-50 text-yellow-700 border-yellow-200'
                  }`}
                >
                  {line.badge.text}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
