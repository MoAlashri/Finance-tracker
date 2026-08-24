import type { Bill } from "../types/finance";

export const bills: Bill[] = [
  {
    id: "bill-1",
    name: "Internet",
    amount: 650,
    dueDate: "2026-08-25",
    isPaid: false,
    category: "Utilities",
  },
  {
    id: "bill-2",
    name: "Netflix",
    amount: 250,
    dueDate: "2026-08-27",
    isPaid: false,
    category: "Entertainment",
  },
  {
    id: "bill-3",
    name: "Electricity",
    amount: 900,
    dueDate: "2026-08-28",
    isPaid: true,
    category: "Utilities",
  },
];