import React, {useState} from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from '../assets/1.png';
import {Link} from 'react-scroll';
import { data } from '../content/header';


const Navbar = () => {

  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <div>
        <img src={Logo} alt="Logo Image" style={{width:'130px'}} />
      </div>

      {/* menu */}
        <ul className='hidden md:flex'>
            <li>
            <Link 
      to="home" 
      smooth={true} 
      duration={500} 
    >
      Home
    </Link>
            </li>
            <li><Link 
      to="about" 
      smooth={true} 
      duration={500} 
    >
      About
    </Link></li>
            <li><Link 
      to="skills" 
      smooth={true} 
      duration={500} 
    >
      Skills
    </Link></li>
            <li><Link 
      to="contact" 
      smooth={true} 
      duration={500} 
    >
      Contact
    </Link></li>
        </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
        <li className='py-6 text-4xl'><Link onClick={handleClick} 
      to="home" 
      smooth={true} 
      duration={500} 
    >
      Home
    </Link></li>
        <li className='py-6 text-4xl'><Link onClick={handleClick} 
      to="about" 
      smooth={true} 
      duration={500} 
    >
      About
    </Link></li>
        <li className='py-6 text-4xl'><Link onClick={handleClick} 
      to="contact" 
      smooth={true} 
      duration={500} 
    >
      Contact
    </Link></li>
      </ul>

      {/* Social Icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a className='flex justify-between items-center w-full text-grey-300'
            href="https://www.linkedin.com/in/tanakorn-panyadee-4b994a210/">
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          {/* <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a className='flex justify-between items-center w-full text-grey-300'
            href="/">
              Github <FaGithub size={30} />
            </a>
          </li> */}
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <a className='flex justify-between items-center w-full text-grey-300'
            href="mailto:tanakorn.panyadee2@gmail.com">
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a className='flex justify-between items-center w-full text-grey-300'
            href={data.resume} target='blank'>
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>


    </div>
  );
};

export default Navbar;
