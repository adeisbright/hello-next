"use server"
import { revalidateTag } from "next/cache" 

export default function async(){
    revalidateTag("collections")
}