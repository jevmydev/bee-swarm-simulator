import { useState } from "react";
import { formatContent } from "../utils/formats";
import { FIRST_ITEM } from "../constants/const";

export const useNews = (news) => {
    const [selectedNew, setSelectedNew] = useState(news[FIRST_ITEM]);

    const { content } = selectedNew;
    const formattedContent = formatContent(content);

    const updateSelectedNew = (e) => {
        const index = e.target.getAttribute("data-index");
        const newSelectedNew = news[index];

        setSelectedNew(newSelectedNew);
    };

    return { selectedNew, formattedContent, updateSelectedNew };
};
