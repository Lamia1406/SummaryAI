const Button = ({styling, icon, text, bgcolor, color, onclick}) => {
    return (
    <div className={`btn ${styling}`} style={{
        ...(bgcolor && { backgroundColor: bgcolor }),
  ...(color && { color: color })
      }}
      
      onClick={onclick}
      >
         {icon}
        {text}
        </div>)
}
export default Button
