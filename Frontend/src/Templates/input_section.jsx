import Input from "../Components/input"
import Button from "../Components/Button"
import CloudUpload from "../Atoms/Icons/cloud_upload"
import Dot from "../Atoms/Icons/dot"
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
       
        
        <div className="prompt_box">
            <div className="summary_features">
            <Button styling="text" icon={<CloudUpload/>} text="حمل الملف" color="#67313C"/>
            <Button styling="text" icon={<CloudUpload/>} text= "الصق رابط المقال" color="#67313C"/>
            </div>
        <div className="input_box">
        <Input placeholder = "أدخل أو الصق النص الخاص بك واضغط على تلخيص" trailing_icon={<Dot/>} submit={<Button styling="tonal" text = "ترجمة"  bgcolor="#CAC9DA" color="#23223A" />}  val={inputText}
                onchange={(e) => setInputText(e.target.value)}/>
        </div>
        </div>
        <div className="result_box">
        <div className="result_txt">
            {summary}

        </div>
        <label className="result_label">
        الملخص
        </label>
        </div>
      
       
       
    </div>
}