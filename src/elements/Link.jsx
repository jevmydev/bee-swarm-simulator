export const Link = ({ className, href, title, target = "_self", isFullScreen, isActive, onClick, download, children }) => {
    const classIsUnderline = "group inline-block";
    const classIsActive = "flex bg-yellow-300 py-2 px-5 border-2 border-dark rounded-lg link-shadow hover:link-hover active:link-active";

    const linkClass = isActive ? classIsActive : classIsUnderline;

    return (
        <a
            className={`${className ?? linkClass} ${isFullScreen ? "w-full" : "w-auto"} md:h-full cursor-pointer uppercase font-semibold text-dark tracking-wider`}
            href={href}
            title={title}
            target={target}
            rel="noopener noreferrer"
            onClick={onClick}
            download={download}
        >
            {!isActive && (
                <span className="bg-left-bottom bg-gradient-to-r from-dark to-dark bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-300 ease-in">
                    {children}
                </span>
            )}
            {isActive && children}
        </a>
    );
};

export default Link;
