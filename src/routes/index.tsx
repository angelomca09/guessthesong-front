import { PlaylistCard } from "../layout/PlaylistCard";
import { getFavoritePlaylists } from "../ts/playlist-base";

export default function IndexRoute() {

    const favoritePlaylists = getFavoritePlaylists();

    return <>
        <h3>Favorites</h3>
        <article className="flex gap-8">
            {!!favoritePlaylists.length && favoritePlaylists.map(playlist => (
                <PlaylistCard playlist={playlist} />
            ))}
        </article>
        <br />
        
    </>
}