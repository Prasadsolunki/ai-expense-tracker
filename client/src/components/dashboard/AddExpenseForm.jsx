import React, { useState } from 'react'
import api from '@/api/axios'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card'
import { toast } from 'sonner'
import { Tag, DollarSign, Calendar, FileText } from 'lucide-react'

const DEFAULT = { title: '', amount: '', category: 'Other', date: '', note: '' }

export default function AddExpenseForm({ onAdd }){
  const [data, setData] = useState(DEFAULT)
  const [loading, setLoading] = useState(false)

  function handleChange(e){
    const { name, value } = e.target
    setData(d => ({...d, [name]: value}))
  }

  async function handleSubmit(e){
    e.preventDefault();
    if(!data.title || !data.amount || !data.date || !data.category){
      toast.error('Please fill in required fields (title, amount, date, category)')
      return
    }
    setLoading(true)
    const payload = { title: data.title, amount: parseFloat(data.amount), category: data.category, date: data.date, note: data.note }
    try{
      const res = await api.post('/expenses', payload)
      const expense = res?.data || payload
      onAdd(expense)
      setData(DEFAULT)
      toast.success('Expense added')
    }catch(err){
      // fallback: add locally
      const fallback = { ...payload, id: Date.now() }
      onAdd(fallback)
      toast.success('Expense added locally (offline)')
      console.error(err)
    }finally{
      setLoading(false)
    }
  }

  return (
    <Card className="max-w-md p-4">
      <form onSubmit={handleSubmit}>
        <CardHeader>
          <CardTitle>Add Expense</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-3">
            <label className="relative block">
              <span className="sr-only">Title</span>
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400"><Tag className="h-4 w-4" /></div>
              <input name="title" value={data.title} onChange={handleChange} placeholder="Title" className="w-full rounded-md border border-neutral-200 pl-10 pr-3 py-3 text-sm shadow-sm" />
            </label>
            <label className="relative block">
              <span className="sr-only">Amount</span>
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400"><DollarSign className="h-4 w-4" /></div>
              <input name="amount" value={data.amount} onChange={handleChange} placeholder="Amount" type="number" step="0.01" className="w-full rounded-md border border-neutral-200 pl-10 pr-3 py-3 text-sm shadow-sm" />
            </label>
            <label className="relative block">
              <span className="sr-only">Category</span>
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400"><Tag className="h-4 w-4" /></div>
              <select name="category" value={data.category} onChange={handleChange} className="w-full rounded-md border border-neutral-200 pl-10 pr-3 py-3 text-sm shadow-sm">
                <option>Food</option>
                <option>Transport</option>
                <option>Utilities</option>
                <option>Entertainment</option>
                <option>Other</option>
              </select>
            </label>
            <label className="relative block">
              <span className="sr-only">Date</span>
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400"><Calendar className="h-4 w-4" /></div>
              <input name="date" value={data.date} onChange={handleChange} type="date" className="w-full rounded-md border border-neutral-200 pl-10 pr-3 py-3 text-sm shadow-sm" />
            </label>
            <label className="relative block">
              <span className="sr-only">Note</span>
              <div className="absolute left-3 top-3 text-neutral-400"><FileText className="h-4 w-4" /></div>
              <textarea name="note" value={data.note} onChange={handleChange} placeholder="Note (optional)" rows={3} className="w-full rounded-md border border-neutral-200 pl-10 pr-3 py-3 text-sm shadow-sm" />
            </label>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end gap-3">
          <Button type="submit" className="text-base" disabled={loading}>{loading ? 'Adding...' : 'Add Expense'}</Button>
        </CardFooter>
      </form>
    </Card>
  )
}
