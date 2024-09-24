import { IPlaylist } from "../interfaces/IPlaylist";
import LinkinParkCover from "../assets/LP.jpg"
import LeagueOfLegendsCover from "../assets/League.jpg"


export function getFavoritePlaylists() {
    let playlists: IPlaylist[] = [
        {
            id: "12436298603",
            title: "League of Legends",
            cover: LeagueOfLegendsCover
        },
        {
            id: "3382903206",
            title: "Linkin Park",
            cover: LinkinParkCover
        },
    ]

    // Add the playlists from localStorage

    return playlists;
}