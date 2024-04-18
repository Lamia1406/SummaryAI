import Feature from "./Components/feature.jsx"
import Footer from "./Templates/footer.jsx"
import Navbar from "./Templates/navbar.jsx"
import feature1 from "./Assets/feature1.svg"
import feature2 from "./Assets/feature2.svg"
import feature3 from "./Assets/feature3.svg"
import feature4 from "./Assets/feature4.svg"
import feature5 from "./Assets/feature5.svg"
import feature6 from "./Assets/feature6.svg"
import Button from "./Components/Button.jsx"
export default function App() {
  let counter = 0
  return (
    <div>
      <Navbar/>
      <Footer/>
      <Feature img={feature1} title= "لخص النص المكتوب" content="قم بتلخيص المحتوى الطويل بسهولة إلى ملخصات موجزة، مما يوفر لك الوقت والجهد مع الحفاظ على الأفكار الرئيسية"/>
      <Feature img={feature2} title= "لخص الملفات المحملة" content="قم بتلخيص النصوص بسهولة من مختلف صيغ الملفات، مما يضمن لك القدرة على فهم المعلومات الأساسية بسرعة من أي مصدر"/>
      <Feature img={feature3} title= "استمع الى الملخص" content="استمتع بسهولة الاستماع إلى المحتوى الملخّص، مما يتيح الاستهلاك بدون استخدام اليدين وزيادة الوصولية"/>
      <Feature img={feature4} title= "حمل الملخص" content="احفظ المحتوى الملخّص للوصول للرجوع إليه في وقت لاحق، مع خيار تحميل الملخّصات للاستخدام المستقبلي"/>
      <Feature img={feature5} title= "تلخيص المحتوى من يوتيوب" content="قم بتحويل مقاطع فيديو يوتيوب الطويلة إلى نسخ ملخّصة، مما يمكنك من استخراج المعلومات القيمة بكفاءة"/>
      <Feature img={feature6} title= "لخص محتوى المقالة باستخدام الرابط" content="قم ببساطة بإدخال رابط أي مقالة على الإنترنت واحصل على نسخة ملخّصة، مما يسهل عليك فهم المحتوى من مختلف مواقع الويب"/>
      </div>
  )
}
