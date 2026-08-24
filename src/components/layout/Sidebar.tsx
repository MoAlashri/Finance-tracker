import {
  LayoutDashboard,
  ArrowLeftRight,
  Wallet,
  ChartNoAxesColumn,
  Target,
  ReceiptText,
  Settings,
  X,
} from "lucide-react";

import { NavLink } from "react-router";
import type { ComponentType } from "react";

interface NavigationItem {
  label: string;
  path: string;
  icon: ComponentType<{
    size?: number;
    className?: string;
  }>;
}

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const navigationItems: NavigationItem[] = [
  {
    label: "Dashboard",
    path: "/",
    icon: LayoutDashboard,
  },
  {
    label: "Transactions",
    path: "/transactions",
    icon: ArrowLeftRight,
  },
  {
    label: "Accounts",
    path: "/accounts",
    icon: Wallet,
  },
  {
    label: "Budgets",
    path: "/budgets",
    icon: ChartNoAxesColumn,
  },
  {
    label: "Goals",
    path: "/goals",
    icon: Target,
  },
  {
    label: "Bills",
    path: "/bills",
    icon: ReceiptText,
  },
  {
    label: "Settings",
    path: "/settings",
    icon: Settings,
  },
];

function Sidebar({
  isOpen,
  onClose,
}: SidebarProps) {
  return (
    <>
      {/* Mobile Overlay */}

      {isOpen && (
        <button
          type="button"
          aria-label="Close navigation"
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
        />
      )}

      {/* Sidebar */}

      <aside
        className={[
          "fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r border-border bg-card",
          "transition-transform duration-300 ease-in-out",
          "lg:translate-x-0",
          isOpen
            ? "translate-x-0"
            : "-translate-x-full",
        ].join(" ")}
      >
        {/* Logo */}

        <div className="flex h-20 items-center justify-between border-b border-border px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <Wallet size={21} />
            </div>

            <div>
              <h1 className="text-lg font-bold tracking-tight">
                FinTracker
              </h1>

              <p className="text-xs text-muted-foreground">
                Smart finances
              </p>
            </div>
          </div>

          {/* Mobile Close */}

          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-muted-foreground hover:bg-muted hover:text-foreground lg:hidden"
            aria-label="Close navigation menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation */}

        <nav className="flex-1 overflow-y-auto px-4 py-6">
          <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Overview
          </p>

          <div className="space-y-1">
            {navigationItems.map((item) => {
              const Icon = item.icon;

              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === "/"}
                  onClick={onClose}
                  className={({ isActive }) =>
                    [
                      "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                      isActive
                        ? "bg-primary text-primary-foreground shadow-sm"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground",
                    ].join(" ")
                  }
                >
                  <Icon size={19} />

                  <span>{item.label}</span>
                </NavLink>
              );
            })}
          </div>
        </nav>

        {/* User */}

        <div className="border-t border-border p-4">
          <div className="flex items-center gap-3 rounded-lg bg-muted p-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
              MA
            </div>

            <div className="min-w-0">
              <p className="truncate text-sm font-medium">
                Mohamed
              </p>

              <p className="truncate text-xs text-muted-foreground">
                Personal Account
              </p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;