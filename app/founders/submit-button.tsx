"use client" 
import { useFormStatus } from "react-dom"

export const SubmitButton = () => {
    const {pending} = useFormStatus() 

    return (
        <button 
            className="btn btn-register" 
            type="submit" 
            disabled={pending}
            aria-disabled={pending}>
                {pending ? "Adding" : "Add"}
        </button>
    )
}