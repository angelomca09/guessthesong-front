import { useEffect, useState } from "react";
import { PlaylistCard } from "../layout/PlaylistCard";
import { toggleFavoritePlaylist, getFavoritePlaylists } from "../ts/playlist-base";
import { IPlaylist } from "../interfaces/IPlaylist";
import { getPlaylist } from "../api";
import Footer from "../layout/Footer";
import { MdFavorite } from "react-icons/md";
import { ClipLoader } from "react-spinners";

export default function IndexRoute() {

    //const favoritePlaylists = getFavoritePlaylists();
    const [favoritePlaylists, setFavoritePlaylists] = useState<IPlaylist[]>([])
    const [searchText, setSearchText] = useState("")
    const [searchedPlaylists, setsearchedPlaylists] = useState<IPlaylist[]>([]);
    const [isSearching, setIsSearching] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setIsSearching(true)
        getPlaylist(searchText).then(res => {
            setsearchedPlaylists(res)
            setIsSearching(false)
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
        <form className="pt-8 relative" onSubmit={handleSubmit}>
            <input autoComplete="off" type="search" id="search" name="search" placeholder="Search a playlist" value={searchText} onChange={(e) => setSearchText(e.target.value)}></input>
            <ClipLoader hidden={!isSearching} className="absolute right-3 top-10 w-80" color="#0ea5dd" />
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
                <p className="m-0">Search a playlist and Favorite it! <MdFavorite className="text-red-500 inline" size={"1.2rem"} /></p>
            }
        </article>
        <Footer />
    </>
}