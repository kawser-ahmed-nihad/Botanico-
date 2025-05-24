import { useContext, useState } from "react";
import { Menu, X, Search, Leaf } from "lucide-react";
import { Link, NavLink } from "react-router";
import { Tooltip } from "react-tooltip";
import { AuthContext } from "../Context/AuthContext";
import Swal from "sweetalert2";
import Loader from "../components/Loader";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logOut, loading } = useContext(AuthContext);

  const handleLogOut = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, log out!"
    }).then((result) => {
      if (result.isConfirmed) {
        logOut();
        Swal.fire({
          title: "Logged out!",
          text: "You have been logged out.",
          icon: "success"
        });
      }
    });
  };

  const navLinkClass = ({ isActive }) =>
    `hover:text-green-600 transition duration-200 ${isActive ? "text-green-700 font-semibold underline underline-offset-4" : ""}`;

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

       
        <div className="hidden md:flex items-center space-x-4">
          <Search className="text-green-700" />
          {!loading && user && (
            <Link to="/profile">
              <img
                src={user.photoURL}
                alt="User"
                className="w-8 h-8 rounded-full border border-green-300"
                data-tooltip-id="user-tooltip"
                data-tooltip-content={user?.displayName}
              />
              <Tooltip id="user-tooltip" place="bottom" style={{ backgroundColor: "#166534", color: "white" }} />
            </Link>
          )}
          {!loading ? (
            user ? (
              <button onClick={handleLogOut} className="btn bg-green-600 text-white rounded px-4 py-1">
                Logout
              </button>
            ) : (
              <Link to="/login" className="btn bg-green-600 text-white rounded px-4 py-1">
                Login
              </Link>
            )
          ) : (
            <Loader />
          )}
        </div>

       
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

     
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col space-y-2 text-sm text-green-800 font-medium">
          <NavLink to="/" onClick={() => setMenuOpen(false)} className={navLinkClass}>Home</NavLink>
          <NavLink to="/all-plants" onClick={() => setMenuOpen(false)} className={navLinkClass}>All Plants</NavLink>
          <NavLink to="/add-plant" onClick={() => setMenuOpen(false)} className={navLinkClass}>Add Plant</NavLink>
          <NavLink to="/my-plants" onClick={() => setMenuOpen(false)} className={navLinkClass}>My Plants</NavLink>

          {!loading && user && (
            <Link to="/profile">
              <img
                src={user.photoURL}
                alt="User"
                className="w-8 h-8 rounded-full border border-green-300"
                data-tooltip-id="user-tooltip"
                data-tooltip-content={user?.displayName}
              />
              <Tooltip id="user-tooltip" place="bottom" style={{ backgroundColor: "#166534", color: "white" }} />
            </Link>
          )}

          {!loading ? (
            user ? (
              <button onClick={handleLogOut} className="block w-full text-left text-red-600">Logout</button>
            ) : (
              <Link to="/login" onClick={() => setMenuOpen(false)} className="block text-green-600">Login</Link>
            )
          ) : (
            <Loader />
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
