import { NavLink, Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-50 border-r border-gray-200 flex flex-col">
        {/* Product Title */}
        <div className="p-6 border-b border-gray-200">
          <h1 className="text-lg font-semibold text-gray-900">
            Oobee AI Dev Suite
          </h1>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4">
          <div className="mb-3">
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wide px-3 mb-2">
              Views
            </p>
          </div>

          <div className="space-y-1">
            <NavLink
              to="/ide"
              className={({ isActive }) =>
                `block px-3 py-2 text-sm font-medium ${
                  isActive
                    ? 'bg-purple-50 text-[#6E56CF]'
                    : 'text-gray-700 hover:bg-gray-100'
                }`
              }
            >
              IDE view
            </NavLink>

            <NavLink
              to="/pr"
              className={({ isActive }) =>
                `block px-3 py-2 text-sm font-medium ${
                  isActive
                    ? 'bg-purple-50 text-[#6E56CF]'
                    : 'text-gray-700 hover:bg-gray-100'
                }`
              }
            >
              PR review
            </NavLink>

            <NavLink
              to="/settings"
              className={({ isActive }) =>
                `block px-3 py-2 text-sm font-medium ${
                  isActive
                    ? 'bg-purple-50 text-[#6E56CF]'
                    : 'text-gray-700 hover:bg-gray-100'
                }`
              }
            >
              Repo settings
            </NavLink>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
}
