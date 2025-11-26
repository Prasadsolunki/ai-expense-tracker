import React from 'react'
import { Button } from '@/components/ui/button'
import { PlusSquare } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'

export default function EmptyState({ onOpenAdd }){
  return (
    <Card className="mx-auto max-w-xl text-center py-12">
      <CardHeader>
        <CardTitle>No expenses yet</CardTitle>
        <CardDescription>You haven't added any expenses. Start by adding your first transaction.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center gap-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-4.418 0-8 1.79-8 4v2h16v-2c0-2.21-3.582-4-8-4z" />
          </svg>
          <p className="text-neutral-600 dark:text-neutral-300">Keep track of your expenses to see insights like spending by category and total costs over time.</p>
          <Button onClick={onOpenAdd} className="inline-flex items-center gap-2"><PlusSquare className="h-4 w-4" /> Add your first expense</Button>
        </div>
      </CardContent>
    </Card>
  )
}
