import { useEffect, useState } from "react";
import { PlaylistCard } from "../layout/PlaylistCard";
import { toggleFavoritePlaylist, getFavoritePlaylists } from "../ts/playlist-base";
import { IPlaylist } from "../interfaces/IPlaylist";
import { getPlaylist } from "../api";
import Footer from "../layout/Footer";

export default function IndexRoute() {

    //const favoritePlaylists = getFavoritePlaylists();
    const [favoritePlaylists, setFavoritePlaylists] = useState<IPlaylist[]>([])
    const [searchText, setSearchText] = useState("")
    const [searchedPlaylists, setsearchedPlaylists] = useState<IPlaylist[]>([]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        getPlaylist(searchText).then(res => {
            setsearchedPlaylists(res)
        })
    }

    const handleFavoriteClick = (playlist: IPlaylist) => {
        toggleFavoritePlaylist(playlist)
        setFavoritePlaylists(getFavoritePlaylists())
    }

    useEffect(() => {
        setFavoritePlaylists(getFavoritePlaylists())

    }, [])

    useEffect(() => {
        if (searchText === "") {
            setsearchedPlaylists([])
        }
    }, [searchText])



    return <>
        <form className="pt-8" onSubmit={handleSubmit}>
            <input autoComplete="off" type="search" id="search" name="search" placeholder="Search a playlist" value={searchText} onChange={(e) => setSearchText(e.target.value)}></input>
        </form>
        {
            !!searchedPlaylists.length &&
            <article className="flex gap-8 flex-wrap">
                {searchedPlaylists.map(playlist => (
                    <PlaylistCard key={playlist.id} isFavorite={!!favoritePlaylists.find(p => p.id === playlist.id)} playlist={playlist} onFavoriteClick={() => handleFavoriteClick(playlist)} />
                ))}
            </article>
        }
        <h3 className="mt-2">Favorites</h3>
        <article className="flex gap-8">

            {!!favoritePlaylists.length ?
                favoritePlaylists.map(playlist => (
                    <PlaylistCard key={playlist.id} isFavorite={true} playlist={playlist} onFavoriteClick={() => handleFavoriteClick(playlist)} />
                )) :
                <p className="m-0">Search a playlist and Favorite it!</p>
            }
        </article>
        <Footer />
    </>
}