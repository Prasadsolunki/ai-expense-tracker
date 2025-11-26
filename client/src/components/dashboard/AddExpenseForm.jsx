import React, { useState } from 'react'
import api from '@/api/axios'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card'
import { toast } from 'sonner'

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
    <Card className="max-w-md">
      <form onSubmit={handleSubmit}>
        <CardHeader>
          <CardTitle>Add Expense</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-3">
            <input name="title" value={data.title} onChange={handleChange} placeholder="Title" className="w-full rounded-md border border-neutral-200 px-3 py-2" />
            <input name="amount" value={data.amount} onChange={handleChange} placeholder="Amount" type="number" step="0.01" className="w-full rounded-md border border-neutral-200 px-3 py-2" />
            <select name="category" value={data.category} onChange={handleChange} className="w-full rounded-md border border-neutral-200 px-3 py-2">
              <option>Food</option>
              <option>Transport</option>
              <option>Utilities</option>
              <option>Entertainment</option>
              <option>Other</option>
            </select>
            <input name="date" value={data.date} onChange={handleChange} type="date" className="w-full rounded-md border border-neutral-200 px-3 py-2" />
            <textarea name="note" value={data.note} onChange={handleChange} placeholder="Note (optional)" rows={3} className="w-full rounded-md border border-neutral-200 px-3 py-2" />
          </div>
        </CardContent>
        <CardFooter className="flex justify-end gap-3">
          <Button type="submit" disabled={loading}>{loading ? 'Adding...' : 'Add Expense'}</Button>
        </CardFooter>
      </form>
    </Card>
  )
}
