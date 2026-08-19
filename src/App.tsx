import { useState } from "react";
import { toast } from "sonner";
import {
  Check,
  CircleDollarSign,
  CreditCard,
  Moon,
  Sun,
  Wallet,
} from "lucide-react";

import { useAppDispatch, useAppSelector } from "./store/hooks";
import { setTheme } from "./store/slices/themeSlice";

import Button from "./components/ui/Button";
import Card from "./components/ui/Card";
import Badge from "./components/ui/Badge";
import Input from "./components/ui/Input";
import Select from "./components/ui/Select";
import Progress from "./components/ui/Progress";
import Dialog from "./components/ui/Dialog";
import Skeleton from "./components/ui/Skeleton";
import EmptyState from "./components/ui/EmptyState";
import Table from "./components/ui/Table";

import useTheme from "./hooks/useTheme";

function App() {
  useTheme();

  const dispatch = useAppDispatch();

  const theme = useAppSelector(
    (state) => state.theme.theme
  );

  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <main className="min-h-screen bg-background p-6 text-foreground md:p-10">
      <div className="mx-auto max-w-7xl space-y-10">

        {/* HEADER */}

        <section>
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="success">
              Test Lab
            </Badge>

            <Badge>
              Redux Toolkit
            </Badge>

            <Badge variant="warning">
              Theme: {theme}
            </Badge>
          </div>

          <h1 className="mt-4 text-4xl font-bold">
            FinTracker UI System
          </h1>

          <p className="mt-2 text-muted-foreground">
            Complete component, Redux and theme testing.
          </p>
        </section>

        {/* ================================= */}
        {/* THEME */}
        {/* ================================= */}

        <Card className="p-6">
          <TestTitle
            title="Theme System"
            description="Redux + Listener Middleware + localStorage + System Theme"
          />

          <div className="mt-6 flex flex-wrap gap-3">

            <Button
              variant="primary"
              onClick={() =>
                dispatch(setTheme("light"))
              }
            >
              <Sun size={16} />
              Light
            </Button>

            <Button
              variant="secondary"
              onClick={() =>
                dispatch(setTheme("dark"))
              }
            >
              <Moon size={16} />
              Dark
            </Button>

            <Button
              variant="outline"
              onClick={() =>
                dispatch(setTheme("system"))
              }
            >
              System
            </Button>

          </div>

          <div className="mt-6 rounded-lg bg-muted p-4">
            <p className="text-sm text-muted-foreground">
              Current Redux Theme
            </p>

            <p className="mt-1 text-lg font-semibold">
              {theme}
            </p>
          </div>
        </Card>

        {/* ================================= */}
        {/* BUTTON */}
        {/* ================================= */}

        <Card className="p-6">
          <TestTitle
            title="Button"
            description="Variants, sizes and states"
          />

          <div className="mt-6 flex flex-wrap gap-3">

            <Button variant="primary">
              Primary
            </Button>

            <Button variant="secondary">
              Secondary
            </Button>

            <Button variant="outline">
              Outline
            </Button>

            <Button variant="ghost">
              Ghost
            </Button>

            <Button variant="danger">
              Danger
            </Button>

            <Button size="sm">
              Small
            </Button>

            <Button size="lg">
              Large
            </Button>

            <Button disabled>
              Disabled
            </Button>

          </div>
        </Card>

        {/* ================================= */}
        {/* BADGE */}
        {/* ================================= */}

        <Card className="p-6">
          <TestTitle
            title="Badge"
            description="Status indicators"
          />

          <div className="mt-6 flex flex-wrap gap-3">

            <Badge>
              Default
            </Badge>

            <Badge variant="success">
              Income
            </Badge>

            <Badge variant="warning">
              Pending
            </Badge>

            <Badge variant="danger">
              Expense
            </Badge>

          </div>
        </Card>

        {/* ================================= */}
        {/* INPUT */}
        {/* ================================= */}

        <Card className="p-6">
          <TestTitle
            title="Input"
            description="Different input states"
          />

          <div className="mt-6 grid gap-4 md:grid-cols-2">

            <Input placeholder="Transaction name" />

            <Input
              type="number"
              placeholder="Amount"
            />

            <Input
              type="email"
              placeholder="Email"
            />

            <Input
              disabled
              placeholder="Disabled"
            />

          </div>
        </Card>

        {/* ================================= */}
        {/* SELECT */}
        {/* ================================= */}

        <Card className="p-6">
          <TestTitle
            title="Select"
            description="Categories and currencies"
          />

          <div className="mt-6 grid gap-4 md:grid-cols-2">

            <Select defaultValue="">
              <option value="" disabled>
                Select category
              </option>

              <option value="food">
                Food
              </option>

              <option value="travel">
                Travel
              </option>

              <option value="shopping">
                Shopping
              </option>
            </Select>

            <Select defaultValue="egp">
              <option value="egp">
                EGP
              </option>

              <option value="usd">
                USD
              </option>

              <option value="eur">
                EUR
              </option>
            </Select>

          </div>
        </Card>

        {/* ================================= */}
        {/* PROGRESS */}
        {/* ================================= */}

        <Card className="p-6">
          <TestTitle
            title="Progress"
            description="Goal progress boundaries"
          />

          <div className="mt-6 space-y-6">

            <ProgressTest
              label="Germany Trip"
              value={72}
            />

            <ProgressTest
              label="Emergency Fund"
              value={45}
            />

            <ProgressTest
              label="Budget"
              value={91}
            />

            <ProgressTest
              label="Over 100%"
              value={150}
            />

            <ProgressTest
              label="Negative"
              value={-20}
            />

          </div>
        </Card>

        {/* ================================= */}
        {/* DIALOG */}
        {/* ================================= */}

        <Card className="p-6">
          <TestTitle
            title="Dialog"
            description="Open, close, Escape and backdrop"
          />

          <Button
            className="mt-6"
            onClick={() =>
              setDialogOpen(true)
            }
          >
            Open Dialog
          </Button>

          <Dialog
            open={dialogOpen}
            onClose={() =>
              setDialogOpen(false)
            }
            title="Add Transaction"
            description="Testing FinTracker transaction modal."
          >
            <div className="space-y-4">

              <Input
                placeholder="Transaction name"
              />

              <Input
                type="number"
                placeholder="Amount"
              />

              <Select defaultValue="">
                <option value="" disabled>
                  Transaction type
                </option>

                <option value="income">
                  Income
                </option>

                <option value="expense">
                  Expense
                </option>
              </Select>

              <div className="flex justify-end gap-3">

                <Button
                  variant="outline"
                  onClick={() =>
                    setDialogOpen(false)
                  }
                >
                  Cancel
                </Button>

                <Button
                  onClick={() => {
                    setDialogOpen(false);

                    toast.success(
                      "Transaction added successfully"
                    );
                  }}
                >
                  <Check size={16} />
                  Save
                </Button>

              </div>
            </div>
          </Dialog>
        </Card>

        {/* ================================= */}
        {/* SKELETON */}
        {/* ================================= */}

        <Card className="p-6">
          <TestTitle
            title="Skeleton"
            description="Loading states"
          />

          <div className="mt-6 space-y-4">

            <Skeleton className="h-8 w-48" />

            <Skeleton className="h-4 w-full" />

            <Skeleton className="h-4 w-3/4" />

            <Skeleton className="h-32 w-full" />

          </div>
        </Card>

        {/* ================================= */}
        {/* EMPTY STATE */}
        {/* ================================= */}

        <Card className="p-6">
          <TestTitle
            title="Empty State"
            description="No data state"
          />

          <div className="mt-6">

            <EmptyState
              icon={<Wallet size={24} />}
              title="No transactions yet"
              description="Start tracking your finances by adding your first transaction."
              action={
                <Button
                  onClick={() =>
                    toast.info(
                      "Opening transaction form..."
                    )
                  }
                >
                  Add Transaction
                </Button>
              }
            />

          </div>
        </Card>

        {/* ================================= */}
        {/* TOAST */}
        {/* ================================= */}

        <Card className="p-6">
          <TestTitle
            title="Toast"
            description="All notification variants"
          />

          <div className="mt-6 flex flex-wrap gap-3">

            <Button
              onClick={() =>
                toast.success(
                  "Transaction added successfully"
                )
              }
            >
              Success
            </Button>

            <Button
              variant="danger"
              onClick={() =>
                toast.error(
                  "Transaction failed"
                )
              }
            >
              Error
            </Button>

            <Button
              variant="secondary"
              onClick={() =>
                toast.info(
                  "Your goal is 72% complete"
                )
              }
            >
              Info
            </Button>

            <Button
              variant="outline"
              onClick={() =>
                toast.warning(
                  "Budget is almost exceeded"
                )
              }
            >
              Warning
            </Button>

          </div>
        </Card>

        {/* ================================= */}
        {/* TABLE */}
        {/* ================================= */}

        <Card className="p-6">
          <TestTitle
            title="Table"
            description="Transactions table"
          />

          <div className="mt-6">

            <Table>

              <Table.Header>
                <Table.Row>

                  <Table.Head>
                    Transaction
                  </Table.Head>

                  <Table.Head>
                    Category
                  </Table.Head>

                  <Table.Head>
                    Account
                  </Table.Head>

                  <Table.Head>
                    Status
                  </Table.Head>

                  <Table.Head className="text-right">
                    Amount
                  </Table.Head>

                </Table.Row>
              </Table.Header>

              <Table.Body>

                <Table.Row>

                  <Table.Cell>

                    <div className="flex items-center gap-3">

                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-success/10 text-success">
                        <CircleDollarSign size={18} />
                      </div>

                      <div>
                        <p className="font-medium">
                          Monthly Salary
                        </p>

                        <p className="text-xs text-muted-foreground">
                          Aug 01, 2026
                        </p>
                      </div>

                    </div>

                  </Table.Cell>

                  <Table.Cell>
                    Salary
                  </Table.Cell>

                  <Table.Cell>
                    Main Bank
                  </Table.Cell>

                  <Table.Cell>
                    <Badge variant="success">
                      Received
                    </Badge>
                  </Table.Cell>

                  <Table.Cell className="text-right font-semibold text-success">
                    +35,000 EGP
                  </Table.Cell>

                </Table.Row>

                <Table.Row>

                  <Table.Cell>

                    <div className="flex items-center gap-3">

                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-danger/10 text-danger">
                        <CreditCard size={18} />
                      </div>

                      <div>
                        <p className="font-medium">
                          Apartment Rent
                        </p>

                        <p className="text-xs text-muted-foreground">
                          Aug 02, 2026
                        </p>
                      </div>

                    </div>

                  </Table.Cell>

                  <Table.Cell>
                    Housing
                  </Table.Cell>

                  <Table.Cell>
                    Main Bank
                  </Table.Cell>

                  <Table.Cell>
                    <Badge>
                      Paid
                    </Badge>
                  </Table.Cell>

                  <Table.Cell className="text-right font-semibold text-danger">
                    -8,000 EGP
                  </Table.Cell>

                </Table.Row>

              </Table.Body>

            </Table>

          </div>
        </Card>

        {/* ================================= */}
        {/* FINAL STATUS */}
        {/* ================================= */}

        <Card className="border-success/30 bg-success/5 p-6">

          <div className="flex items-center gap-3">

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-success/10 text-success">
              <Check />
            </div>

            <div>
              <h2 className="font-semibold">
                UI System Test Lab
              </h2>

              <p className="text-sm text-muted-foreground">
                All components are ready for Layout phase.
              </p>
            </div>

          </div>

        </Card>

      </div>
    </main>
  );
}

function TestTitle({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div>
      <h2 className="text-xl font-semibold">
        {title}
      </h2>

      <p className="mt-1 text-sm text-muted-foreground">
        {description}
      </p>
    </div>
  );
}

function ProgressTest({
  label,
  value,
}: {
  label: string;
  value: number;
}) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between">
        <span className="text-sm font-medium">
          {label}
        </span>

        <span className="text-sm text-muted-foreground">
          {value}%
        </span>
      </div>

      <Progress value={value} />
    </div>
  );
}

export default App;