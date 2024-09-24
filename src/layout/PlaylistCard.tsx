import { Link } from "react-router-dom";
import { IPlaylist } from "../interfaces/IPlaylist";
import Interrogation from "../assets/interrogation.png"
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { useState } from "react";

export function PlaylistCard({ playlist, isFavorite, onFavoriteClick }: { playlist: IPlaylist, onFavoriteClick: Function, isFavorite: boolean }) {

    const [isFavoriteHovered, setIsFavoriteHovered] = useState(false);

    function showFavoriteIcon(isHovered: boolean, isFav: boolean) {
        if (isHovered && isFav) return <MdFavoriteBorder size={"1.5rem"} />;
        if (isHovered && !isFav) return <MdFavorite className="text-red-500" size={"1.5rem"} />;
        if (!isHovered && isFav) return <MdFavorite className="text-red-500" size={"1.5rem"} />;
        if (!isHovered && !isFav) return <MdFavoriteBorder size={"1.5rem"} />;
    }

    return <div className="relative" title={playlist.title}>
        <Link to={`playlist/${playlist.id}`}>
            <div className="w-32 aspect-square border-2 border-slate-600 rounded-xl overflow-hidden" >
                <img className="w-32 aspect-square object-cover" src={playlist.cover || Interrogation} alt={playlist.title} />
            </div>
        </Link>
        <p className="w-32 text-center text-nowrap text-ellipsis overflow-hidden text-base p-0 m-0">{playlist.title}</p>
        <button className="absolute top-2 right-2 outline text-white w-8 aspect-square rounded-full p-0 flex justify-center items-center border-2 border-white outline-0"
            onMouseEnter={() => setIsFavoriteHovered(true)} onMouseLeave={() => setIsFavoriteHovered(false)} onClick={() => onFavoriteClick()}>
            {showFavoriteIcon(isFavoriteHovered, isFavorite)}
        </button>
    </div >


}