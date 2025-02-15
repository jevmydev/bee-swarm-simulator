export const getEntryName = ({ entryNameCategory, searchParams }) => {
    if (Array.isArray(entryNameCategory)) {
        const getValidEntryName = entryNameCategory.find((key) => searchParams.get(key) !== null);
        return searchParams.get(getValidEntryName);
    }

    return searchParams.get(entryNameCategory);
};

export const isValidImagePath = (path) => {
    const regex = /^\/assets\/images\/creatures\/bees\/[a-z-]+\.webp$/;
    return regex.test(path);
};
