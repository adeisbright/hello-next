import { Fragment } from "react"

interface INav {
  navList : Record<string,any>[] 
  navClass : string
}
const NavList = (navItem : INav) => {
    const {navList , navClass} = navItem
    let navigationLinks;
    if (navList.length > 0) {
        navigationLinks = navList.map((navLink, index) => (
            <Fragment key={index}>
                {navLink.to.includes("http") ? (
                    <a href={navLink.to} className={navLink.classTag}>
                        {navLink.title}
                    </a>
                ) : (
                    <a href={navLink.to} className={navLink.classTag}>
                        {navLink.title}
                    </a>
                )}
            </Fragment>
        ));
    }
    return navigationLinks && <nav className={navClass}>{navigationLinks}</nav>;
};

const MenuLinks : Record<string,any> = [
  {
      to: "/about",
      title: "About",
      classTag: "user-link",
  },
  {
      to: "/login",
      title: "Login",
      classTag: "user-link login",
  },
];


const HeaderStyle = {
  headerClass: "border-line-bottom m-b-3",
  containerClass: "framer d-flex justify-between",
  homeClass: "brand-name",
  homeName: "Heirs Grant",
  navList: [
    {
        to: "/about",
        title: "About",
        classTag: "user-link",
    },
    {
        to: "/login",
        title: "Login",
        classTag: "user-link login",
    },
  ],
  navClass: "main-nav pad-5",
  homeUrl: "/",
};


const Header = (header : Record<string,any>) => {
    return (
        <header className={header.headerClass}>
            <section className={header.containerClass}>
                <section>
                    <h1>
                        <a href={header.homeUrl} className={header.homeClass}>
                            {header.homeName}
                        </a>
                    </h1>
                </section>
                {/* {header.navList.length > 0 && (
                    <NavList
                        navList={header.navList}
                        navClass={header.navClass}
                    />
                )} */}
            </section>
        </header>
    );
};
const Home = () => {
  const currentYear = new Date().getFullYear() 
  return (
  <Fragment>
    <Header header={HeaderStyle}/>
    {/* <h1>Hello, Adeleke Bright </h1> 
    <p>I am Learning NextJS for a Purpose</p> */}
    <footer className="center-text relative">
     <p className="fixed-bottom"> &copy; Adeleke Bright {currentYear} </p>
    </footer>
  </Fragment>
  )
}
export default Home 