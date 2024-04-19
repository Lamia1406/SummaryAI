import CarouselBottom from "./partials/carousel_bottom";
import CarouselTop from "./partials/carousel_top";
import ArrowLeft from "../Atoms/Icons/arrow_left";
import ArrowRight from "../Atoms/Icons/arrow_right";
import Feature from "./partials/feature";
import PaginationLine from "./partials/pagination_line";
export default function Carousel({isVisibleLeft, img, title, content,isVisibleRight, line_id, onClickLeft, onClickRight}){
    return (
        <div className="carousel">
           <CarouselTop arrow_left ={<ArrowLeft isVisible= {isVisibleLeft}  onClick={onClickLeft}/>} feature = {<Feature img={img} title= {title} content={content}/>}  arrow_right ={<ArrowRight isVisible= {isVisibleRight} onClick={onClickRight}/>} />
            <CarouselBottom pagination_line={<PaginationLine dots_num={6} line_id={line_id}/>}/>
        </div>
    )
}