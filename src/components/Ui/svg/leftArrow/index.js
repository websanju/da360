const Icon = ({ width = 24, height = 25, color = "#fff" }) => (
    <svg
        width={width}
        height={height}
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M18.2627 12.1064L11.7627 18.6064L11.6494 18.7187L11.5439 18.5986L10.8838 17.8486L10.791 17.7432L15.8838 12.6504L3.84668 12.6504L3.84668 11.3496L15.8838 11.3496L10.791 6.25684L10.8838 6.15137L11.5439 5.40137L11.6494 5.28125L11.7627 5.39355L18.2627 11.8936L18.3682 12L18.2627 12.1064Z"
            fill={color}
            stroke={color}
            strokeWidth="0.3"
        />
    </svg>
);

export default Icon;
