export const IconTimer = ({ width, height, colored }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {colored ? (
        <>
          <path
            d="M20.75 13.25C20.75 18.08 16.83 22 12 22C7.17 22 3.25 18.08 3.25 13.25C3.25 8.42 7.17 4.5 12 4.5C16.83 4.5 20.75 8.42 20.75 13.25Z"
            stroke="#FF5B49"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 8V13"
            stroke="#FF5B49"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 2H15"
            stroke="#FF5B49"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      ) : (
        <>
          <path
            d="M13.8333 8.83333C13.8333 12.0533 11.22 14.6667 8 14.6667C4.78 14.6667 2.16667 12.0533 2.16667 8.83333C2.16667 5.61333 4.78 3 8 3C11.22 3 13.8333 5.61333 13.8333 8.83333Z"
            stroke="#7D7D7D"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 5.33301V8.66634"
            stroke="#7D7D7D"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6 1.33301H10"
            stroke="#7D7D7D"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      )}
    </svg>
  );
};
