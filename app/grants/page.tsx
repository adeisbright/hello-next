import Link from "next/link"
import { Fragment } from "react"
import styles from "@/app/grants/grant.module.css"

const Page = () => {
    return (
        <Fragment>
            <h1 className={styles.blackWhite}> The Grant Home Page</h1> 
            <Link href="/founders">Visit Founders</Link>
        </Fragment>
    )
}
export default Page 