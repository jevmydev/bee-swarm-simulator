import { useWikiCategory } from "../../hooks/useWikiCategory";

import WikiSearch from "./WikiSearch";
import WikiClassification from "./WikiClassification";

export function WikiCategory() {
    const { entrySearch, category, entryPropName } = useWikiCategory();

    return (
        <section>
            <div className="max-w-screen-lg mx-auto px-4 pt-8">
                <div className="flex flex-col gap-16">{entrySearch ? <WikiSearch entry={entrySearch} /> : <WikiClassification categories={category} entryPropName={entryPropName} />}</div>
            </div>
        </section>
    );
}

export default WikiCategory;
