import type {
  HTMLAttributes,
  TdHTMLAttributes,
  ThHTMLAttributes,
} from "react";

type TableProps = HTMLAttributes<HTMLTableElement>;

type TableSectionProps = HTMLAttributes<HTMLTableSectionElement>;

type TableRowProps = HTMLAttributes<HTMLTableRowElement>;

type TableCellProps = TdHTMLAttributes<HTMLTableCellElement>;

type TableHeaderCellProps = ThHTMLAttributes<HTMLTableCellElement>;

function Table({
  className = "",
  ...props
}: TableProps) {
  return (
    <div className="w-full overflow-x-auto rounded-lg border border-border">
      <table
        className={`w-full text-sm ${className}`}
        {...props}
      />
    </div>
  );
}

function TableHeader({
  className = "",
  ...props
}: TableSectionProps) {
  return (
    <thead
      className={`border-b border-border bg-muted/50 ${className}`}
      {...props}
    />
  );
}

function TableBody({
  className = "",
  ...props
}: TableSectionProps) {
  return (
    <tbody
      className={`divide-y divide-border ${className}`}
      {...props}
    />
  );
}

function TableRow({
  className = "",
  ...props
}: TableRowProps) {
  return (
    <tr
      className={`transition-colors hover:bg-muted/50 ${className}`}
      {...props}
    />
  );
}

function TableHead({
  className = "",
  ...props
}: TableHeaderCellProps) {
  return (
    <th
      className={`
        px-4
        py-3
        text-left
        text-xs
        font-semibold
        uppercase
        tracking-wide
        text-muted-foreground
        ${className}
      `}
      {...props}
    />
  );
}

function TableCell({
  className = "",
  ...props
}: TableCellProps) {
  return (
    <td
      className={`
        px-4
        py-4
        text-foreground
        ${className}
      `}
      {...props}
    />
  );
}

Table.Header = TableHeader;
Table.Body = TableBody;
Table.Row = TableRow;
Table.Head = TableHead;
Table.Cell = TableCell;

export default Table;