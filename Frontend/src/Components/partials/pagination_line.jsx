import Dot from "../../Atoms/Icons/dot"
export default function PaginationLine({dots_num, line_id}){
    return(
        <div className="pagination_line">
          {
                Array.from({ length: dots_num }, (_, index) => (
                    <Dot key={index}  isActive={index === line_id ? true : false}/>
                ))
            }
            
        </div>
    )
}