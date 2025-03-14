import { SubmitButton } from "./submit-button"

const getData = async () => {
    const url = "http://localhost:3000/grants"
    const res = await fetch(url , {next : {revalidate : 36000 , tags : ["collection"]}})
    if(!res.ok){
        throw new Error('Failed to Fetch Data')
    }
    const data = await res.json()
    console.log(data)
    return data
}
const Page = async ({ params }: { params: { slug: string } }) => {
    const data = await getData() 
    async function createBlog(formData :FormData){
        "use server"

        const rawFormData = {
            customerId: formData.get('customerId'),
            amount: formData.get('amount'),
            status: formData.get('status'),
        }
    }
    return (
        <>
            <div>My Post: {params.slug}</div>
            <form action={createBlog}>
                <input type="text" name="field-name" />
                <SubmitButton/>
            </form>
        </>
    )
}
export default Page 