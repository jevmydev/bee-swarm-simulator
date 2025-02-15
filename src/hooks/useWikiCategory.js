import { useState, useEffect } from "react";
import { useParams, useLocation } from "wouter";
import { formatName } from "../utils/formats";
import { getEntryName } from "../utils/helpers";
import { CATEGORIES, CATEGORIES_ENTRY_NAME, CATEGORIES_PROP_NAME } from "../constants/const";

export const useWikiCategory = () => {
    const params = useParams();
    const [, navigate] = useLocation();
    const { category: nameCategory } = params;

    if (!(nameCategory in CATEGORIES)) return navigate("/wiki");

    const [category, setCategory] = useState(CATEGORIES[nameCategory]);
    const [entrySearch, setEntrySearch] = useState(null);
    const entryNameCategory = CATEGORIES_ENTRY_NAME[nameCategory];
    const entryPropName = CATEGORIES_PROP_NAME[nameCategory];

    useEffect(() => {
        const searchParams = new URLSearchParams(document.location.search);

        const entryName = getEntryName({ entryNameCategory, searchParams });
        const entryClassification = searchParams.get("classification");

        if (!entryName && !entryClassification) return;

        if (entryName) {
            category.map((category) => {
                const entry = category[entryPropName];
                const entrySearch = entry.find(({ name }) => formatName(name) === entryName);

                if (entrySearch) {
                    setEntrySearch(entrySearch);
                    return;
                }
            });
        }

        if (entryClassification) {
            const filteredCategory = category.filter(({ classification }) => formatName(classification) === entryClassification);
            setCategory(filteredCategory);
        }
    }, []);

    return { entrySearch, category, entryPropName };
};
