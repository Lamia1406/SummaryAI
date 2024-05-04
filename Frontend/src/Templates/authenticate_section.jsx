import { Link } from "react-router-dom"

export default function Authenticate(){
    return <div className='login-signup'>
        
    <Link to= "/login" className='login-btn' >
        <div className='label'>
        تسجيل الدخول
        </div>
        </Link>
        <Link to="/signup" className='signup-btn'>
        <div className='label'>
        انضم الآن
        </div>
        </Link>
   </div>
}