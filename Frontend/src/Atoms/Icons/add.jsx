const Add = ({ size, type, name }) => {
  return (
    <>
      {name === "add" && (
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
      )}
      {name === "document-add" && (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M6.75 9.75H11.25M9 7.5L9 12M12.75 15.75H5.25C4.42157 15.75 3.75 15.0784 3.75 14.25V3.75C3.75 2.92157 4.42157 2.25 5.25 2.25H9.43934C9.63825 2.25 9.82902 2.32902 9.96967 2.46967L14.0303 6.53033C14.171 6.67098 14.25 6.86175 14.25 7.06066V14.25C14.25 15.0784 13.5784 15.75 12.75 15.75Z" stroke="#693F34" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </>
  );
};
export default Add