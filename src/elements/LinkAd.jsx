import Link from "./Link";

export const LinkAd = ({ title, href, imageUrl, textClass }) => {
    return (
        <Link className={`${textClass} relative overflow-hidden rounded-lg flex justify-center p-16 w-full transition-transform hover:scale-[1.01]`} href={href} title={title}>
            <div className="absolute top-0 left-0 opacity-10 w-full h-full flex items-center justify-between">
                <img className="object-contain w-24 md:w-48" src={imageUrl} alt={title} loading="lazy" decoding="async" />
                <img className="object-contain w-24 md:w-48" src={imageUrl} alt={title} loading="lazy" decoding="async" />
            </div>
            <div>
                <h2 className="text-center font-title tracking-wider text-3xl sm:text-4xl lg:text-5xl">{title}</h2>
            </div>
        </Link>
    );
};

export default LinkAd;
