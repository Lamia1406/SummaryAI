import Navbar from "../Templates/navbar"
import Footer from "../Templates/footer"
import HistorySection from "../Templates/history_section"
import Authenticate from "../Templates/authenticate_section"
const History = () => {
    return <div>      
    <Navbar/>
    <div className="main_content">
        <Authenticate/>
    <HistorySection original="بالنظر إلى حقيقة أن القطط تمتلك جمالًا وأناقة لا مثيل لهما، فإنها تحظى بشعبية كبيرة كحيوانات أليفة. تتميز القطط بطباعها الفريدة، فهي تجمع بين الغموض والحنان في آن واحد. تُعتبر القطط رمزًا للحكمة والذكاء في بعض الثقافات، حيث يعتبر البعض أن لديها قدرات خارقة تجعلها قادرة على فهم لغة البشر. يتغذى البعض على ذلك ليبنوا علاقات قوية معها، مما يجعل القطط جزءًا لا يتجزأ من حياتهم." summary=" القطط تتمتع بجاذبية فريدة من نوعها بفضل جمالها وأناقتها، وهي تتميز بطباعها المتنوعة التي تمزج بين الغموض والحنان. يعتبرها البعض رمزًا للحكمة والذكاء، مما يجعلها جزءًا لا يتجزأ من حياتهم."/>
   <Footer/>
    </div>
</div>
}
export default History