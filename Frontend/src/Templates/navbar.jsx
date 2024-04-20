// import Logo from '../Atoms/Logo'
import Moon from '../Atoms/Icons/croissant_icon'
import { useState } from 'react'
export default function Navbar() {
  const [theme, switchTheme] = useState("light")
 const toggleTheme = () => {
  if (theme == "light")
  {
    const html = document.getElementById("root")
    switchTheme("dark")
    html.classList.add(theme)
    html.classList.remove("light")

  }
  else{
    const html = document.getElementById("root")
    switchTheme("light")
    html.classList.add(theme)
    html.classList.remove("dark")
  }
 }
  return (
    <header className=" nav">
      <nav className="mx-auto flex items-center justify-between" aria-label="Global">
      <div className="hidden lg:flex nav-left">
       <div className='icon-container'>
       <Moon  onClick={toggleTheme}/>
       </div>
       <div className='login-signup'>
        <div className='signup-btn'>
            <div className='label'>
            انضم الآن
            </div>
            </div>
        <div className='login-btn'>
            <div className='label'>
            تسجيل الدخول
            </div>
            </div>
       </div>
          
        </div>
      <div className="flex  nav-right">
          <div className=" menu-item">
         آداة التلخيص
        </div>
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Nabdhah Logo</span>
           {/* <Logo height={32} color={"primary-light"}/> */}
          </a>
        </div>
      </nav>
    </header>
  )
}
