const Button = ({filled, enabled, icon, text}) => {
    return (
    <div className={filled ? "btn btn-filled": "btn btn-outlined"} >
         {icon && <span>{icon}</span>}
        {text}
        </div>)
}
export default Button
