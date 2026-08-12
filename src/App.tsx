import { useState } from "react";
import {
  CheckCircle2,
  CircleDollarSign,
  CreditCard,
  Wallet,
} from "lucide-react";
import { toast } from "sonner";

import Button from "./components/ui/Button";
import Card from "./components/ui/Card";
import Badge from "./components/ui/Badge";
import Input from "./components/ui/Input";
import Dialog from "./components/ui/Dialog";
import Select from "./components/ui/Select";
import Progress from "./components/ui/Progress";
import Skeleton from "./components/ui/Skeleton";
import EmptyState from "./components/ui/EmptyState";
import Table from "./components/ui/Table";

function App() {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <main className="min-h-screen bg-background p-6 text-foreground md:p-10">
      <div className="mx-auto max-w-7xl space-y-10">

        {/* Header */}
        <section>
          <Badge variant="success">
            Component Test Lab
          </Badge>

          <h1 className="mt-3 text-4xl font-bold tracking-tight">
            FinTracker UI System
          </h1>

          <p className="mt-2 text-muted-foreground">
            Testing every reusable component before moving
            to the next phase.
          </p>
        </section>

        {/* ========================================= */}
        {/* BUTTON */}
        {/* ========================================= */}

        <Card className="p-6">
          <SectionTitle
            title="Button"
            description="Variants, sizes and disabled state."
          />

          <div className="mt-6 space-y-6">

            <div className="flex flex-wrap gap-3">
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
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Button size="sm">
                Small
              </Button>

              <Button size="md">
                Medium
              </Button>

              <Button size="lg">
                Large
              </Button>

              <Button disabled>
                Disabled
              </Button>
            </div>

          </div>
        </Card>

        {/* ========================================= */}
        {/* BADGE */}
        {/* ========================================= */}

        <Card className="p-6">
          <SectionTitle
            title="Badge"
            description="Financial status indicators."
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

        {/* ========================================= */}
        {/* INPUT */}
        {/* ========================================= */}

        <Card className="p-6">
          <SectionTitle
            title="Input"
            description="Text, number, disabled and placeholder states."
          />

          <div className="mt-6 grid gap-4 md:grid-cols-2">

            <Input
              placeholder="Transaction name"
            />

            <Input
              type="number"
              placeholder="Amount"
            />

            <Input
              type="email"
              placeholder="Email address"
            />

            <Input
              disabled
              placeholder="Disabled input"
            />

          </div>
        </Card>

        {/* ========================================= */}
        {/* SELECT */}
        {/* ========================================= */}

        <Card className="p-6">
          <SectionTitle
            title="Select"
            description="Reusable native select."
          />

          <div className="mt-6 grid gap-4 md:grid-cols-2">

            <Select defaultValue="">
              <option value="" disabled>
                Select category
              </option>

              <option value="food">
                Food
              </option>

              <option value="transportation">
                Transportation
              </option>

              <option value="shopping">
                Shopping
              </option>

              <option value="entertainment">
                Entertainment
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

        {/* ========================================= */}
        {/* PROGRESS */}
        {/* ========================================= */}

        <Card className="p-6">
          <SectionTitle
            title="Progress"
            description="Goal and budget progress states."
          />

          <div className="mt-6 space-y-6">

            <ProgressExample
              label="Germany Trip"
              value={72}
            />

            <ProgressExample
              label="Emergency Fund"
              value={45}
            />

            <ProgressExample
              label="Monthly Budget"
              value={91}
            />

            <ProgressExample
              label="Over 100% test"
              value={150}
            />

            <ProgressExample
              label="Negative value test"
              value={-20}
            />

          </div>
        </Card>

        {/* ========================================= */}
        {/* DIALOG */}
        {/* ========================================= */}

        <Card className="p-6">
          <SectionTitle
            title="Dialog"
            description="Controlled component and interaction testing."
          />

          <div className="mt-6">
            <Button
              onClick={() => setDialogOpen(true)}
            >
              Open Transaction Dialog
            </Button>
          </div>

          <Dialog
            open={dialogOpen}
            onClose={() => setDialogOpen(false)}
            title="Add Transaction"
            description="Test the reusable Dialog component."
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
                  Select type
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
                  Save Transaction
                </Button>
              </div>

            </div>
          </Dialog>
        </Card>

        {/* ========================================= */}
        {/* SKELETON */}
        {/* ========================================= */}

        <Card className="p-6">
          <SectionTitle
            title="Skeleton"
            description="Loading state preview."
          />

          <div className="mt-6 space-y-4">
            <Skeleton className="h-8 w-48" />

            <Skeleton className="h-4 w-full" />

            <Skeleton className="h-4 w-3/4" />

            <Skeleton className="h-32 w-full" />
          </div>
        </Card>

        {/* ========================================= */}
        {/* EMPTY STATE */}
        {/* ========================================= */}

        <Card className="p-6">
          <SectionTitle
            title="Empty State"
            description="No-data state with icon and action."
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

        {/* ========================================= */}
        {/* TOAST */}
        {/* ========================================= */}

        <Card className="p-6">
          <SectionTitle
            title="Toast"
            description="Notification variants."
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
                  "Something went wrong"
                )
              }
            >
              Error
            </Button>

            <Button
              variant="secondary"
              onClick={() =>
                toast.info(
                  "Your Germany Trip goal is 72% complete"
                )
              }
            >
              Info
            </Button>

            <Button
              variant="outline"
              onClick={() =>
                toast.warning(
                  "Your food budget is almost exceeded"
                )
              }
            >
              Warning
            </Button>

          </div>
        </Card>

        {/* ========================================= */}
        {/* TABLE */}
        {/* ========================================= */}

        <Card className="p-6">
          <SectionTitle
            title="Table"
            description="Transaction table composition test."
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

        {/* ========================================= */}
        {/* CARD */}
        {/* ========================================= */}

        <Card className="p-6">
          <SectionTitle
            title="Card"
            description="Card composition and nested components."
          />

          <div className="mt-6 grid gap-4 md:grid-cols-3">

            <Card className="p-5">
              <p className="text-sm text-muted-foreground">
                Total Balance
              </p>

              <p className="mt-2 text-2xl font-bold">
                125,450 EGP
              </p>

              <Badge
                variant="success"
                className="mt-3"
              >
                +12.5%
              </Badge>
            </Card>

            <Card className="p-5">
              <p className="text-sm text-muted-foreground">
                Monthly Income
              </p>

              <p className="mt-2 text-2xl font-bold text-success">
                +47,750 EGP
              </p>
            </Card>

            <Card className="p-5">
              <p className="text-sm text-muted-foreground">
                Monthly Expenses
              </p>

              <p className="mt-2 text-2xl font-bold text-danger">
                -18,250 EGP
              </p>
            </Card>

          </div>
        </Card>

      </div>
    </main>
  );
}

function SectionTitle({
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

function ProgressExample({
  label,
  value,
}: {
  label: string;
  value: number;
}) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
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