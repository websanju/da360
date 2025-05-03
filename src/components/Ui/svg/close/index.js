const Icon = ({ width = 20, height = 20, color = "#fff" }) => (
    <svg
        width={width}
        height={height}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M5.83331 5.83333L14.1666 14.1667M5.83331 14.1667L14.1666 5.83333"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

export default Icon;
