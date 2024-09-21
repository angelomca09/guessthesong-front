import axios from "axios";
import { IGameContent } from "../interfaces/IGameContent";

const api = axios.create({
    baseURL: "http://localhost:5000"
})

async function getGameByPlaylistId(playlistId: string) {
    return api.get(`get_playlist/${playlistId}`)
        .then((res): IGameContent => res.data)
}

export {
    getGameByPlaylistId
}