
export default function TextArea({ label,placeholder, leading_icon,trailing_icon, supporting_text, submit, onchange, val}){
    return (
     <div className="textarea_container">
           <div className={`input_textarea_container`}>
            <textarea className="textarea_text"  placeholder={placeholder} onChange={onchange} value={val}/>
            {
                trailing_icon && <div>
                    {trailing_icon}
                </div>
            }
       

    </div>
   {
    submit &&  <div className="submit_box">
    {submit}
    {
        supporting_text && <div className="textarea_supporting_text">
            {supporting_text}
            </div>
    }
</div>
   }
     </div>
    )
}