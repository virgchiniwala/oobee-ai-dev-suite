interface ToggleProps {
  label: string;
  description?: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export default function Toggle({ label, description, checked, onChange }: ToggleProps) {
  return (
    <div className="flex items-start justify-between py-3">
      <div className="flex-1">
        <label className="text-sm font-medium text-gray-900">{label}</label>
        {description && <p className="text-xs text-gray-600 mt-1">{description}</p>}
      </div>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        onClick={() => onChange(!checked)}
        className={`relative inline-flex h-6 w-11 flex-shrink-0 border-2 border-transparent rounded-full ${
          checked ? 'bg-[#6E56CF]' : 'bg-gray-200'
        }`}
      >
        <span
          className={`inline-block h-5 w-5 bg-white rounded-full ${
            checked ? 'translate-x-5' : 'translate-x-0'
          }`}
        />
      </button>
    </div>
  );
}
