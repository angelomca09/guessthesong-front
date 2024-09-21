import { ICollection } from "../interfaces/ICollection";
import LinkinParkCover from "../assets/LP.jpg"
import LeagueOfLegendsCover from "../assets/League.jpg"


export function getCollections() {
    let collections: ICollection[] = [
        {
            name: "League of Legends",
            playlistId: "12436298603",
            cover: LeagueOfLegendsCover
        },
        {
            name: "Linkin Park",
            playlistId: "3382903206",
            cover: LinkinParkCover
        },
        {
            name: "Games",
            playlistId: "12645052643",
        },
    ]

    // Add the collections from localStorage

    return collections;
}