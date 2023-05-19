import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.png'
import { Fade as Hamburger } from 'hamburger-react'
import { useContext, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {
    const [isOpen, setOpen] = useState(false)
    const { user, logOut } = useContext(AuthContext)


    const handleLogOut = () => {
        logOut()
            .then(() => {
                console.log('logout')
            })
            .catch(error => console.log(error))
    }


    console.log('user from nav', user)

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

                    {/* conditional show add a toy and my toy by user login  */}

                    {
                        user && <>
                            <li className='nav-link'>
                                <NavLink
                                    to="/add_toy" className={({ isActive }) => isActive ? "text-primary" : ""}>Add a Toy</NavLink>
                            </li>
                            <li className='nav-link'>
                                <NavLink
                                    to="/my_toys" className={({ isActive }) => isActive ? "text-primary" : ""}>My Toys</NavLink>
                            </li>
                        </>
                    }




                    <li className='nav-link'>
                        <NavLink
                            to="/blog" className={({ isActive }) => isActive ? "text-primary" : ""}>Blog</NavLink>
                    </li>


                </ul>


                {/* conditional show button profile image  */}

                <div className='hidden md:flex items-center gap-5'>
                    {
                        user?.photoURL && <span><img className='w-12 h-12 rounded-full' title={user?.displayName} src={user?.photoURL} /></span>


                    }
                    {
                        user ?
                            <button className='btn btn-secondary' onClick={handleLogOut}>Logout</button>
                            :
                            <Link to='/login'> <button className='btn btn-primary' onClick={handleLogOut}>Login</button></Link>
                    }
                </div>





                {/* hamburger  */}
                <span className="md:hidden"> <Hamburger toggled={isOpen} toggle={setOpen} /></span>


                {/* nav link for mobile breakpoints *********
                ************
                **********
                ************/}

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

                    {/* conditional show add a toy and my toys by user login on mobile */}

                    {
                        user && <>
                            <li className='nav-link'>
                                <NavLink
                                    to="/add_toy" className={({ isActive }) => isActive ? "text-primary" : ""}>Add a Toy</NavLink>
                            </li>
                            <li className='nav-link'>
                                <NavLink
                                    to="/my_toys" className={({ isActive }) => isActive ? "text-primary" : ""}>My Toys</NavLink>
                            </li>
                        </>
                    }
                    {/* blog  */}
                    <li className='nav-link'>
                        <NavLink
                            to="/blog" className={({ isActive }) => isActive ? "text-primary" : ""}>Blog</NavLink>
                    </li>

                    {/* conditional show button profile image on mobile */}

                    <div className=' space-y-5'>
                        {
                            user?.photoURL && <span><img className='w-12 h-12 rounded-full' title={user?.displayName} src={user?.photoURL} /></span>


                        }
                        {
                            user ?
                                <button className='btn btn-secondary' onClick={handleLogOut}>Logout</button>
                                :
                                <Link to='/login'> <button className='btn btn-primary' onClick={handleLogOut}>Login</button></Link>
                        }
                    </div>

                </ul>

            </div>
        </header>
    );
};

export default Navbar;