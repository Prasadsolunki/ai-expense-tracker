import { useAuth } from '@/providers/AuthProvider'
import { useEffect, useState } from 'react'
import EmptyState from './EmptyState'
import AddExpenseForm from './AddExpenseForm'
import ExpensesList from './ExpensesList'
import ExpenseSummary from './ExpenseSummary'
import api from '@/api/axios'
import { Button } from '@/components/ui/button'
import { Sheet, SheetTrigger, SheetContent, SheetClose } from '@/components/ui/sheet'

export default function Dashboard(){
	const { user } = useAuth()
	const [expenses, setExpenses] = useState([])
	const [openAdd, setOpenAdd] = useState(false)
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		async function fetchExpenses(){
			setLoading(true)
			try{
				const res = await api.get('/expenses')
				setExpenses(res?.data || [])
			}catch(err){
				// ignore; fall back to empty state
				console.error('Fetch expenses failed', err)
			}finally{
				setLoading(false)
			}
		}
		fetchExpenses()
	}, [])

	function onAddExpense(expense){
		setExpenses(prev => [expense, ...prev])
		setOpenAdd(false)
	}

	return (
		<div className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
			<main className="mx-auto max-w-7xl px-4 py-12">
				<div className="flex items-center justify-between">
					<h1 className="text-4xl font-extrabold gradient-text neon-glow">Welcome to dashboard</h1>
					<div className="flex items-center gap-3">
						<span className="text-sm">{user?.name}</span>
						{user?.avatarUrl ? (
							<img src={user.avatarUrl} alt="avatar" className="h-8 w-8 rounded-full object-cover" />
						) : (
							<div className="h-8 w-8 rounded-full bg-neutral-200 dark:bg-neutral-800" />
						)}
					</div>
				</div>
				<p className="mt-4 text-neutral-600 dark:text-neutral-300">You're signed in. Build your expense insights here.</p>

				<div className="mt-8">
					<div className="mb-6">
						<ExpenseSummary items={expenses} />
					</div>
					<div className="flex items-center justify-between mb-6">
						<h2 className="text-xl font-medium">Expenses</h2>
						<div className="flex items-center gap-2">
							<Sheet open={openAdd} onOpenChange={setOpenAdd}>
								<SheetTrigger asChild>
									<Button variant="default">Add Expense</Button>
								</SheetTrigger>
								<SheetContent side="right">
									<div className="space-y-4">
										<AddExpenseForm onAdd={onAddExpense} />
										<div className="flex justify-end"><SheetClose asChild><Button variant="secondary">Close</Button></SheetClose></div>
									</div>
								</SheetContent>
							</Sheet>
						</div>
					</div>

					<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
						<div className="lg:col-span-2">
							{loading && <div className="text-sm text-neutral-500">Loading...</div>}
							{!loading && expenses.length === 0 && (
								<EmptyState onOpenAdd={() => setOpenAdd(true)} />
							)}
							{!loading && expenses.length > 0 && (
								<ExpensesList items={expenses} />
							)}
						</div>
						<div className="lg:col-span-1 hidden lg:block">
							<div className="sticky top-20">
								<AddExpenseForm onAdd={onAddExpense} />
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	)
}


