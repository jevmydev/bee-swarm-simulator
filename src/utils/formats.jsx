export const formatContent = (content) => {
    return content
        .map((paragraph) => {
            const formattedParagraphs = paragraph.split("\n").filter((line) => line.trim() !== "");

            return formattedParagraphs.map((line) => {
                const parts = line.split(/\*\*(.*?)\*\*/g);

                return parts.map((part, index) => {
                    if (index % 2 === 1) {
                        return <strong key={index}>{part}</strong>;
                    } else {
                        return part;
                    }
                });
            });
        })
        .flat();
};

export const formatName = (name) => {
    return name.split(" ").join("-").toLowerCase();
};

export const formatNumber = (num) => {
    if (num < 1e3) return Math.round(num).toString();
    if (num < 1e6) return (num / 1e3).toFixed(1) + "K";
    if (num < 1e9) return (num / 1e6).toFixed(1) + "M";
    if (num < 1e12) return (num / 1e9).toFixed(1) + "B";
    if (num < 1e15) return (num / 1e12).toFixed(1) + "T";
    if (num < 1e18) return (num / 1e15).toFixed(1) + "Qd";
    if (num < 1e21) return (num / 1e18).toFixed(1) + "Qn";
    if (num < 1e24) return (num / 1e21).toFixed(1) + "Sx";
    if (num < 1e27) return (num / 1e24).toFixed(1) + "Sp";
    if (num < 1e30) return (num / 1e27).toFixed(1) + "Oc";
    if (num < 1e33) return (num / 1e30).toFixed(1) + "No";
    if (num < 1e36) return (num / 1e33).toFixed(1) + "Dc";
    return num.toExponential(2);
};
