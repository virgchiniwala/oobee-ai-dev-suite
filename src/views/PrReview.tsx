import { useState } from 'react';
import Breadcrumb from '../components/Breadcrumb';
import PrTopBar from '../components/PrTopBar';
import DiffViewer from '../components/DiffViewer';
import SuggestedFixesPanel from '../components/SuggestedFixesPanel';
import { prMetadata, diffLines, prSuggestions } from '../fixtures/prFindings';
import type { PrSuggestion } from '../fixtures/prFindings';

export default function PrReview() {
  const [suggestions, setSuggestions] = useState<PrSuggestion[]>(prSuggestions);

  const handleAccept = (id: string) => {
    setSuggestions((prev) =>
      prev.map((s) => (s.id === id ? { ...s, status: 'accepted' as const } : s))
    );
  };

  const handleEdit = (_id: string) => {
    // In a real app, this would open an editor
  };

  return (
    <div className="flex flex-col h-full bg-white">
      <Breadcrumb viewName="PR Review" />

      {/* Top Bar */}
      <PrTopBar
        prNumber={prMetadata.number}
        title={prMetadata.title}
        status={prMetadata.status}
        scanType={prMetadata.scanType}
      />

      {/* Main Split View */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left Panel - Diff Viewer */}
        <div className="flex-1">
          <DiffViewer fileName="Header.tsx" diffLines={diffLines} />
        </div>

        {/* Right Panel - Suggested Fixes */}
        <div className="w-96">
          <SuggestedFixesPanel
            suggestions={suggestions}
            onAccept={handleAccept}
            onEdit={handleEdit}
          />
        </div>
      </div>
    </div>
  );
}
