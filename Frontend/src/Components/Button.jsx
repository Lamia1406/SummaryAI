const Button = ({styling, icon, text, onclick}) => {
    return (
    <div className={`btn ${styling}`} 
      
      onClick={onclick}
      >
        
       <div className="button_text">
       {text}
       </div>
         {icon}
        </div>)
}
export default Button
