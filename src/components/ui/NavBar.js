import React, { useEffect, useRef, useState } from 'react'
import { FaBars, FaBriefcase, FaEnvelope, FaHome, FaLaptop, FaTimes, FaUserAlt} from 'react-icons/fa'
import {SiCodersrank} from 'react-icons/si'
import { Menu } from './NavBar.Elements'
import {gsap} from 'gsap'


export const NavBar = () => {

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(!open);
    }

    const navRef = useRef();

    useEffect(()=>{

        gsap.from(navRef.current,{
            y:-100,
        })
        
    },[])

    return (
      <nav ref={navRef} className='portfolio__navbarContainer'>
          <div className='portfolio__navbarWrapper'>
                <div className='portfolio__logoContainer'>
                    <SiCodersrank />
                </div>
                <div onClick={handleClickOpen} className='portfolio__mobileIcon'>
                    {open ? <FaTimes /> : <FaBars />}
                </div>
                <Menu open={open}>
                    <div className='portfolio__menuItem'>
                        <a href="#home" onClick={handleClickOpen} className='portfolio__menuItemLink'>
                            <div>
                                <FaHome />
                                Home
                            </div>
                        </a>
                    </div>
                    <div className='portfolio__menuItem'>
                        <a href='#about' onClick={handleClickOpen} className='portfolio__menuItemLink'>
                            <div>
                                <FaUserAlt />
                                About Me
                            </div>
                        </a>
                    </div>
                    <div className='portfolio__menuItem'>
                        <a href='#skillset' onClick={handleClickOpen} className='portfolio__menuItemLink'>
                            <div>
                                <FaLaptop />
                                Skills
                            </div>
                        </a>
                    </div>
                    <div className='portfolio__menuItem'>
                        <a href='#proyects' onClick={handleClickOpen} className='portfolio__menuItemLink'>
                            <div>
                                <FaBriefcase />
                                Portfolio
                            </div>
                        </a>
                    </div>
                    <div className='portfolio__menuItem'>
                        <a href='#contacMe' onClick={handleClickOpen} className='portfolio__menuItemLink'>
                            <div>
                                <FaEnvelope />
                                Contact me
                            </div>
                        </a>
                    </div>
                </Menu>
          </div>
      </nav> 
    )
}
