import { Link, Outlet } from "react-router-dom";
import { Fragment } from "react";
import { ReactComponent as CrownLogo } from "../../../assets/crown.svg";
import "./navigation.styles.scss";

const Navigation = () =>{
    return (
      <>
        <div className="navigation">
            <Link className="nav-link" to='/'>
               <CrownLogo className="logo"/>
            </Link>
         
            <div className="nav-links-container">
                <Link className="nav-link" to='/shop'>
                    SHOP
                </Link>
            </div>
        </div>
        <Outlet/>
      </>
    )
  }

export default Navigation;