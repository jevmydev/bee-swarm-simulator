export const Button = ({ title, onClick, isFocus, children }) => {
    const classIsFocus = isFocus ? "bg-yellow-600" : "bg-yellow-300 hover:link-hover active:link-active";

    return (
        <button
            className={`${classIsFocus} flex py-2 px-5 border-2 border-dark rounded-lg link-shadow h-full cursor-pointer uppercase font-semibold text-dark tracking-wider`}
            title={title}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
