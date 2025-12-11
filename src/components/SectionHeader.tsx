interface SectionHeaderProps {
  children: React.ReactNode;
  level?: 1 | 2;
}

export default function SectionHeader({ children, level = 2 }: SectionHeaderProps) {
  if (level === 1) {
    return (
      <h1 className="text-xl font-semibold text-gray-900 border-l-4 border-[#6E56CF] pl-3">
        {children}
      </h1>
    );
  }

  return (
    <h2 className="text-base font-medium text-gray-800">
      {children}
    </h2>
  );
}
