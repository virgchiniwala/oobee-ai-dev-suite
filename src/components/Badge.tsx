type Severity = 'must-fix' | 'warning';

interface BadgeProps {
  severity: Severity;
  label?: string;
}

export default function Badge({ severity, label }: BadgeProps) {
  const styles = {
    'must-fix': 'bg-red-50 text-red-700 border-red-200',
    'warning': 'bg-yellow-50 text-yellow-700 border-yellow-200',
  };

  const labels = {
    'must-fix': 'Must-fix',
    'warning': 'Warning',
  };

  return (
    <span
      className={`inline-block px-2 py-1 text-xs font-medium border rounded ${
        styles[severity]
      }`}
    >
      {label || labels[severity]}
    </span>
  );
}
