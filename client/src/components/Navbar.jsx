import React from 'react'
import { NavLink, useNavigate} from 'react-router-dom'
import Login from '../pages/Login'

const Navbar = () => {

    const navigate = useNavigate()

  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400' >
        <ul className='hidden md:flex items-sstart gap-5 font-medium' >
            <NavLink to='/'>
                <li className='py-1'>Home</li>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
            </NavLink>
            <NavLink to='/item'>
                <li className='py-1'>All Items</li>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
            </NavLink>
            <NavLink to='/about'>
                <li className='py-1'>About</li>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
            </NavLink>
            <NavLink to='/contact'>
                <li className='py-1'>Contact</li>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
            </NavLink>
        </ul>
        <div className="">
    <a className="bg-black text-white px-3 py-2 eounded-md hover:bg-slate-800 duration-300 cursor-pointer"
    onClick={()=>document.getElementById("my_modal_3").showModal()}>Login</a>
    <Login/>
  </div>
    </div>
  )
}

export default Navbar
