import Input from "../Components/input"
import Button from "../Components/Button"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"
const Signup = () => {
    let navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const handleSubmit = async () => {
      if (validateForm()) {
        try {
          await register();
          setEmail('');
          setPassword('');
          setErrors({});
        } catch (error) {
            console.log(error)
        //   console.error(error.response.data.message);
          const err = {};
        //   err.account_exist = error.response.data.message;
          setErrors(err);
        //   toast.error(error.response.data.message || 'An error occurred');
        }
      }
    };
  
    const register = async () => {
      try {
        await axios.post(
                  ` http://127.0.0.1:8000/signup/`,
                  {
                    email,
                    password
                  }
        );
        navigate('/summarize');
        await AsyncStorage.setItem('isAuthenticated', 'true');
      } catch (error) {
        const err = {};
        // err.account_exist = error.response.data.message;
        setErrors(err);
        // toast.error(error.response.data.message || 'An error occurred');
        throw error;
      }
    };
  
    const validateForm = () => {
      const errors = {};
      if (!email) errors.email = 'Email is required';
      else if (!/^[a-zA-Z]/.test(email)) errors.email = 'email should start with a letter';
      if (!password) errors.password = 'Password is required';
      else if (password.length < 8) errors.password = 'Password must be at least 8 characters';
      else if (!/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\/-])/.test(password)) errors.password = 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character';
      setErrors(errors);
      return Object.keys(errors).length === 0;
    };
    return <div className="signup_container">
        <div className="signup_card">
            <div className="signup_content">
                <div className="header">
                    <div className="header_title">
                    <div>
                 ملخصات ذكية
                    </div>
                    <div>
                    حقق نجاح باقل جهد

                    </div>
                    </div>
                    <div className="header_subtitle">
                    استفد من قوة الذكاء الصناعي لتلخيص المعلومات المعقدة إلى ملخصات مختصرة، وفّر الوقت واسرع في طريقك نحو النجاح
</div>
                </div>
                <form className="authenticate">
                    <div className="authenticate_input_box">
                        <Input placeholder="example@gmail.com" label="البريد الالكتروني" val={email} onchange={(text) => setEmail(text.target.value)}/>
          {
                        errors.email ? <div>{errors.email}</div> : null
                    }
          


                    </div>
                    <div className="authenticate_input_box" >
                        <Input cls="dark" placeholder="******" label="كلمة السر"  onchange={(text) => setPassword(text.target.value)}/>
                        {
                        errors.password ? <div>{errors.password}</div> : null
                    }
                    </div>
                    <Button text="تسجيل" styling="btn-signup" onclick={handleSubmit}/>
                </form>
                <div className="other_options">
                    <div className="other_options_first">هل تملك حسابا ؟</div>
                    <Link to="/login" className="other_options_second">سجل الدخول</Link>
                </div>
            </div>
        </div>
    </div>
}
export default Signup