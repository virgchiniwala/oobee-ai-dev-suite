export type Severity = 'must-fix' | 'warning';
export type SuggestionStatus = 'pending' | 'accepted' | 'rejected';

export interface DiffLine {
  type: 'unchanged' | 'removed' | 'added' | 'context';
  oldLineNumber: number | null;
  newLineNumber: number | null;
  content: string;
  badge?: {
    text: string;
    severity: Severity;
  };
}

export interface PrSuggestion {
  id: string;
  severity: Severity;
  description: string;
  wcagReference: string;
  location: string;
  beforeCode: string;
  afterCode: string;
  status: SuggestionStatus;
}

export const prMetadata = {
  number: 128,
  title: 'Improve header navigation',
  status: 'Report-only',
  scanType: 'diff-based scan',
};

export const diffLines: DiffLine[] = [
  {
    type: 'context',
    oldLineNumber: 1,
    newLineNumber: 1,
    content: "import { useState } from 'react';",
  },
  {
    type: 'context',
    oldLineNumber: 2,
    newLineNumber: 2,
    content: "import { MenuIcon } from './icons';",
  },
  {
    type: 'context',
    oldLineNumber: 3,
    newLineNumber: 3,
    content: '',
  },
  {
    type: 'context',
    oldLineNumber: 10,
    newLineNumber: 10,
    content: '  return (',
  },
  {
    type: 'context',
    oldLineNumber: 11,
    newLineNumber: 11,
    content: '    <header className="flex items-center justify-between p-4">',
  },
  {
    type: 'removed',
    oldLineNumber: 12,
    newLineNumber: null,
    content: '      <button onClick={handleMenu} className="p-2">',
    badge: {
      text: 'Missing accessible name',
      severity: 'must-fix',
    },
  },
  {
    type: 'added',
    oldLineNumber: null,
    newLineNumber: 12,
    content: '      <button',
  },
  {
    type: 'added',
    oldLineNumber: null,
    newLineNumber: 13,
    content: '        onClick={handleMenu}',
  },
  {
    type: 'added',
    oldLineNumber: null,
    newLineNumber: 14,
    content: '        className="p-2"',
  },
  {
    type: 'added',
    oldLineNumber: null,
    newLineNumber: 15,
    content: '        aria-label="Open menu"',
  },
  {
    type: 'added',
    oldLineNumber: null,
    newLineNumber: 16,
    content: '      >',
  },
  {
    type: 'context',
    oldLineNumber: 13,
    newLineNumber: 17,
    content: '        <MenuIcon />',
  },
  {
    type: 'context',
    oldLineNumber: 14,
    newLineNumber: 18,
    content: '      </button>',
  },
  {
    type: 'context',
    oldLineNumber: 15,
    newLineNumber: 19,
    content: '',
  },
  {
    type: 'context',
    oldLineNumber: 16,
    newLineNumber: 20,
    content: '      <div className="flex items-center gap-2">',
  },
  {
    type: 'removed',
    oldLineNumber: 17,
    newLineNumber: null,
    content: '        <span className="text-gray-400">Status</span>',
    badge: {
      text: 'Low contrast',
      severity: 'warning',
    },
  },
  {
    type: 'added',
    oldLineNumber: null,
    newLineNumber: 21,
    content: '        <span className="text-gray-600">Status</span>',
  },
  {
    type: 'removed',
    oldLineNumber: 18,
    newLineNumber: null,
    content: '        <a href="/docs">Learn more</a>',
  },
  {
    type: 'added',
    oldLineNumber: null,
    newLineNumber: 22,
    content: '        <a href="/docs" aria-label="Learn more about documentation">',
  },
  {
    type: 'added',
    oldLineNumber: null,
    newLineNumber: 23,
    content: '          Learn more',
  },
  {
    type: 'added',
    oldLineNumber: null,
    newLineNumber: 24,
    content: '        </a>',
  },
  {
    type: 'context',
    oldLineNumber: 19,
    newLineNumber: 25,
    content: '      </div>',
  },
  {
    type: 'context',
    oldLineNumber: 20,
    newLineNumber: 26,
    content: '    </header>',
  },
  {
    type: 'context',
    oldLineNumber: 21,
    newLineNumber: 27,
    content: '  );',
  },
];

export const prSuggestions: PrSuggestion[] = [
  {
    id: '1',
    severity: 'must-fix',
    description: 'Button missing accessible name',
    wcagReference: 'WCAG 4.1.2',
    location: 'Header.tsx:12',
    beforeCode: `<button onClick={handleMenu} className="p-2">
  <MenuIcon />
</button>`,
    afterCode: `<button
  onClick={handleMenu}
  className="p-2"
  aria-label="Open menu"
>
  <MenuIcon />
</button>`,
    status: 'pending',
  },
  {
    id: '2',
    severity: 'warning',
    description: 'Text color contrast may be insufficient',
    wcagReference: 'WCAG 1.4.3',
    location: 'Header.tsx:17',
    beforeCode: `<span className="text-gray-400">
  Status
</span>`,
    afterCode: `<span className="text-gray-600">
  Status
</span>`,
    status: 'pending',
  },
  {
    id: '3',
    severity: 'warning',
    description: 'Link should have descriptive aria-label',
    wcagReference: 'WCAG 2.4.4',
    location: 'Header.tsx:18',
    beforeCode: `<a href="/docs">
  Learn more
</a>`,
    afterCode: `<a href="/docs" aria-label="Learn more about documentation">
  Learn more
</a>`,
    status: 'pending',
  },
];
