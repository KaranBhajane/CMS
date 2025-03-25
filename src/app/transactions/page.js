'use client';
import TransactionTable from "../components/transactions/TransactionTable";

export default function TransactionsPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4 text-gray-800">Transactions</h1>
      <TransactionTable  />
    </div>
  );
}
