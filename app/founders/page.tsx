import Link from "next/link"
import { Fragment } from "react"
const Page = () => {
    return (
        <Fragment>
            <h1> The Founders Home Page</h1> 
            <Link href="/grants">Visit Grants</Link>
        </Fragment>
    )
}
export default Page 