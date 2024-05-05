import Input from "../Components/input"
import Button from "../Components/Button"
import CloudUpload from "../Atoms/Icons/cloud_upload"
import Dot from "../Atoms/Icons/dot"
import Add from "../Atoms/Icons/add"
import axios from "axios"
import { useState } from "react";
import TextArea from "../Components/textarea"
import Volume from "../Atoms/Icons/volume"
import ClipboardList from "../Atoms/Icons/clipboard"
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
    const playSound = async () => {
        try {
            const response = await axios.post('http://localhost:8000/playsound/', { text: inputText });
        } catch (error) {
            console.error('Error fetching summary:', error);
            
        }
    };
    const [file, setFile] = useState(null);
  const [text, setText] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const uploadDocument = async () => {
    const formData = new FormData();
    formData.append('document', file);
    try {
      const response = await axios.post('http://localhost:8000/upload_document/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setText(response.data.text);
    } catch (error) {
      console.error('Error uploading document:', error);
    }
  };
 

  
    return <div className="input_section">
       
        
        <div className="prompt_box">
            <div className="summary_features">
            <div >
            <Input  trailing_icon={<CloudUpload/>} placeholder="نزل الملف" onChange={handleFileChange} color="#67313C" type="file" styling={"file"} onClick={uploadDocument}/>
            </div>
            <Button styling="text" icon={<ClipboardList/>} text= "الصق رابط المقال" color="#67313C"/>
            </div>
        <div className="input_box">
        <TextArea placeholder = "أدخل أو الصق النص الخاص بك واضغط على تلخيص"  submit={<Button styling="tonal" text = "ترجمة"  bgcolor="#CAC9DA" color="#23223A" onclick={Summarize}/>}  val={inputText}
                onchange={(e) => setInputText(e.target.value)}/>
        </div>
        </div>
        <div className="result_box">
        <div className="result_txt">
            <div className="result_summary">
            {summary}
            </div>
            <div className="result_sound"  onClick={summary != "" && playSound}>
                <Volume/>
            </div>
        </div>
        <label className="result_label">
        <Button styling="text" text="تحميل الملخص" icon={<Add name="document-add"/>}/>
        </label>
        </div>
      
       
       
    </div>
}