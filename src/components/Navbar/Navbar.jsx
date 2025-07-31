import React, { useEffect, useState } from 'react'
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection]= useState("");
  const [isScrolled,setIsScrolled]=useState(false);

  useEffect(()=>{
    const handleScroll=()=>{
      setIsScrolled(window.scrollY>50);
    };

    window.addEventListener("scroll",handleScroll);
    return ()=> window.removeEventListener('scroll',handleScroll)
  },[])

  const handleMenuItemClick =(sectionId)=>{
    setActiveSection(sectionId);
    setIsOpen(false);
  }

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Works" },
    { id: "education", label: "Education" },
  ];
 
  return (
    <nav className={`fixed top-0 w-full z-50 transition duration-300 px-[7w] md:px-[7w] lg:px-[10vw] ${isScrolled ? "bg-[#050414] bg-opacity-50 backdrop-blur-md shadow-md":"bg-transparent"}`}>
      <div className="text-white py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="text-lg font-semibold cursor-pointer">
            <span className="text-[#8245ec]">&lt;</span>
            <span className="text-white">Subhajit</span>
            <span className="text-[#8245ec]">/</span>
            <span className="text-white">Guchhait</span>
            <span className="text-[#8245ec]">&gt;</span>
          </div>

          {/* Desktop Menus */}
          <ul className='hidden md:flex space-x-8 text-gray-300'>
            {menuItems.map((item)=>(
              <li key={item.id} className={`cursor-pointer hover:text-[#8245ec] ${activeSection === item.id ? "text-[#8245ec]":""}`}>
                  <button onClick={() => handleMenuItemClick(item.id)}>{item.label}</button>
              </li>
            ))}
          </ul>


          {/* Social Icons */}
          <div className='hidden md:flex space-x-4'>
            <a href="https://github.com/imsubhajit98" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#8245ec]">
              <FaGithub size={20} />
            </a>
            <a href="https://www.linkedin.com/in/imsubhajit98" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#8245ec]">
              <FaLinkedin size={20} />
            </a>
            <a href="https://www.facebook.com/imsubhajit98" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#8245ec]">
              <FaFacebook size={20} />
            </a>
          </div>


          {/* Mobile Menu */}
          <div className='md:hidden'>
            {
              isOpen ? (
                <FiX className='text-3xl text-[#8245ec] cursor-pointer'
                onClick={()=>setIsOpen(false)}
                />
              ):(
                <FiMenu className='text-3xl text-[#8245ec] cursor-pointer' onClick={()=>setIsOpen(true)}/>
              )
            }
          </div>

        </div>

        {/* Mobile Menu Items */}
        {
          isOpen && (
            <div className='absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-[#050414] bg-opacity-50 backdrop-blur-lg z-50 rounded-lg shadow-lg'>
              <ul className='flex flex-col items-center space-y-4 py-4 text-gray-300'>
                {menuItems.map((item)=>(
              <li key={item.id} className={`cursor-pointer hover:text-[#fff] ${activeSection === item.id ? "text-[#8245ec]":""}`}>
                  <button onClick={() => handleMenuItemClick(item.id)}>{item.label}</button>
              </li>
            ))}
              </ul>
              {/* Social Icons */}
          <div className='flex justify-content-center space-x-4'>
            <a href="https://github.com/imsubhajit98" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#fff]">
              <FaGithub size={20} />
            </a>
            <a href="https://www.linkedin.com/in/imsubhajit98" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#fff]">
              <FaLinkedin size={20} />
            </a>
            <a href="https://www.facebook.com/imsubhajit98" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#fff]">
              <FaFacebook size={20} />
            </a>
          </div>  
            </div>
          )
        }
    </nav>
  )
}
