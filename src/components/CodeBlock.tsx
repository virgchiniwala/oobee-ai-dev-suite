interface CodeBlockProps {
  code: string;
  variant?: 'default' | 'removed' | 'added';
}

export default function CodeBlock({ code, variant = 'default' }: CodeBlockProps) {
  const backgrounds = {
    default: 'bg-gray-50',
    removed: 'bg-red-100',
    added: 'bg-[#DCFCE7]',
  };

  const borders = {
    default: 'border-gray-200',
    removed: 'border-red-200',
    added: 'border-green-200',
  };

  return (
    <div
      className={`p-3 border rounded ${backgrounds[variant]} ${borders[variant]} font-mono text-xs text-gray-900`}
    >
      <pre className="whitespace-pre-wrap">{code}</pre>
    </div>
  );
}
