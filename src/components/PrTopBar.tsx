interface PrTopBarProps {
  prNumber: number;
  title: string;
  status: string;
  scanType: string;
}

export default function PrTopBar({ prNumber, title, status, scanType }: PrTopBarProps) {
  return (
    <div className="px-6 py-4 bg-white border-b border-gray-200">
      <div className="flex items-center gap-3 mb-2">
        <h1 className="text-xl font-semibold text-gray-900">
          PR #{prNumber} – {title}
        </h1>
        <span className="inline-flex items-center px-2 py-1 text-xs font-medium text-white bg-[#6E56CF] border border-[#6E56CF] rounded">
          Checks: {status}
        </span>
      </div>
      <p className="text-sm text-gray-600">
        Oobee AI Dev Suite · {scanType}
      </p>
    </div>
  );
}
