"use client"

import { Fragment, useState  , useEffect} from "react"
import { availableGrants } from "./constant/default-grants"
import { IAvailableGrants, IGrant } from "./constant/interfaces" 
import { getData } from "./lib/fetch-helper"
import { GrantList } from "./features/grants"
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
  let [grants , setGrants] = useState<IGrant[]>([])
  const currentYear = new Date().getFullYear() 
    const url = "https://domain.com"
  const fetchGrants = (url : string) => {
    getData(url)
        .then((result) => {
            console.log(result);
            if (Array.isArray(result.data)) {
                setGrants(result.data);
            }else{
                setGrants(availableGrants)
            }
        })
        .catch((error) => console.error(error));
    };

  const filterGrant = (value : any) => {
    let grants = availableGrants.filter(grant => { 
        let {title , description} = grant 
        description = description.toLocaleLowerCase() ;
        title = title.toLocaleLowerCase() ;
        value = value.toLocaleLowerCase() ;
        if(description.includes(value) || title.includes(value)){
            return grant
        }
    })

    if (grants.length > 0){
        setGrants(grants)
    }else{
        setGrants([])
    }
}

//removes a grant from the view 
const removeGrant = (id : number) => {
   
    let remainingGrants = grants.filter(
        grant => grant._id !== id
    )
    setGrants(remainingGrants)
    
}
 
useEffect(() => {
    fetchGrants(url);
}, []);
  return (
  <Fragment>
    <Header header={HeaderStyle}/>

    {
                grants.length > 0 ? 
                (
                
                    <>
                        
                        <h3 className="framer m-b-2">List of Available Grants</h3>
                        <GrantList 
                        grants={grants} 
                        />
                    </>
                
                ) : (
                    <p className="framer">Loading grants or no grant to display yet</p>
                )
            }

    <footer className="center-text relative">
     <p className="fixed-bottom"> &copy; Adeleke Bright {currentYear} </p>
    </footer>
  </Fragment>
  )
}
export default Home 