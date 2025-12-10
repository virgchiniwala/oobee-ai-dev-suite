interface CodeEditorProps {
  filePath: string;
  language: string;
  framework: string;
  code: string;
  highlightedLines: number[];
}

export default function CodeEditor({
  filePath,
  language,
  framework,
  code,
  highlightedLines,
}: CodeEditorProps) {
  const lines = code.split('\n');

  return (
    <div className="flex flex-col h-full bg-white border-r border-gray-200">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 bg-gray-50">
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium text-gray-900">{filePath}</span>
          <span className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium text-gray-700 bg-gray-100 border border-gray-200">
            {framework} · {language}
          </span>
        </div>
      </div>

      {/* Code Content */}
      <div className="flex-1 overflow-auto bg-white">
        <div className="font-mono text-sm">
          {lines.map((line, index) => {
            const lineNumber = index + 1;
            const isHighlighted = highlightedLines.includes(lineNumber);

            return (
              <div
                key={lineNumber}
                className={`flex ${
                  isHighlighted ? 'bg-yellow-50' : ''
                }`}
              >
                <span className="inline-block w-12 px-3 py-1 text-right text-gray-400 select-none bg-gray-50 border-r border-gray-200">
                  {lineNumber}
                </span>
                <span className="flex-1 px-4 py-1 text-gray-900 whitespace-pre">
                  {line || ' '}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
