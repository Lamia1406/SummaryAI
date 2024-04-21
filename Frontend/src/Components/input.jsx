
export default function Input({placeholder, button, input_state, onchange, val}){
    return (
        <form className={`input_container ${input_state}`}>
        <div className="input_content">
            <textarea className="input_text"  placeholder={placeholder} onChange={onchange} value={val}/>
        </div>
        <div className="input_submit">
            {button}
        </div>

    </form>
    )
}