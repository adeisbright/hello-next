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


interface IHeaderProps {
    headerClass : string 
    containerClass : string 
    homeClass  :string 
    homeName : string 
    navList : Record<string,any>[] 
    navClass : string 
    homeUrl : string 
}

const HeaderStyle : IHeaderProps = {
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


const Header = ({header} : {header : Record<string , any>}) => {
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
                {header.navList.length > 0 && (
                    <NavList
                        navList={header.navList}
                        navClass={header.navClass}
                    />
                )}
            </section>
        </header>
    );
};

const Home = () => {
  const currentYear = new Date().getFullYear() 
  return (
  <Fragment>
    <Header header={HeaderStyle}/>
    <footer className="center-text relative">
     <p className="fixed-bottom"> &copy; Adeleke Bright {currentYear} </p>
    </footer>
  </Fragment>
  )
}
export default Home 