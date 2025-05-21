import { useState } from "react";
import { Menu, X, Search, User, ShoppingBag, Leaf } from "lucide-react";
import { NavLink } from "react-router";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const navLinkClass = ({ isActive }) =>
        `hover:text-green-600 transition duration-200 ${isActive ? "text-green-700 font-semibold underline underline-offset-4" : ""
        }`;

    return (
        <nav className="bg-green-50 border-b border-green-200 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
              
                <div className="flex items-center space-x-2">
                    <Leaf className="text-green-600" />
                    <span className="text-2xl font-bold text-green-800">Botanico</span>
                </div>

                
                <div className="hidden md:flex space-x-8 text-sm text-green-800 font-medium">
                    <NavLink to="/" className={navLinkClass}>Home</NavLink>
                    <NavLink to="/all-plants" className={navLinkClass}>All Plants</NavLink>
                    <NavLink to="/add-plant" className={navLinkClass}>Add Plant</NavLink>
                    <NavLink to="/my-plants" className={navLinkClass}>My Plants</NavLink>
                </div>

             
                <div className="hidden md:flex items-center space-x-4 text-green-700">
                    <Search />
                    <User />
                    <div className="relative">
                        <ShoppingBag />
                        <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs rounded-full px-1">০</span>
                    </div>
                </div>

               
                <div className="md:hidden">
                    <button onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

           
            {menuOpen && (
                <div className="md:hidden bg-green-100 px-4 pb-4 flex flex-col text-green-800 space-y-2">
                    <NavLink to="/" className={navLinkClass} onClick={() => setMenuOpen(false)}>Home</NavLink>
                    <NavLink to="/all-plants" className={navLinkClass} onClick={() => setMenuOpen(false)}>All Plants</NavLink>
                    <NavLink to="/add-plant" className={navLinkClass} onClick={() => setMenuOpen(false)}>Add Plant</NavLink>
                    <NavLink to="/my-plants" className={navLinkClass} onClick={() => setMenuOpen(false)}>My Plants</NavLink>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
