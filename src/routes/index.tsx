import { CollectionCard } from "../layout/CollectionCard";
import { getCollections } from "../ts/collection-base";

export default function IndexRoute() {
    const collections = getCollections();

    return <article className="flex gap-8">
        {!!collections.length && collections.map(collection => (
            <CollectionCard collection={collection} />
        ))}
    </article>
}