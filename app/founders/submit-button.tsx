"use client" 
import { useFormStatus } from "react-dom"
export const SubmitButton = () => {
    const {pending} = useFormStatus() 

    return (
        <button className="btn btn-register" type="submit" aria-disabled={pending}>Add</button>
    )
}