import { useState } from "react";

import DomToImage from "dom-to-image";

export const useHiveCapture = (hiveRef) => {
    const [capture, setCapture] = useState(null);

    const captureHive = async () => {
        if (!hiveRef.current) return;

        const capture = await DomToImage.toPng(hiveRef.current);
        setCapture(capture);
    };

    return { capture, captureHive };
};
