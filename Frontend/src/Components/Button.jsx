// const Button = ({filled, enabled, icon, text}) => {
//     return (
//     <div className={filled ? "btn btn-filled": "btn btn-outlined"} >
//          {icon && <span>{icon}</span>}
//         {text}
//         </div>)
// }
// export default Button
import { useState } from "react"
const Button = ({color, size, txt}) => {   
    const [mode, isMode] = useState(false)
    const switchMode = () => {
        isMode(!mode)
    }
    return (
        <div className={ mode ? "btn-dark" : "btn-blue"} onClick={switchMode}>
            {txt}
        </div> 
    )
}

export default Button