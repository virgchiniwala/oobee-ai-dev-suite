interface BreadcrumbProps {
  viewName: string;
}

export default function Breadcrumb({ viewName }: BreadcrumbProps) {
  return (
    <div className="px-8 py-4 border-b border-gray-200">
      <p className="text-sm text-gray-600">
        Oobee AI Dev Suite / <span className="text-gray-900">{viewName}</span>
      </p>
    </div>
  );
}
