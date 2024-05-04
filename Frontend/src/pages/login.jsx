import Input from "../Components/input"
import Button from "../Components/Button"
import {Link}  from "react-router-dom"
const Login = () => {
    return <div className="login_container">
        <div className="login_card">
            <div className="login_content">
                <div className="header">
                    <div className="header_title">
                    <div>
                    انطلق معنا
                    </div>
                    <div>
                    دخولك لعالم الملخصات الذكية

                    </div>
                    </div>
                    <div className="header_subtitle">دخولك هنا يفتح أبواب المعرفة السريعة والسهلة. احصل على الملخصات الذكية وانطلق نحو النجاح!
</div>
                </div>
                <form className="authenticate">
                    <div className="authenticate_input_box">
                        <Input placeholder="example@gmail.com" label="البريد الالكتروني"/>
                    </div>
                    <div className="authenticate_input_box" >
                        <Input placeholder="******" label="كلمة السر"/>
                    </div>
                    <Button text="تسجيل دخول" styling="btn-login"/>
                </form>
                <div className="other_options">
                    <div className="other_options_first">لا تملك حسابا ؟</div>
                    <Link  to = "/signup" className="other_options_second" >انضم الينا!</Link>
                </div>
            </div>
        </div>
    </div>
}
export default Login