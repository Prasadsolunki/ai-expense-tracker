import React from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

function ExpenseItem({ expense }){
  const date = expense?.date ? new Date(expense.date) : null
  return (
    <div className="flex items-center justify-between py-3 border-b last:border-b-0">
      <div>
        <div className="text-sm font-medium">{expense.title}</div>
        <div className="text-xs text-neutral-500">{expense.category} • {date ? date.toLocaleDateString() : '—'}</div>
      </div>
      <div className="text-sm font-semibold">${Number(expense.amount).toFixed(2)}</div>
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
