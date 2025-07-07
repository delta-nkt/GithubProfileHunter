import React, { useEffect, useState } from 'react'
import {Link, NavLink} from 'react-router-dom'
import { auth } from '../../firebase'
import Swal from 'sweetalert2'

export default function Header() {
    const [user, setUser] = useState(null)

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(setUser)
        return () => unsubscribe()
    }, [])

    const handleLogout = async () => {
        await auth.signOut()
        Swal.fire({
            icon: 'success',
            title: 'Logged out',
            toast: true,
            position: 'top-end',
            timer: 1500,
            showConfirmButton: false
        })
    }

    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img
                            src="../logo4.png"
                            className="mr-3 h-20 w-30"
                            alt="Logo"
                        />
                        <span className="ml-2 text-xl font-bold text-orange-700">Github Profile Hunter</span>
                    </Link>
                    <div className="flex items-center lg:order-2 gap-2">
                        {user && (
                            <div className="flex items-center gap-2 bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
                                <img
                                    src={user.photoURL || 'https://ui-avatars.com/api/?name=' + (user.displayName || user.email) + '&background=orange&color=fff&size=64'}
                                    alt="Profile"
                                    className="w-8 h-8 rounded-full border border-orange-300"
                                />
                                <span className="text-orange-700 font-semibold text-sm">{user.displayName || user.email}</span>
                                <button
                                    onClick={handleLogout}
                                    className="ml-2 px-3 py-1 text-xs bg-orange-600 text-white rounded-full hover:bg-orange-700 transition-all"
                                >
                                    Logout
                                </button>
                            </div>
                        )}
                        <Link
                            to="/login"
                            className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Log in
                        </Link>
                        <Link
                            to="/getstarted"
                            className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Get started
                        </Link>
                    </div>
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                to="/"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/about"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/contact"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/github"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Github
                                </NavLink>
                            </li>
                            {/* <li>
                                <NavLink
                                to="/coupons"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Coupon
                                </NavLink>
                            </li> */}
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}