import { useState } from 'react';
import CodeEditor from '../components/CodeEditor';
import FindingsPanel from '../components/FindingsPanel';
import PreviewFixModal from '../components/PreviewFixModal';
import { ideFindings, mockCodeContent } from '../fixtures/ideFindings';
import type { Finding } from '../fixtures/ideFindings';

export default function IdeView() {
  const [selectedFinding, setSelectedFinding] = useState<Finding | null>(null);

  const handlePreviewFix = (finding: Finding) => {
    setSelectedFinding(finding);
  };

  const handleCloseModal = () => {
    setSelectedFinding(null);
  };

  // Extract line numbers from findings for highlighting
  const highlightedLines = ideFindings.map((f) => f.lineNumber);

  return (
    <div className="flex h-full">
      {/* Left Column - Code Editor */}
      <div className="flex-1">
        <CodeEditor
          filePath="src/components/Header.tsx"
          language="TypeScript"
          framework="React"
          code={mockCodeContent}
          highlightedLines={highlightedLines}
        />
      </div>

      {/* Right Column - Findings Panel */}
      <div className="w-96">
        <FindingsPanel findings={ideFindings} onPreviewFix={handlePreviewFix} />
      </div>

      {/* Preview Fix Modal */}
      <PreviewFixModal finding={selectedFinding} onClose={handleCloseModal} />
    </div>
  );
}
