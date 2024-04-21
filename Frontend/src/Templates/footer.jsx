import Logo from '../Atoms/Logo'
import Location from '../Atoms/Icons/location_icon'
import Mail from '../Atoms/Icons/mail'
import Phone from '../Atoms/Icons/phone'
import Facebook from '../Atoms/Icons/Facebook'
import Instagram from '../Atoms/Icons/instagram'
import Twitter from '../Atoms/Icons/twitter'
export default function Footer() {
  return (
    <footer className="footer">
      <div className="flex  footer-right">
         <div className='footer-head'>
            <Logo height={32}/>
            <div className='footer-txt'>
            طريقك إلى النجاح: بساطة، تلخيص، تفوق
            </div>
            </div>
            <div className='socials'>
                <Facebook/>
                <Instagram/>
                <Twitter/>
            </div>
        </div>
      <div className="hidden lg:flex footer-left">
      <div className='contact-label'>
        اتصل بنا
      </div>
      <div className='contacts'>
        <div className='contact-item'>
            <Location/>
            <div className='contact-label'> 
            جامعة قسنطينة 2, عبد الحميد مهري - المدينة الجديدة علي منجلي, قسنطينة
            </div>
        </div>
        <div className='contact-item'>
            <Mail/>
            <div className='contact-label'> 
            info@nabdhah.com
            </div>
        </div>
        <div className='contact-item'>
            <Phone/>
            <div className='contact-label'> 
            +213123456789
            </div>
        </div>
      </div>
          
        </div>
      

    </footer>
  )
}
