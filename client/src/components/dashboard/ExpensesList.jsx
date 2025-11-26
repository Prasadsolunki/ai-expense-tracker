import React from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { formatCurrency } from '@/lib/utils'
import { Tag, Calendar, Trash2, Edit } from 'lucide-react'

function categoryIcon(category){
  switch((category || '').toLowerCase()){
    case 'food': return <Tag className="h-4 w-4 text-amber-500" />
    case 'transport': return <Calendar className="h-4 w-4 text-sky-500" />
    case 'utilities': return <Tag className="h-4 w-4 text-indigo-500" />
    case 'entertainment': return <Tag className="h-4 w-4 text-pink-500" />
    default: return <Tag className="h-4 w-4 text-neutral-500" />
  }
}

function ExpenseItem({ expense }){
  const date = expense?.date ? new Date(expense.date) : null
  return (
    <div className="flex items-center justify-between py-3 border-b last:border-b-0">
      <div className="flex items-center gap-3">
        <div className="rounded-md bg-neutral-100 p-2 dark:bg-neutral-800 w-10 h-10 flex items-center justify-center">{categoryIcon(expense.category)}</div>
        <div>
          <div className="text-sm font-medium">{expense.title}</div>
          <div className="text-xs text-neutral-500 flex items-center gap-2">
            <span className={"inline-flex items-center gap-2 rounded-full px-2 py-0.5 text-xs font-medium " + (expense.category ? (expense.category.toLowerCase()==='food' ? 'bg-amber-50 text-amber-700' : expense.category.toLowerCase()==='transport' ? 'bg-sky-50 text-sky-700' : expense.category.toLowerCase()==='utilities' ? 'bg-indigo-50 text-indigo-700' : expense.category.toLowerCase()==='entertainment' ? 'bg-pink-50 text-pink-700' : 'bg-neutral-50 text-neutral-700') : 'bg-neutral-50 text-neutral-700')}>
              {expense.category}
            </span>
            <span>•</span>
            <span>{date ? date.toLocaleDateString() : '—'}</span>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="text-sm font-semibold">{formatCurrency(Number(expense.amount))}</div>
        <div className="flex items-center gap-2 ml-2">
          <button className="text-neutral-400 hover:text-neutral-600" aria-label="edit"><Edit className="h-4 w-4" /></button>
          <button className="text-red-400 hover:text-red-600" aria-label="delete"><Trash2 className="h-4 w-4" /></button>
        </div>
      </div>
      <div className="flex items-center gap-3 ml-4">
        <button className="text-neutral-400 hover:text-neutral-600"><Edit className="h-4 w-4" /></button>
        <button className="text-red-400 hover:text-red-600"><Trash2 className="h-4 w-4" /></button>
      </div>
    </div>
  )
}

export default function ExpensesList({ items }){
  return (
    <Card className="mx-auto max-w-4xl">
      <CardHeader>
        <CardTitle>Your expenses</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="divide-y">
          {items.map(item => (
            <ExpenseItem key={item._id || item.id} expense={item} />
          ))}
          {items.length === 0 && (
            <div className="py-6 text-center text-neutral-500">No expenses to display.</div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
