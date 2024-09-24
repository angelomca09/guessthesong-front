import { Link } from "react-router-dom";
import { IPlaylist } from "../interfaces/IPlaylist";
import Interrogation from "../assets/interrogation.png"

export function PlaylistCard({ playlist }: { playlist: IPlaylist }) {

    return <Link to={`playlist/${playlist.id}`}>
        <div title={playlist.title}>
            <div className="w-32 aspect-square border-2 border-slate-600 rounded-xl overflow-hidden" >
                <img className="w-32 aspect-square object-cover" src={playlist.cover || Interrogation} alt={playlist.title} />
            </div>
            <p className="w-32 text-center text-nowrap text-ellipsis overflow-hidden text-base p-0 m-0">{playlist.title}</p>
        </div>
    </Link>

}