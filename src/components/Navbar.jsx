import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import getAPIs from '../../app.json';

const Navbar = props => {
    // Get apis form local
    const [APIs, setAPIs] = useState(getAPIs);

    // Menu
    const [isOpen, setOpen] = useState(false)

    const menu = () => {
        return setOpen(!isOpen)
    }

    const navigation = useNavigate();

    return (
        <>
            <div className="bg-slate-50">
                <div className="container mx-auto flex justify-between items-center px-3 lg:px-10 2xl:px-32 py-3">
                    <div className=" flex items-center">
                        {APIs.logo === "" ? null : <img className="w-8 m-0 mr-2" src={APIs.logo} />}
                        <h2 onClick={() => navigation('/')} className="font-bold my-0">{APIs.name}</h2>
                    </div>
                    <div onClick={menu} className="md:hidden top-5 right-5 w-10 h-10 border rounded-full flex justify-center items-center cursor-pointer">
                        <i className="fa-solid fa-bars"></i>
                    </div>
                    <div className={`fixed md:static top-0 md:top-auto w-full md:w-auto h-screen md:h-auto bg-slate-50 flex md:flex-row justify-center items-center z-10 md:z-auto transition-all ${isOpen ? "left-0" : "-left-full"}`} >
                        <div onClick={menu} className="md:hidden absolute top-5 right-5 w-10 h-10 border rounded-full flex justify-center items-center cursor-pointer">
                            <i className="fa-solid fa-xmark"></i>
                        </div>
                        <ul className="flex flex-col md:flex-row lg:space-x-3 list-none my-0 text-center md:text-left text-3xl md:text-sm">
                            <li onClick={menu}><NavLink className={({ isActive }) => isActive ? 'text-emerald-500 no-underline' : 'no-underline'} to="/about" end>About</NavLink></li>
                            <li onClick={menu}><NavLink className={({ isActive }) => isActive ? 'text-emerald-500 no-underline' : 'no-underline'} to="/whatisnew" end>What's new?</NavLink></li>
                            <li onClick={menu}><NavLink className={({ isActive }) => isActive ? 'text-emerald-500 no-underline' : 'no-underline'} to="/" end>Courses</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;