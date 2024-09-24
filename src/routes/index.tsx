import { useState } from "react";
import { PlaylistCard } from "../layout/PlaylistCard";
import { getFavoritePlaylists } from "../ts/playlist-base";
import { IPlaylist } from "../interfaces/IPlaylist";
import { getPlaylist } from "../api";

export default function IndexRoute() {

    const favoritePlaylists = getFavoritePlaylists();
    const [searchText, setSearchText] = useState("")
    const [searchedPlaylists, setsearchedPlaylists] = useState<IPlaylist[]>([]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        getPlaylist(searchText).then(res => {
            setsearchedPlaylists(res)
        })
    }

    return <>
        <h3 className="pt-8" >Favorites</h3>
        <article className="flex gap-8">
            {!!favoritePlaylists.length && favoritePlaylists.map(playlist => (
                <PlaylistCard playlist={playlist} />
            ))}
        </article>
        <br />
        <h3>Search</h3>

        <form onSubmit={handleSubmit}>
            <input type="search" id="search" name="search" placeholder="Search" value={searchText} onChange={(e) => setSearchText(e.target.value)}></input>
        </form>
        {
            !!searchedPlaylists.length &&
            <article className="flex gap-8">
                {searchedPlaylists.map(playlist => (
                    <PlaylistCard playlist={playlist} />
                ))}
            </article>
        }
    </>
}