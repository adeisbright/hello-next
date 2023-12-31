"use client"
import { FormEvent, useState } from "react"

export const GrantForm = () => {
    const [title , setTitle] = useState<string>("") 
    const [description , setDescription] = useState<string>("") 

    const url = "http://localhost:3000/grants"
    const handleFormSubmit = async (event  : FormEvent) => {
        try{
            event.preventDefault() 
            if(title && description){
                const res =  await fetch(url , {
                    method : "POST",
                    body: JSON.stringify({
                        title ,
                        description ,
                    }),
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    },
               })
               const data = await res.json() 
               console.log(data)
            }
        }catch(err){
            console.log(err)
        }
    }
    return (
        <>
            <form className="todo-form"  onSubmit={handleFormSubmit}>
                <label htmlFor="title">Title</label>
                <input 
                    type="text" 
                    title="title" 
                    className="input input-border-faint"
                    id="title"
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label htmlFor="description">Title</label>
                <textarea 
                    title="description" 
                    className="input input-border-faint"
                    onChange={(e) => setDescription(e.target.value)}
                />
                <button 
                    className="btn btn-register" 
                    type="submit" 
                    aria-label="button"
                    id="description"
                >
                        Add
                </button>
            </form>
        </>
    )
}