import type { ComponentType } from "react";
import type { LucideProps } from "lucide-react";
import {
  CreditCard,
  Target,
  Wallet,
  TrendingUp,
} from "lucide-react";

import Card from "../components/ui/Card";
import Badge from "../components/ui/Badge";
import type { BadgeVariant } from "../components/ui/Badge";

// -----------------------------
// Mock Data
// -----------------------------

interface Stat {
  title: string;
  value: string;
  change: string;
  variant: BadgeVariant;
  icon: ComponentType<LucideProps>;
}

const stats: Stat[] = [
  {
    title: "Total Balance",
    value: "27,700 EGP",
    change: "+8.2% this month",
    variant: "success",
    icon: Wallet,
  },
  {
    title: "Monthly Income",
    value: "21,500 EGP",
    change: "+12.5% this month",
    variant: "success",
    icon: TrendingUp,
  },
  {
    title: "Monthly Expenses",
    value: "11,800 EGP",
    change: "-4.8% this month",
    variant: "danger",
    icon: CreditCard,
  },
  {
    title: "Monthly Savings",
    value: "9,700 EGP",
    change: "18.4% savings rate",
    variant: "success",
    icon: Target,
  },
];

function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight md:text-3xl">
          Good morning, Mohamed
        </h1>
        <p className="text-sm text-muted-foreground mt-1">
          Here's what's happening with your finances.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4 my-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card className="p-5" key={stat.title}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{stat.title}</p>
                  <h2 className="mt-2 text-2xl font-bold">{stat.value}</h2>
                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon size={21} />
                </div>
              </div>

              <div className="mt-4">
                <Badge variant={stat.variant}>{stat.change}</Badge>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default Dashboard;