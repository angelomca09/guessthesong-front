import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:5000"
})

async function getMusicsByPlaylistId(playlistId: string) {
    return api.get(`get_playlist/${playlistId}`)
        .then((res) => res.data)
}

export default {
    getMusicsByPlaylistId
}