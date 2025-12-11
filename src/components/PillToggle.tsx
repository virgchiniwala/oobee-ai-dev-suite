interface PillToggleProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

export default function PillToggle({ label, active, onClick }: PillToggleProps) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1.5 text-sm font-medium border rounded ${
        active
          ? 'bg-[#6E56CF] text-white border-[#6E56CF]'
          : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
      }`}
    >
      {label}
    </button>
  );
}
