export default function Feature({img, title, content}) {
    console.log(img, title, content)
    return (
       <div className="feature">
        
         <div className="feature-img" style={{backgroundImage: `url(${img})`}}>        
        </div>
        <div className="content">
            <div className="feature-title">
        {title}
           </div>
            <div className="feature-content">
        {content}
           </div> 
        </div>
       </div>
    )
}