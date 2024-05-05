import Logo from '../Atoms/Logo'
import Authenticate from "../Templates/authenticate_section"
import { useState } from 'react'
export default function Navbar() {
 
  return (
    <header className=" nav">
      <nav className="mx-auto flex items-center justify-between" aria-label="Global">
      <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Nabdhah Logo</span>
           <Logo height={32} color={"logo_light"}/>
          </a>
         
       <Authenticate/>
          
      
         
      </nav>
    </header>
  )
}