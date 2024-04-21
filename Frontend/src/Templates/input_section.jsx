import Input from "../Components/input"
import Button from "../Components/Button"
import CloudUpload from "../Atoms/Icons/cloud_upload"
import axios from "axios"
import { useState } from "react";
export default function InputSection(){
    const [inputText, setInputText] = useState('');
    const [summary, setSummary] = useState('');
    const Summarize = async () => {
        try {
            const response = await axios.post('http://localhost:8000/summarize/', { text: inputText });
            setSummary(response.data.summary);
            console.log(summary)
        } catch (error) {
            console.error('Error fetching summary:', error);
            
        }
    };
    return <div className="input_section">
       
       <div className="input_box">
        <Button styling="text" icon={<CloudUpload/>} text="حمل الملف" color="#67313C"/>
       <Input button={<Button styling="tonal" text = "ترجمة"  bgcolor="#CAC9DA" color="#23223A" onclick = {Summarize}/>} placeholder = "أدخل أو الصق النص الخاص بك واضغط على تلخيص" val={inputText}
                onchange={(e) => setInputText(e.target.value)} input_state="enabled" />
       </div>
       <div className="input_box output">
        <div className="result_txt">
            {summary}

        </div>
        <label className="result_label">
        الملخص
        </label>
       {/* <Input   input_state="enabled"/> */}
       </div>
       
    </div>
}