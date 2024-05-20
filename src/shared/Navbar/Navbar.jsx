import { NavLink } from "react-router-dom";
import logo from '../../assets/small-pic/logo.png'
import './NavBar.css'

const Navbar = () => {

    const naveLinks =<>
        <li><NavLink to="/">HOME</NavLink></li>
        <li><NavLink to="/about">ABOUT</NavLink></li>
        <li><NavLink to="/events">EVENTS</NavLink></li>
        <li><NavLink to="/speaker">SPEAKERS</NavLink></li>
        <li><NavLink to="/contact">CONTACT</NavLink></li>
        <li><NavLink to="/login">LOGIN</NavLink></li>
        

    </>
    return (
       
            <div className="navbar bg-white">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul  tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                naveLinks
                            }
                        
                    </ul>
                    </div>
                    {
                        <img src={logo} alt="" />
                    }
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul id="sidebar" className="menu menu-horizontal px-1">
                    {
                        naveLinks
                    }
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
        </div>
        
    );
};

export default Navbar;