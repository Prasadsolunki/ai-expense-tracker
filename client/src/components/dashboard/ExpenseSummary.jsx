import React from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { DollarSign, List, PieChart } from 'lucide-react'
import { formatCurrency } from '@/lib/utils'

function SmallStat({ Icon, title, value }){
  return (
    <Card className="p-4 flex items-center gap-4">
      <div className="rounded-md bg-purple-100 p-2 text-purple-600 dark:bg-purple-900 dark:text-purple-300">
        <Icon className="h-6 w-6" />
      </div>
      <div>
        <div className="text-xs text-neutral-500">{title}</div>
        <div className="text-lg font-semibold">{value}</div>
      </div>
    </Card>
  )
}

export default function ExpenseSummary({ items }){
  const total = items.reduce((s, it) => s + Number(it.amount || 0), 0)
  const count = items.length
  const avg = count ? total / count : 0
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <SmallStat Icon={DollarSign} title="Total spent" value={formatCurrency(total)} />
      <SmallStat Icon={List} title="Transactions" value={`${count}`} />
      <SmallStat Icon={PieChart} title="Average" value={formatCurrency(avg)} />
    </div>
  )
}
