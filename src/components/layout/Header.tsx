import { useState } from "react";
import {
  Bell,
  Menu,
  Moon,
  Search,
  Sun,
  Monitor,
} from "lucide-react";

import { useLocation } from "react-router";
import { toast } from "sonner";

import {
  useAppDispatch,
  useAppSelector,
} from "../../store/hooks";

import { setTheme } from "../../store/slices/themeSlice";

import Button from "../ui/Button";
import Input from "../ui/Input";

const pageTitles: Record<string, string> = {
  "/": "Dashboard",
  "/transactions": "Transactions",
  "/accounts": "Accounts",
  "/budgets": "Budgets",
  "/goals": "Goals",
  "/bills": "Bills",
  "/settings": "Settings",
};

interface HeaderProps {
  onMenuClick?: () => void;
}

function Header({ onMenuClick }: HeaderProps) {
  const location = useLocation();

  const dispatch = useAppDispatch();

  const theme = useAppSelector(
    (state) => state.theme.theme
  );

  const [themeMenuOpen, setThemeMenuOpen] =
    useState(false);

  const pageTitle =
    pageTitles[location.pathname] ?? "FinTracker";

  return (
    <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-border bg-background/90 px-4 backdrop-blur-md md:px-6">
      {/* LEFT */}

      <div className="flex min-w-0 items-center gap-3">

        {/* Mobile Menu */}

        <Button
          variant="ghost"
          size="sm"
          className="lg:hidden"
          onClick={onMenuClick}
          aria-label="Open navigation menu"
        >
          <Menu size={21} />
        </Button>

        {/* Page Title */}

        <div className="min-w-0">
          <h1 className="truncate text-xl font-semibold md:text-2xl">
            {pageTitle}
          </h1>

          <p className="hidden text-sm text-muted-foreground sm:block">
            Manage your finances with confidence
          </p>
        </div>
      </div>

      {/* SEARCH */}

      <div className="hidden w-full max-w-sm px-6 md:block">
        <div className="relative">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
          />

          <Input
            placeholder="Search transactions..."
            className="pl-10"
          />
        </div>
      </div>

      {/* ACTIONS */}

      <div className="flex items-center gap-1 md:gap-2">

        {/* THEME */}

        <div className="relative">
          <Button
            variant="ghost"
            size="sm"
            onClick={() =>
              setThemeMenuOpen(
                (open) => !open
              )
            }
            aria-label="Theme settings"
          >
            {theme === "dark" ? (
              <Moon size={20} />
            ) : theme === "light" ? (
              <Sun size={20} />
            ) : (
              <Monitor size={20} />
            )}
          </Button>

          {themeMenuOpen && (
            <div className="absolute right-0 top-11 z-50 w-40 rounded-lg border border-border bg-card p-1 shadow-lg">

              {/* LIGHT */}

              <button
                type="button"
                onClick={() => {
                  dispatch(setTheme("light"));
                  setThemeMenuOpen(false);
                }}
                className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors hover:bg-muted"
              >
                <Sun size={16} />

                <span>Light</span>
              </button>

              {/* DARK */}

              <button
                type="button"
                onClick={() => {
                  dispatch(setTheme("dark"));
                  setThemeMenuOpen(false);
                }}
                className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors hover:bg-muted"
              >
                <Moon size={16} />

                <span>Dark</span>
              </button>

              {/* SYSTEM */}

              <button
                type="button"
                onClick={() => {
                  dispatch(setTheme("system"));
                  setThemeMenuOpen(false);
                }}
                className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors hover:bg-muted"
              >
                <Monitor size={16} />

                <span>System</span>
              </button>

            </div>
          )}
        </div>

        {/* NOTIFICATIONS */}

        <Button
          variant="ghost"
          size="sm"
          onClick={() =>
            toast.info(
              "No new notifications"
            )
          }
          aria-label="Notifications"
          className="relative"
        >
          <Bell size={20} />

          <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-danger" />
        </Button>

        {/* USER */}

        <button
          type="button"
          className="ml-1 flex items-center gap-2 rounded-lg p-1.5 transition-colors hover:bg-muted"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
            MA
          </div>

          <div className="hidden text-left lg:block">
            <p className="text-sm font-medium">
              Mohamed
            </p>

            <p className="text-xs text-muted-foreground">
              Personal Account
            </p>
          </div>
        </button>

      </div>
    </header>
  );
}

export default Header;