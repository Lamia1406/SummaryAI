import Navbar from "../Templates/navbar"
import Footer from "../Templates/footer"
import InputSection from "../Templates/input_section"
import Features from "../Templates/features"
import Authenticate from "../Templates/authenticate_section"
const Home = () => {
    return <div>      
        <Navbar/>
        <div className="main_content">
        <InputSection/>
        <Features/>
       <Footer/>
        </div>
    </div>
}
export default Home