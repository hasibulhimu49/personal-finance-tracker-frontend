import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useTransactionStore } from '../../features/transaction/transactionSlice';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import { Textarea } from '../../components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { toast } from 'sonner';

const categories = ['Food', 'Transport', 'Salary', 'Shopping', 'Bills', 'Entertainment', 'Healthcare', 'Education', 'Other'];

const transactionSchema = z.object({
  amount: z.number().positive('Amount must be positive'),
  category: z.string().min(1, 'Category is required'),
  type: z.enum(['INCOME', 'EXPENSE']),
  localDate: z.string().min(1, 'Date is required'),
  description: z.string().optional(),
});

type TransactionForm = z.infer<typeof transactionSchema>;

const EditTransaction = () => {
  const { id } = useParams<{ id: string }>();
  const { transactions, updateTransaction, isLoading } = useTransactionStore();
  const navigate = useNavigate();
  const transaction = transactions.find(t => t.id === Number(id));

  const { register, handleSubmit, setValue, formState: { errors } } = useForm<TransactionForm>({
    resolver: zodResolver(transactionSchema),
  });

  useEffect(() => {
    if (transaction) {
      setValue('amount', transaction.amount);
      setValue('category', transaction.category);
      setValue('type', transaction.type);
      setValue('localDate', transaction.localDate);
      setValue('description', transaction.description || '');
    }
  }, [transaction, setValue]);

  const onSubmit = async (data: TransactionForm) => {
    if (id) {
      await updateTransaction(Number(id), data);
      toast.success('Transaction updated');
      navigate('/transactions');
    }
  };

  if (!transaction) return <div>Transaction not found</div>;

  return (
    <div className="max-w-md mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Edit Transaction</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <Label htmlFor="amount">Amount</Label>
              <Input id="amount" type="number" step="0.01" {...register('amount', { valueAsNumber: true })} />
              {errors.amount && <p className="text-destructive text-sm">{errors.amount.message}</p>}
            </div>
            <div>
              <Label htmlFor="category">Category</Label>
              <Select onValueChange={(value) => setValue('category', value)} defaultValue={transaction.category}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(cat => <SelectItem key={cat} value={cat}>{cat}</SelectItem>)}
                </SelectContent>
              </Select>
              {errors.category && <p className="text-destructive text-sm">{errors.category.message}</p>}
            </div>
            <div>
              <Label htmlFor="type">Type</Label>
              <Select onValueChange={(value: 'INCOME' | 'EXPENSE') => setValue('type', value)} defaultValue={transaction.type}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="INCOME">Income</SelectItem>
                  <SelectItem value="EXPENSE">Expense</SelectItem>
                </SelectContent>
              </Select>
              {errors.type && <p className="text-destructive text-sm">{errors.type.message}</p>}
            </div>
            <div>
              <Label htmlFor="localDate">Date</Label>
              <Input id="localDate" type="date" {...register('localDate')} />
              {errors.localDate && <p className="text-destructive text-sm">{errors.localDate.message}</p>}
            </div>
            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea id="description" {...register('description')} />
            </div>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? 'Updating...' : 'Update Transaction'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default EditTransaction;