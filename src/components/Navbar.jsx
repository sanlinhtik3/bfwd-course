import { NavLink, useNavigate } from "react-router-dom";

const Navbar = props => {
    const navigation = useNavigate();
    return (
        <>
            <div className="bg-slate-50">
                <div className="container mx-auto flex justify-between items-center px-3 lg:px-32 py-3">
                    <div>
                        <h1 onClick={() => navigation('/')} className="text-3xl font-bold my-0">BFWD</h1>
                    </div>
                    <div>
                        <ul className="flex lg:flex-row lg:space-x-3 list-none my-0">
                            <li>About</li>
                            <li><NavLink className={({isActive}) => isActive ? 'text-pink-500 no-underline' : ''} to="/course/1">BFWD</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;