import React from 'react'
import {headerLogo} from '../assets/images';
import {hamburger} from '../assets/icons'
import { navLinks } from '../constants';

const Nav = () => {
  return (
    <header className='padding-x py-8 z-10 w-full'>
        <nav className='flex justify-between items-center max-container '>
            <a href="">
                <img src={headerLogo} alt="logo" width={139} height={29} />
            </a>
            <ul className='flex flex-1 justify-center gap-16 items-center max-lg:hidden'>
                {navLinks.map((item)=>(
                    <li key={item.label}>
                        <a href={item.href}className='font-monserrat leading-normal text-lg text-slate-gray'>
                            {item.label}    
                        </a>
                    </li>
                ))}
            </ul>
            <div className='hidden max-lg:block'><img src={hamburger} alt="hamburger" width={25} height={25} /></div>
        </nav>

    </header>
  )
}

export default Nav