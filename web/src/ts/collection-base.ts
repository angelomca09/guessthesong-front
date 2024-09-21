import { ICollection } from "../interfaces/ICollection";

export function getCollections() {
    let collections: ICollection[] = [
        {
            name: "Games",
            playlistId: "12645052643"
        }
    ]

    // Add the collections from localStorage

    return collections;
}