import React from 'react'
import { Link } from 'react-scroll'

//assets
import Logo from '../assets/logo.png'

export default function Navbar() {

  const content = {
    logoName: "Matthew | FrontEnd Dev",
    logoNameResponsive: "Matthew",
    navItems: [
       {name:"Overview",id:'about'},
       {name:"Projects",id:'works'},
       {name:"Contacts",id:'contacts'},
    ]
  }

  const navLinks = content.navItems.map((nav, index) => {
    return (
      <Link to={nav.id} spy={true} smooth={true} offset={-50} duration={500}>
        <h3 className='text-sm ml-4 my-auto font-semibold hover:cursor-pointer hover:underline active:text-cyan-300' key={index}>
          {nav.name}
       </h3>
      </Link>

    );
  })

  return (
    <div className='sticky top-0 z-50 py-3 w-full bg-black text-white'>
      <div className='flex justify-between w-11/12 mx-auto'>
        <Link to='hero' spy={true} smooth={true} offset={-50} duration={500}>
          <div className='flex hover:cursor-pointer'>
              <img className='w-7' src={Logo} />
              <p className='hidden font-bold sm:block my-auto ml-3'>{content.logoName}</p>
              <p className='sm:hidden font-bold  ml-3 my-auto'>{content.logoNameResponsive}</p>
          </div>
        </Link>
        <div className='flex my-auto'>
            {navLinks}
        </div>
      </div>
    </div>
  )
}
