import Link from "next/link";
import { Fragment } from "react";
import styles from "./grant.module.css";
import { GrantForm } from "./create-grant";
const Page = () => {
  return (
    <Fragment>
      <main className="framer">
        <h1 className={styles.blackWhite}> The Grant Home Page</h1>
        <GrantForm />
        <Link href="/founders">Visit Founders on {process.env.APP_NAME} </Link>
      </main>
    </Fragment>
  );
};
export default Page;
