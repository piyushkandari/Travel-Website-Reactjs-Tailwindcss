import React,{useState} from 'react'
import {BsPerson} from "react-icons/bs";
import {BiSearch} from "react-icons/bi";
import {AiOutlineClose} from "react-icons/ai";
import {HiOutlineMenuAlt4} from "react-icons/hi"
import {
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaPinterest,
    FaYoutube,
  } from 'react-icons/fa';

const Navbar = () => {
    const [nav,setNav]=useState(false);
    const [logo,setLogo]=useState(false);
    const handleNav=()=>{
        setNav(!nav);
        setLogo(!logo)
    }
  return (
    <div className='flex justify-between items-center h-20 px-4 absolute text-white w-full z-10'>
      <div><h1 className={logo ? 'hidden' : 'block font-bold'}>BEACHES</h1></div>
      <ul className='hidden md:flex font-bold text-xl '>
        <li>Home</li>
        <li>Destinations</li>
        <li>Travel</li>
        <li>View</li>
        <li>Book</li>
      </ul>
      <div className='hidden md:flex cursor-pointer'>
        <BiSearch  size={25} className="mr-2" />
        <BsPerson size={25}  />
      </div>
      {/* hamburger */}

      <div onClick={handleNav} className='md:hidden z-10 '>
         {nav ? <AiOutlineClose className="text-black" size={20} /> : <HiOutlineMenuAlt4  size={20} /> }
        
      </div>
           
     {/* mobile menu dropdown */}
      <div  className={nav? 'absolute text-black left-[0] top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col' : 'absolute left-[-100%]'}>
      <ul>
        <h1>BEACHES</h1>
        <li className='border-b'>Home</li>
        <li className='border-b'>Destinations</li>
        <li className='border-b'>Travel</li>
        <li className='border-b'>View</li>
        <li className='border-b'>Book</li>
        <div className='flex flex-col'>
            <button className='my-6'>Search</button>
            <button >Account</button>
        </div>
        <div className='flex justify-between my-6'>
            <FaFacebook className='icon' />
            <FaTwitter className='icon' />
            <FaYoutube className='icon' />
            <FaPinterest className='icon' />
            <FaInstagram className='icon' />
        </div>
      </ul>
      </div>
    </div>
  )
}

export default Navbar;
