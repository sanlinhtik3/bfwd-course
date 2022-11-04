import { useState } from "react"
import { NavLink, useNavigate } from "react-router-dom";

import getAPIs from "../../app.json";

const Nav = () => {

    // Get apis form local
    const [APIs, setAPIs] = useState(getAPIs);

    const navigation = useNavigate();

    const [isApplicationMenu, setIsApplicationMenu] = useState(false);
    const [isDevelopmentMenu, setIsDevelopmentMenu] = useState(false);
    const [isOpenMenuIcon, setOpenMenuIcon] = useState(false);

    const menuIcon = () => {
      setOpenMenuIcon(!isOpenMenuIcon);
    };

    const ApplicationMenu = () => {
      setIsApplicationMenu(!isApplicationMenu);
    };
    const DevelopmentMenu = () => {
      setIsDevelopmentMenu(!isDevelopmentMenu);
    };

    return (
        <>
            <div className="shadow relative z-10">
                <div className="container mx-auto px-3 lg:px-10 2xl:px-32 py-3">
                    <nav className="text-sm prose prose-slate max-w-none flex justify-between items-center">
                        <div className="logo flex items-center">
                            {APIs.logo === "" ? null : <img className="w-8 m-0 mr-2" src={APIs.logo} />}
                            <h2 onClick={() => navigation('/')} className="font-bold my-0">{APIs.name}</h2>
                            {/* <img className="w-10 my-3 lg:m-0" src="https://bfwd-course.vercel.app/bl.svg" alt=""/> */}
                        </div>
                        <div className={`show-mobild-menu-box lg:flex transition ${isOpenMenuIcon ? "flex" : "hidden"}`}>
                            <div className="fixed lg:static top-5 lg:top-auto left-0 lg:left-auto right-0 lg:right-auto w-[98%] lg:w-auto bg-white lg:bg-transparent shadow-2xl lg:shadow-none mx-auto rounded-2xl lg:rounded-none p-1">
                                <div onClick={menuIcon} className="lg:hidden menu-icon absolute top-5 right-5 flex justify-center items-center rounded-full border w-10 h-10 bg-white">
                                    <i className="fa-solid fa-xmark"></i>
                                </div>
                                <ul className="lg:flex justify-center lg:space-x-5 list-none pl-0 my-0">
                                    <li className="group py-1 my-0 border-b lg:border-none last:border-none">
                                        <div className="rounded-xl my-0 text-slate-600 lg:hover:bg-slate-200 px-3 py-1 transition duration-75">
                                            <NavLink onClick={menuIcon} className={({ isActive }) => isActive ? 'text-emerald-500 no-underline' : 'no-underline'} to="/" end>Home</NavLink>
                                        </div>
                                    </li>
                                    <li className="group py-1 my-0 border-b lg:border-none last:border-none">
                                        <div className="rounded-xl my-0 text-slate-600 lg:hover:bg-slate-200 px-3 py-1 transition duration-75">
                                            <NavLink onClick={menuIcon} className={({ isActive }) => isActive ? 'text-emerald-500 no-underline' : 'no-underline'} to="/about" end>About</NavLink>
                                        </div>
                                    </li>
                                    <li className="group py-1 my-0 border-b lg:border-none last:border-none mega">
                                        <div className="rounded-xl my-0 text-slate-600 lg:hover:bg-slate-200 px-3 py-1 transition duration-75">Resources</div>
                                        <div className="mega-item lg:absolute lg:left-0 lg:right-0 lg:m-auto lg:w-4/6 lg:rounded-3xl lg:bg-white lg:shadow-2xl p-3 lg:p-5 transition delay-150">
                                            <div className="lg:flex lg:justify-between space-y-5 lg:space-y-0">
                                                <div className="hidden lg:flex lg:flex-col">
                                                    <h1>Resources</h1>
                                                    <p className="max-w-sm mb-10">
                                                        Resource များကို အလွယ်ကြည့်လို့ရအောင် လုပ်ထားပေးပါတယ်။ link ကို click ပြီး လေ့လာကြည့်လို့ရပါတယ်။
                                                    </p>
                                                    <div className="flex flex-col">
                                                        <a href="https://www.youtube.com/c/sanlinhtike" className="font-bold text-lg no-underline">
                                                            <i className="fa-brands fa-youtube fa-fw"></i> YouTube
                                                        </a>
                                                        <a href="https://www.github.com/sanlinhtik3" className="font-bold text-lg no-underline">
                                                            <i className="fa-brands fa-github fa-fw"></i> GitHub
                                                        </a>
                                                    </div>
                                                </div>
                                                
                                                <div className="">
                                                    <div onClick={DevelopmentMenu} className="transition-all delay-75 rounded-xl font-bold flex justify-between items-center">
                                                        <span className="text-xl lg:text-sm">Development</span>
                                                        <i className={`fa-solid fa-chevron-down transition icon lg:hidden ${isDevelopmentMenu ? "rotate-180" : ""}`}></i>
                                                    </div>
                                                    <div className={`amazing-item lg:flex lg:opacity-100 ${isDevelopmentMenu ? "" : "hidden opacity-0"}`}>
                                                        <ul className="list-none pl-0 grid grid-cols-2 lg:grid-cols-1">
                                                            <li className="p-0">
                                                                <NavLink onClick={menuIcon} className={({ isActive }) => isActive ? 'text-emerald-500 hover:text-emerald-600 transition-all delay-75 rounded-xl no-underline' : 'hover:text-emerald-600 text-slate-500 transition-all delay-75 rounded-xl no-underline'} to="/whatisnew" end>What's new</NavLink>
                                                            </li>
                                                            <li className="p-0">
                                                                <NavLink onClick={menuIcon} className={({ isActive }) => isActive ? 'text-emerald-500 hover:text-emerald-600 transition-all delay-75 rounded-xl no-underline' : 'hover:text-emerald-600 text-slate-500 transition-all delay-75 rounded-xl no-underline'} to="/" end>Course</NavLink>
                                                            </li>
                                                            <li className="p-0">
                                                                <NavLink onClick={menuIcon} className={({ isActive }) => isActive ? 'text-emerald-500 hover:text-emerald-600 transition-all delay-75 rounded-xl no-underline' : 'hover:text-emerald-600 text-slate-500 transition-all delay-75 rounded-xl no-underline'} to="/logos" end>Logo</NavLink>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="">
                                                    <div onClick={ApplicationMenu} className="amazing transition-all delay-75 rounded-xl font-bold flex justify-between items-center">
                                                        <span className="text-xl lg:text-sm">Application</span>
                                                        {/* <i className={`fa-solid fa-chevron-down transition icon lg:hidden ${isApplicationMenu ? "rotate-180" : ""}`}></i> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <div className="bg-slate-100 rounded-xl p-4 flex justify-between items-center lg:hidden">
                                    <div>Contact Sales</div>
                                    {/* <div className="">
                                        <button className="rounded-full py-1 p-2">Log in</button>
                                        <button className="bg-emerald-500 text-white rounded-full py-1 p-2">Sign up</button>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        <div onClick={menuIcon}>
                            <i className="fa-solid fa-bars"></i>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Nav