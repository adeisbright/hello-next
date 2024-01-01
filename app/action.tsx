"use server"
import { revalidateTag } from "next/cache" 
import {z} from "zod" 


export default async  function(){
    revalidateTag("collections")
} 



//This action will be attached to our founder creation form 

export const addFounder = async (prevState : any , formData : FormData) => {

    const schema = z.object({
        email : z.string({
            invalid_type_error : "Invalid Email"
        })
    })

    const validateFields = schema.safeParse({
        email : formData.get("email")
    })

    if(!validateFields.success){
        return {
            errors : validateFields.error.flatten().fieldErrors
        }
    }
    const rawFormData = {
        title: formData.get('name'),
        description : formData.get("email")
    }


    const url = "http://localhost:3000/grants"
    const res =  await fetch(url , {
        method : "POST",
        body: JSON.stringify(rawFormData),
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
   })
   const data = await res.json() 
   console.log(data)
    return {
        message: 'Completed',
    }
}

export const incrementLike = async (arg  :number) : Promise<number> => {
    console.log(arg)
    const result  = arg + 1 
    return result 
}