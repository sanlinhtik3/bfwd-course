import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import getAPIs from '../../app.json';

const Navbar = props => {
    // Get apis form local
    const [APIs, setAPIs] = useState(getAPIs);

    const navigation = useNavigate();
    return (
        <>
            <div className="bg-slate-50">
                <div className="container mx-auto flex justify-between items-center px-3 lg:px-10 2xl:px-32 py-3">
                    <div>
                        <h2 onClick={() => navigation('/')} className="font-bold my-0">{APIs.name}</h2>
                    </div>
                    <div>
                        <ul className="flex lg:flex-row lg:space-x-3 list-none my-0">
                            <li><NavLink className={({isActive}) => isActive ? 'text-pink-500 no-underline' : 'no-underline'} to="/about">About</NavLink></li>
                            <li><NavLink className={({isActive}) => isActive ? 'text-pink-500 no-underline' : 'no-underline'} to="/whatisnew">What's new?</NavLink></li>
                            <li><NavLink className={({isActive}) => isActive ? 'text-pink-500 no-underline' : 'no-underline'} to="/">Courses</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;