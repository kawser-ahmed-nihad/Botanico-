import { useContext, useState } from "react";
import { Menu, X, Search, Leaf, Sun, Moon } from "lucide-react";
import { Link, NavLink } from "react-router";
import { Tooltip } from "react-tooltip";
import { AuthContext } from "../Context/AuthContext";
import Swal from "sweetalert2";
import Loader from "../components/Loader";
// import { ThemeContext } from "../Context/ThemeProvider ";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logOut, loading } = useContext(AuthContext);
  // const { theme, toggleTheme } = useContext(ThemeContext);

  const handleLogOut = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, log out!"
    }).then((result) => {
      if (result.isConfirmed) {
        logOut();
        Swal.fire("Logged out!", "", "success");
      }
    });
  };

  const navLinkClass = ({ isActive }) =>
    `hover:text-green-600 transition duration-200 ${isActive ? "text-green-700 font-semibold underline underline-offset-4" : ""}`;

  return (
    <nav className="bg-white border-b border-green-200 shadow-sm fixed top-0 w-full z-50">
      <div className=" px-5 lg:px-0 max-w-7xl mx-auto flex justify-between items-center py-5">

        <div className="flex items-center space-x-2">
          <Leaf className="text-green-600 dark:text-green-400" />
          <span className="text-2xl font-bold text-black ">Botanico</span>
        </div>

        <div className="hidden md:flex space-x-8 text-[16px] font-medium">
          <NavLink to="/" className={navLinkClass}>Home</NavLink>
          <NavLink to="/all-plants" className={navLinkClass}>All Plants</NavLink>
          <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
          <NavLink to="/dashbord" className={navLinkClass}>Dashbord</NavLink>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Search className="text-green-700 dark:text-green-300" />
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

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(true)}>
            <Menu />
          </button>
        </div>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 backdrop-blur-md bg-white/20 bg-opacity-30" onClick={() => setMenuOpen(false)}></div>
      )}

      {/* Sliding Mobile Menu */}
      <div className={`fixed top-0 left-0 w-64 h-full bg-white dark:bg-gray-900 text-black dark:text-white transform transition-transform duration-300 z-50 ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex justify-between items-center p-4 border-b dark:border-gray-700">
          <div className="flex items-center space-x-2">
            <Leaf className="text-green-600 dark:text-green-400" />
            <span className="text-xl font-bold">Botanico</span>
          </div>
          <button onClick={() => setMenuOpen(false)}>
            <X className="text-black dark:text-white" />
          </button>
        </div>

        <nav className="flex flex-col p-4 space-y-4 text-base font-medium">
          <NavLink to="/" onClick={() => setMenuOpen(false)} className={navLinkClass}>Home</NavLink>
          <NavLink to="/all-plants" onClick={() => setMenuOpen(false)} className={navLinkClass}>All Plants</NavLink>
          <NavLink to="/contact" onClick={() => setMenuOpen(false)} className={navLinkClass}>Contact</NavLink>
          <NavLink to="/dashbord" onClick={() => setMenuOpen(false)} className={navLinkClass}>Dashbord</NavLink>

          <div className="mt-4">
            {!loading ? (
              user ? (
                <>
                  <Link to="/profile" onClick={() => setMenuOpen(false)} className="flex items-center space-x-2">
                    <img src={user.photoURL} alt="User" className="w-8 h-8 rounded-full border border-green-300" />
                    <span>{user.displayName}</span>
                  </Link>
                  <button onClick={() => { setMenuOpen(false); handleLogOut(); }} className="mt-3 btn bg-green-600 text-white rounded px-4 py-1 w-full">
                    Logout
                  </button>
                </>
              ) : (
                <Link to="/login" onClick={() => setMenuOpen(false)} className="btn bg-green-600 text-white rounded px-4 py-1 w-full">
                  Login
                </Link>
              )
            ) : (
              <Loader />
            )}
          </div>
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;
