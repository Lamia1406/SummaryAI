
export default function TextArea({ label,placeholder, leading_icon,trailing_icon, supporting_text, submit, onchange, val}){
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
            <textarea className="input_text"  placeholder={placeholder} onChange={onchange} value={val}/>
            {
                trailing_icon && <div>
                    {trailing_icon}
                </div>
            }
        {/* <div className="input_content">
        </div>
        <div className="input_submit">
            {button}
        </div> */}

    </div>
   {
    submit &&  <div className="submit_box">
    {submit}
    {
        supporting_text && <div className="supporting_text">
            {supporting_text}
            </div>
    }
</div>
   }
     </div>
    )
}