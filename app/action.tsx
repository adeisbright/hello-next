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
        name: formData.get('name'),
        email : formData.get("email")
    }

    console.log(rawFormData)
    return {
        message: 'Completed',
    }
}