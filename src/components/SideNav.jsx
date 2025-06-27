import React, { useState } from 'react';
import { Link, NavLink } from 'react-router';
import { Menu, X, Leaf } from 'lucide-react';

const SideNav = () => {
    const [open, setOpen] = useState(false);

    const links = [
        { to: "/", label: "Back Home" },
        { to: "/dashbord/add-plant", label: "Add Plant" },
        { to: "/dashbord/my-plants", label: "My Plants" },
        { to: "/dashbord/all-Items", label: "Add Items" },
    ];

    const linkClass = ({ isActive }) =>
        `block px-4 py-2 rounded transition duration-200 ${isActive
            ? "bg-green-100 text-green-700 font-semibold"
            : "text-gray-700 hover:bg-gray-100"
        }`;

    return (
        <>
            {/* Mobile Top Bar */}
            <div className="md:hidden fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-4 py-3 border-b bg-white shadow-sm">
                <Link to="/dashbord" className="flex items-center space-x-2">
                    <Leaf className="text-green-600" />
                    <h1 className="text-lg font-bold text-green-800">Dashboard</h1>
                </Link>
                <button onClick={() => setOpen(true)}>
                    <Menu className="text-gray-700" />
                </button>
            </div>

            {/* Mobile Blur Overlay */}
            {open && (
                <div
                    className="fixed inset-0 z-40 backdrop-blur-sm bg-black/30"
                    onClick={() => setOpen(false)}
                ></div>
            )}

            {/* Side Navigation */}
            <aside
                className={`fixed top-0 left-0 z-50 w-64 h-full bg-white border-r px-6 py-6 transform transition-transform duration-300 ${open ? "translate-x-0" : "-translate-x-full"
                    } md:translate-x-0 md:static md:block`}
            >
                {/* Mobile Only Header */}
                <div className="flex items-center justify-between mb-6 md:hidden">
                    <div className="flex items-center space-x-2">
                        <Leaf className="text-green-600" />
                        <h1 className="text-xl font-bold text-green-800">Dashboard</h1>
                    </div>
                    <button onClick={() => setOpen(false)}>
                        <X className="text-gray-600" />
                    </button>
                </div>

                {/* Desktop Logo */}
                <Link to="/dashbord" className="flex items-center space-x-2">
                    <Leaf className="text-green-600" />
                    <h1 className="text-lg font-bold text-green-800">Dashboard</h1>
                </Link>

                {/* Navigation Links */}
                <nav className="space-y-2">
                    {links.map((link) => (
                        <NavLink
                            key={link.to}
                            to={link.to}
                            className={linkClass}
                            onClick={() => setOpen(false)}
                        >
                            {link.label}
                        </NavLink>
                    ))}
                </nav>
            </aside>
        </>
    );
};

export default SideNav;
