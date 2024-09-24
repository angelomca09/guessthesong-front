import axios from "axios";
import { IGameContent } from "../interfaces/IGameContent";
import { IPlaylist } from "../interfaces/IPlaylist";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})

async function getGameByPlaylistId(playlistId: string) {
    return api.get(`get_playlist?playlist_id=${playlistId}`)
        .then((res): IGameContent[] => res.data)
}

async function getPlaylist(search: string) {
    return api.get(`search?query=${search}`)
        .then((res): IPlaylist[] => res.data)
}

export {
    getGameByPlaylistId,
    getPlaylist
}