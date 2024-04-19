export default function Dot({isActive}){
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className={isActive ? "dot_active" : "dot_inactive"}>
  <circle cx="12" cy="12" r="12" transform="matrix(1 0 0 -1 0 24)"/>
</svg>
    )
}