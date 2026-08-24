import type { Account } from "../types/finance";

export const accounts: Account[] = [
  {
    id: "acc-1",
    name: "Main Bank",
    type: "bank",
    balance: 24500,
    currency: "EGP",
  },
  {
    id: "acc-2",
    name: "Cash Wallet",
    type: "cash",
    balance: 3200,
    currency: "EGP",
  },
  {
    id: "acc-3",
    name: "Credit Card",
    type: "credit",
    balance: -4500,
    currency: "EGP",
  },
];