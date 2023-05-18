import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png'
import { Fade as Hamburger } from 'hamburger-react'
import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setOpen] = useState(false)

    return (
        <header className=' border'>
            <div className="max-w-[1240px] mx-auto py-2 flex items-center justify-between px-5 ">
                <div className='flex items-center'>
                    {/* logo  */}
                    <img className='w-16' src={logo} alt="" />
                    <h3 className='text-xl font-bold'>Tiny<span className='text-red-500'>Car</span></h3>
                </div>
                {/* nav links  */}
                <ul className='hidden md:flex gap-5 '>
                    <li className='nav-link'>
                        <NavLink
                            to="/" className={({ isActive }) => isActive ? "text-primary" : ""}>Home</NavLink>
                    </li>
                    <li className='nav-link'>
                        <NavLink
                            to="/login" className={({ isActive }) => isActive ? "text-primary" : ""}>Login</NavLink>
                    </li>
                    <li className='nav-link'>
                        <NavLink
                            to="/register" className={({ isActive }) => isActive ? "text-primary" : ""}>Register</NavLink>
                    </li>
                    <li className='nav-link'>
                        <NavLink
                            to="/add_toy" className={({ isActive }) => isActive ? "text-primary" : ""}>Add a Toy</NavLink>
                    </li>
                    <li className='nav-link'>
                        <NavLink
                            to="/my_toys" className={({ isActive }) => isActive ? "text-primary" : ""}>My Toys</NavLink>
                    </li>
                    <li className='nav-link'>
                        <NavLink
                            to="/blog" className={({ isActive }) => isActive ? "text-primary" : ""}>Blog</NavLink>
                    </li>


                </ul>

                {/* hamburger  */}
                <span className="md:hidden"> <Hamburger toggled={isOpen} toggle={setOpen} /></span>


                {/* nav link for mobile breakpoints */}

                <ul className={`${isOpen ? 'left-0 block' : '-left-[-100%]'} duration-500 ease-in-out space-y-4  md:hidden absolute top-[80px]  py-10 h-screen bg-black w-full text-white pl-5 z-50`}>
                    <li className='nav-link'>
                        <NavLink
                            to="/" className={({ isActive }) => isActive ? "text-primary" : ""}>Home</NavLink>
                    </li>
                    <li className='nav-link'>
                        <NavLink
                            to="/login" className={({ isActive }) => isActive ? "text-primary" : ""}>Login</NavLink>
                    </li>
                    <li className='nav-link'>
                        <NavLink
                            to="/register" className={({ isActive }) => isActive ? "text-primary" : ""}>Register</NavLink>
                    </li>
                    <li className='nav-link'>
                        <NavLink
                            to="/add_toy" className={({ isActive }) => isActive ? "text-primary" : ""}>Add a Toy</NavLink>
                    </li>
                    <li className='nav-link'>
                        <NavLink
                            to="/my_toys" className={({ isActive }) => isActive ? "text-primary" : ""}>My Toys</NavLink>
                    </li>
                    <li className='nav-link'>
                        <NavLink
                            to="/blog" className={({ isActive }) => isActive ? "text-primary" : ""}>Blog</NavLink>
                    </li>


                </ul>
            </div>
        </header>
    );
};

export default Navbar;