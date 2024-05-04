
export default function Input({label,placeholder, leading_icon,trailing_icon, supporting_text, onchange, val}){
    return (
     <div className="text_field_container">
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
            <input className="input_text"  placeholder={placeholder} onChange={onchange} value={val}/>
            {
                trailing_icon && <div>
                    {trailing_icon}
                </div>
            }
       

    </div>
     </div>
    )
}