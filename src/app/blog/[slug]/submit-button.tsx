'use client'
 
import { useFormStatus } from 'react-dom'
 
export function SubmitButton() {
  const { pending } = useFormStatus()
 
  return (
    <button className="btn btn-register" type="submit" aria-disabled={pending}>
      Add
    </button>
  )
}