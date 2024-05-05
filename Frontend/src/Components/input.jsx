
export default function Input({onClick,type ,label,placeholder, leading_icon,trailing_icon, supporting_text, onchange, val, styling}){
    return (
     <div className={`text_field_container ${styling}`}>
        {
            styling == "file" && <div>
                {placeholder}
            </div>
        }
            {
                label && <div className={`input_label`}>
                    {label}
                    </div>
            }
           <div className={`input_container`}>
            {
                leading_icon && <div>
                    {leading_icon}
                </div>
            }
            <input className="input_text"  placeholder={placeholder} onChange={onchange} value={val} type={type} onClick={onClick}/>
            {
                trailing_icon && <div>
                    {trailing_icon}
                </div>
            }
       

    </div>
     </div>
    )
}