import { CollectionCard } from "../layout/CollectionCard";
import { getCollections } from "../ts/collection-base";

export default function IndexRoute() {
    const collections = getCollections();

    return <div className="flex gap-4">
        {!!collections.length && collections.map(collection => (
            <CollectionCard collection={collection} />
        ))}
    </div>
}