import Logo from '../Atoms/Logo'
import Moon from '../Atoms/Icons/croissant_icon'
import { useState } from 'react'
import Button from '../Components/Button'
import Add from '../Atoms/Icons/add'
import Menu_Item from '../Components/menu_item'
import { Link } from 'react-router-dom'
export default function Navbar({hidden}) {
  const [isHidden, setHidden]= useState(true)

  return (
    <header className="nav" onMouseEnter={()=> setHidden(false)} onMouseLeave={()=> setHidden(true)}>
       <Link to="/">
       <div className='logo'>
     <Logo height={32} color={"logo_light"}/>
     </div>
       </Link>
     
      <div className='CTA_button'>
        <Button styling="CTA_summary" text = {isHidden == false && "آداة التلخيص"} icon={<Add name="add" type="outline"/>}/>
      </div>
      <div className='browsing_history'>
        <div className='browsing_header'>
          النشاطات السابقة
        </div>
          <div className='browsing_activities'>
            <Menu_Item title = {isHidden == false && "........تلخيص حول"}/>
            <Menu_Item is_active title = {isHidden == false && "........تلخيص حول"}/>
            <Menu_Item title = {isHidden == false && "........تلخيص حول"}/>
          </div>
      </div>
       
    </header>
  )
}
