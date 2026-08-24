export type AccountType =
  | "cash"
  | "bank"
  | "credit";

export type TransactionType =
  | "income"
  | "expense";

export interface Account {
  id: string;
  name: string;
  type: AccountType;
  balance: number;
  currency: string;
  color?: string;
}

export interface Transaction {
  id: string;
  accountId: string;
  type: TransactionType;
  category: string;
  description: string;
  amount: number;
  date: string;
}

export interface Budget {
  id: string;
  category: string;
  limit: number;
  spent: number;
  color?: string;
}

export interface Goal {
  id: string;
  name: string;
  target: number;
  current: number;
  deadline: string;
}

export interface Bill {
  id: string;
  name: string;
  amount: number;
  dueDate: string;
  isPaid: boolean;
  category: string;
}