import { IPlaylist } from "../interfaces/IPlaylist";

const PLAYLISTS_KEY = "playlists"

export function getFavoritePlaylists() {
    if (!localStorage.getItem(PLAYLISTS_KEY))
        saveFavorites([]);

    let playlists: IPlaylist[] = JSON.parse(localStorage.getItem(PLAYLISTS_KEY) || "[]")

    return playlists;
}

export function saveFavorites(playlists: IPlaylist[]) {
    localStorage.setItem(PLAYLISTS_KEY, JSON.stringify(playlists))
}

export function toggleFavoritePlaylist(playlist: IPlaylist) {
    console.log("TRACK :: toggleFavoritePlaylist: ", playlist)
    let playlists = getFavoritePlaylists()
    console.log(playlists)

    if (playlists.filter(p => p.id === playlist.id).length === 0) {
        console.log("Adding")
        playlists.push(playlist)
    }
    else {
        console.log("Removing")
        playlists = playlists.filter(p => p.id !== playlist.id)
    }
    saveFavorites(playlists)
}