import { NavLink } from "react-router-dom";

const Navbar = props => {
    return (
        <>
            <div className="bg-slate-200">
                <div className="container mx-auto flex justify-between items-center lg:px-40 py-3">
                    <div>
                        <h1 className="text-3xl font-bold">BFWD</h1>
                    </div>
                    <div>
                        <ul className="flex flex-col lg:flex-row lg:space-x-3">
                            <li>About</li>
                            <li><NavLink to="/course/1">BFWD</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;