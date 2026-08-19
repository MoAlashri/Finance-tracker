import {
  LayoutDashboard,
  ArrowLeftRight,
  Wallet,
  ChartNoAxesColumn,
  Target,
  ReceiptText,
  Settings,
} from "lucide-react"
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

const navigationItems:NavigationItem[] = [
  {
    label: "Dashboard",
    path: "/",
    icon: LayoutDashboard
  },
  {
    label: "Transactions",
    path: "/transactions",
    icon: ArrowLeftRight
  },
  {
    label: "Accounts",
    path: "/accounts",
    icon: Wallet
  },
  {
    label: "Budgets",
    path: "/budgets",
    icon: ChartNoAxesColumn
  },
  {
    label: "Goals",
    path: "/goals",
    icon: Target
  },
  {
    label: "Bills",
    path: "/bills",
    icon: ReceiptText
  },
  {
    label: "Settings",
    path: "/settings",
    icon: Settings
  },
]


export default function Sidebar() {
  return (
    <aside className="fixed bg-card left-0 w-64 hidden lg:flex border-border border-r z-40 inset-y-0 flex-col ">
      {/* LOGO */}
    <div className="flex h-20 px-6  border-border border-b items-center">
      <div className="flex gap-3 items-center">
          <div className="text-primary-foreground bg-primary rounded-xl w-10 h-10 items-center justify-center flex">
            <Wallet size={21} />
          </div>
        <div>
          <h1 className="text-lg font-bold tracking-tight">FinTracker</h1>
          <p className="text-xs text-muted-foreground">Smart finances</p>
        </div>
      </div>
    </div>
    {/*Navigation*/}
    <nav className="flex-1 overflow-y-auto px-4 py-6">
      <p className="mb-3 px-3 text-xs font-semibold tracking-wider text-muted-foreground uppercase">
        Overview
      </p>
      <div className="space-y-1">
        {navigationItems.map((item)=> {
          const Icon = item.icon;
          return (
            <NavLink
            key={item.path}
            to={item.path}
            end={item.path === "/"}
            className={({isActive})=> [
              "flex items-center gap-3 rounded-lg py-2.5 px-3 font-medium transition-colors",
              isActive 
              ? "bg-primary text-primary-foreground shadow-sm"
              :"text-muted-foreground hover:bg-muted hover:text-foreground"
            ].join(" ")}
            >
              <Icon size={19} />
              <span>{item.label}</span>

            </NavLink>
          )
        })}
      </div>
    </nav>
      {/* Bottom */}
      <div className="border-t border-border p-4 ">
        <div className="flex gap-3 bg-secondary p-3 rounded-md">
          <div className="flex items-center justify-center  h-9 w-9 rounded-full bg-primary text-primary-foreground font-semibold text-sm">
            MA
          </div>
          <div className="min-w-0">
            <p className="truncate text-sm font-medium">Mohamed</p>
            <p className="text-xs text-muted-foreground truncate ">Personal</p>
          </div>
        </div>

      </div>

    </aside>
  )
}
