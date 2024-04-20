export default function ArrowRight({isVisible, onClick}){
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={!isVisible ? {visibility: "hidden"}: {}} className="arrow" onClick={onClick}>
  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
    </svg>
    )
    }
  