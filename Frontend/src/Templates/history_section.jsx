import Input from "../Components/input"
import Button from "../Components/Button"
import CloudUpload from "../Atoms/Icons/cloud_upload"
import Dot from "../Atoms/Icons/dot"
import axios from "axios"
import { useState } from "react";
export default function HistorySection({original, summary}){
    
    return <div className="input_section">
       
        
        <div className="result_box">
        <div className="result_txt">
           {original}

        </div>
       
        </div>
        <div className="result_box">
        <div className="result_txt">
           {summary}

        </div>
       
        </div>
      
       
       
    </div>
}