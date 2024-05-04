const Menu_Item = ({is_active, title}) => {
return (
    <div className={`menu_item ${is_active && "active"}`} style={!title ? {justifyContent: "center"}: {}}>
      
        {
            title && <p className="menu_item_title">
            {title}
        </p>
        }
       
        <div className="menu_item_date">
                12/05/2024
        </div>
    </div>
)
}
export default Menu_Item