const Add = ({ size, type, name }) => {
    return (
      name === "add" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox={`0 0 ${size} ${size}`}
          strokeWidth="1.5"
          className="add_icon"
        >
          <path
            {...(type === "outline"
              ? {
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  d: 'M12 4.5v15m7.5-7.5h-15',
                }
              : {
                  fillRule: 'evenodd',
                  d: 'M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z',
                  clipRule: 'evenodd',
                })}
          />
        </svg>
      )
    );
  };
  
  export default Add;
  