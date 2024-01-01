"use server"
import { revalidateTag , revalidatePath } from "next/cache" 
import { redirect } from 'next/navigation'
import {z} from "zod" 

//This action will be attached to our founder creation form 
export const addFounder = async (prevState : any , formData : FormData) => {
    try{
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
        // revalidatePath("/founders") //This allows you to purge the data that is cache for a particular path
        return {
            message: 'Completed',
        }
    }catch(err){
        return {
            message : "Error"
        }
    }finally{
        revalidatePath("/founders") //This allows you to purge the data that is cache for a particular path
        redirect("/")
    }
}

export const incrementLike = async (arg  :number) : Promise<number> => {
    const result  = arg + 1 
    return result 
}

export const incrementViews = async (arg  :number) : Promise<number> => {
    const result  = arg + 1 
    return result 
}

export default async  function(){
    revalidateTag("collections")
} 