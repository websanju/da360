const Icon = ({ width = 25, height = 24, color = "#fff" }) => (
    <svg
        width={width}
        height={height}
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M18.7665 11.6064L12.2665 18.1064L12.1532 18.2187L12.0477 18.0986L11.3876 17.3486L11.2948 17.2432L16.3876 12.1504L4.35046 12.1504L4.35046 10.8496L16.3876 10.8496L11.2948 5.75684L11.3876 5.65137L12.0477 4.90137L12.1532 4.78125L12.2665 4.89355L18.7665 11.3936L18.8719 11.5L18.7665 11.6064Z"
            fill={color}
            stroke={color}
            stroke-width="0.3"
        />
    </svg>
);

export default Icon;
