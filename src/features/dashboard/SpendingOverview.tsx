import {
  BarChart,
  Bar,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const spendingData = [
  {
    category: "Food",
    amount: 1850,
  },
  {
    category: "Transport",
    amount: 920,
  },
  {
    category: "Shopping",
    amount: 1200,
  },
  {
    category: "Entertainment",
    amount: 650,
  },
];

function SpendingOverview() {
  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <div className="mb-6">
        <h2 className="text-lg font-semibold">
          Spending Overview
        </h2>

        <p className="text-sm text-muted-foreground">
          Your spending by category
        </p>
      </div>

      <div className="h-80 w-full">
        <ResponsiveContainer
          width="100%"
          height="100%"
        >
          <BarChart
            data={spendingData}
            margin={{
              top: 10,
              right: 10,
              left: 0,
              bottom: 10,
            }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
            />

            <XAxis
              dataKey="category"
              axisLine={false}
              tickLine={false}
            />

            <YAxis
              axisLine={false}
              tickLine={false}
            />

            <Tooltip />

            <Bar
              dataKey="amount"
              name="Spending"
              fill="var(--primary)"
              radius={[6, 6, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default SpendingOverview;