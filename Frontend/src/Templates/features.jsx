import React, { useState } from 'react';
import Carousel from '../Components/carousel';
import feature1 from '../Assets/feature1.svg';
import feature2 from '../Assets/feature2.svg';
import feature3 from '../Assets/feature3.svg';
import feature4 from '../Assets/feature4.svg';
import feature5 from '../Assets/feature5.svg';
import feature6 from '../Assets/feature6.svg';

export default function Features() {
    let content= [
               {
                title: "لخص النص المكتوب", 
                text: "قم بتلخيص المحتوى الطويل بسهولة إلى ملخصات موجزة، مما يوفر لك الوقت والجهد مع الحفاظ على الأفكار الرئيسية",
                img: feature1,
                left_icon_visibility : true,
                right_icon_visibility : false,
               },
               {
                title:  "لخص الملفات المحملة",
                text: "قم بتلخيص النصوص بسهولة من مختلف صيغ الملفات، مما يضمن لك القدرة على فهم المعلومات الأساسية بسرعة من أي مصدر",
                img: feature2,
                  left_icon_visibility : true,
                 right_icon_visibility : true,
               },
               {
                title:  "استمع الى الملخص",
                text: "استمتع بسهولة الاستماع إلى المحتوى الملخّص، مما يتيح الاستهلاك بدون استخدام اليدين وزيادة الوصولية",
                img: feature3,
                  left_icon_visibility : true,
                 right_icon_visibility : true,
               },
               {
        
                title:  "حمل الملخص",
                text: "احفظ المحتوى الملخّص للوصول للرجوع إليه في وقت لاحق، مع خيار تحميل الملخّصات للاستخدام المستقبلي",
                img: feature4,
                  left_icon_visibility : true,
                 right_icon_visibility : true,
               },
               {
                title:  "تلخيص المحتوى من يوتيوب",
                text: "قم بتحويل مقاطع فيديو يوتيوب الطويلة إلى نسخ ملخّصة، مما يمكنك من استخراج المعلومات القيمة بكفاءة",
                img: feature5,
                  left_icon_visibility : true,
                 right_icon_visibility : true,
               },
               {
                title:  "لخص محتوى المقالة باستخدام الرابط" ,
                text: "قم ببساطة بإدخال رابط أي مقالة على الإنترنت واحصل على نسخة ملخّصة، مما يسهل عليك فهم المحتوى من مختلف مواقع الويب",
                img: feature6,
                  left_icon_visibility : false,
                 right_icon_visibility : true,
               }
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    const goToPrevious = () => {
        setActiveIndex(prevIndex => (prevIndex === 0  ? content.length - 1 : prevIndex - 1));
    };

    const goToNext = () => {
        setActiveIndex(prevIndex => (prevIndex === content.length - 1 ? 0 : prevIndex + 1));
    };

    return (
                <div className='features_section'>
                    <div className='features_heading'>
                    لخص المحتوى بطريقة مثيرة للاهتمام
                    </div>
                    <Carousel 
                    isVisibleLeft={content[activeIndex].left_icon_visibility}
                    img={content[activeIndex].img}
                    title={content[activeIndex].title}
                    content={content[activeIndex].text}
                    isVisibleRight={content[activeIndex].right_icon_visibility}
                    line_id={activeIndex}
                    onClickLeft={goToNext}
                    onClickRight={goToPrevious} 
                />
                </div>
            
     
    );
}
