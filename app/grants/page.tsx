import Link from "next/link"
import { Fragment } from "react"
const Page = () => {
    return (
        <Fragment>
            <h1> The Grant Home Page</h1> 
            <Link href="/founders">Visit Founders</Link>
        </Fragment>
    )
}
export default Page 