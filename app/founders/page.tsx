import Link from "next/link"
import { Fragment } from "react"
import { SubmitButton } from "./submit-button"
import { addFounder } from "../action"
import { Signup } from "./signup"
const Page = () => {
    // const addFounder = async (formData : FormData) => {
    //     "use server" 
    //     const rawFormData = {
    //         founderId: formData.get('founderId'),
    //         name: formData.get('name'),
    //         status: formData.get('status'),
    //     }
    // }
    return (
        <Fragment>
            <main className="framer"> 
                <h1> The Founders Home Page</h1> 
                {/* <form action={addFounder}>
                    <SubmitButton/>
                </form> */}
                <Signup/>
                <Link href="/grants">Visit Grants</Link>
            </main>
        </Fragment>
    )
}
export default Page 