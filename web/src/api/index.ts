import axios from "axios";
import { IGameContent } from "../interfaces/IGameContent";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})

async function getGameByPlaylistId(playlistId: string) {
    return api.get(`get_playlist/${playlistId}`)
        .then((res): IGameContent[] => res.data)
}

export {
    getGameByPlaylistId
}