"use client" 
import { useFormState } from "react-dom" 
import { addFounder } from "../action"
import { SubmitButton } from "./submit-button"

const initialState = {
    message : ""
}

export const Signup = () => {
    const [state , formAction] = useFormState(addFounder , initialState) 
    return (
        <form action={formAction}>
          <label htmlFor="email">Email</label>
          <input
            type="email" 
            id="email" 
            name="email" 
            className="input input-border-faint"
            required 
            />
            <label htmlFor="name">Name</label>
          <input
            type="text" 
            id="name" 
            name="name" 
            className="input input-border-faint"
            required 
            />
          {/* ... */}
          <p aria-live="polite" className="sr-only">
            {state?.message}
          </p>
          <SubmitButton/>
        </form>
      )
}