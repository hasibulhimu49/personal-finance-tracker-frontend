import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTransactionStore } from '../../features/transaction/transactionSlice';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import { toast } from 'sonner';

const TransactionList = () => {
  const { transactions, fetchTransactions, deleteTransaction, isLoading } = useTransactionStore();
  const [filterType, setFilterType] = useState<string>('ALL');

  useEffect(() => {
    fetchTransactions();
  }, [fetchTransactions]);

  const filteredTransactions = transactions.filter(t => filterType === 'ALL' || t.type === filterType);

  const handleDelete = async (id: number) => {
    if (confirm('Are you sure?')) {
      await deleteTransaction(id);
      toast.success('Transaction deleted');
    }
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Transactions</h1>
      <div className="flex justify-between">
        <Select value={filterType} onValueChange={setFilterType}>
          <SelectTrigger className="w-48">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="ALL">All</SelectItem>
            <SelectItem value="INCOME">Income</SelectItem>
            <SelectItem value="EXPENSE">Expense</SelectItem>
          </SelectContent>
        </Select>
        <Link to="/transactions/add">
          <Button>Add Transaction</Button>
        </Link>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Transaction List</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {filteredTransactions.map(t => (
              <li key={t.id} className="flex justify-between items-center p-2 border rounded">
                <div>
                  <p>{t.description || t.category}</p>
                  <p className="text-sm text-muted-foreground">{t.localDate} - {t.category}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={t.type === 'INCOME' ? 'text-green-600' : 'text-red-600'}>
                    {t.type === 'INCOME' ? '+' : '-'}${t.amount}
                  </span>
                  <Link to={`/transactions/edit/${t.id}`}>
                    <Button size="sm">Edit</Button>
                  </Link>
                  <Button size="sm" variant="destructive" onClick={() => handleDelete(t.id)}>Delete</Button>
                </div>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default TransactionList;