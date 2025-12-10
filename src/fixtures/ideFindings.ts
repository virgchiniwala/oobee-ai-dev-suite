export type Severity = 'must-fix' | 'warning';

export interface Finding {
  id: string;
  severity: Severity;
  description: string;
  wcagReference: string;
  location: string;
  lineNumber: number;
  beforeCode: string;
  afterCode: string;
}

export const ideFindings: Finding[] = [
  {
    id: '1',
    severity: 'must-fix',
    description: 'Image missing alt text',
    wcagReference: 'WCAG 1.1.1',
    location: 'Header.tsx:23',
    lineNumber: 23,
    beforeCode: `<img
  src="/logo.png"
  className="h-8 w-8"
/>`,
    afterCode: `<img
  src="/logo.png"
  alt="Oobee company logo"
  className="h-8 w-8"
/>`,
  },
  {
    id: '2',
    severity: 'must-fix',
    description: 'Button missing accessible name',
    wcagReference: 'WCAG 4.1.2',
    location: 'Header.tsx:15',
    lineNumber: 15,
    beforeCode: `<button
  onClick={handleMenu}
  className="p-2"
>
  <MenuIcon />
</button>`,
    afterCode: `<button
  onClick={handleMenu}
  className="p-2"
  aria-label="Open navigation menu"
>
  <MenuIcon />
</button>`,
  },
  {
    id: '3',
    severity: 'warning',
    description: 'Color contrast may be insufficient',
    wcagReference: 'WCAG 1.4.3',
    location: 'Header.tsx:28',
    lineNumber: 28,
    beforeCode: `<span className="text-gray-400">
  Beta
</span>`,
    afterCode: `<span className="text-gray-600">
  Beta
</span>`,
  },
  {
    id: '4',
    severity: 'warning',
    description: 'Link text may not be descriptive enough',
    wcagReference: 'WCAG 2.4.4',
    location: 'Header.tsx:32',
    lineNumber: 32,
    beforeCode: `<a href="/docs">
  Click here
</a>`,
    afterCode: `<a href="/docs">
  View documentation
</a>`,
  },
];

export const mockCodeContent = `import { useState } from 'react';
import { MenuIcon } from './icons';

interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex items-center justify-between p-4 border-b">
      <button onClick={handleMenu} className="p-2">
        <MenuIcon />
      </button>

      <div className="flex items-center gap-4">
        <h1 className="text-xl font-semibold">{title}</h1>
        <img src="/logo.png" className="h-8 w-8" />
      </div>

      <div className="flex items-center gap-2">
        <span className="text-gray-400">Beta</span>
        <a href="/docs">Click here</a>
      </div>
    </header>
  );
}`;
