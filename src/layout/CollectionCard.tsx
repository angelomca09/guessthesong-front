import { Link } from "react-router-dom";
import { IPlaylist } from "../interfaces/IPlaylist";
import Interrogation from "../assets/interrogation.png"

export function CollectionCard({ collection }: { collection: IPlaylist }) {

    return <Link to={`collection/${collection.id}`}>
        <div title={collection.title}>
            <div className="w-32 aspect-square border-2 border-slate-600 rounded-xl overflow-hidden" >
                <img className="w-32 aspect-square object-cover" src={collection.cover || Interrogation} alt={collection.title} />
            </div>
            <p className="w-32 text-center text-nowrap text-ellipsis overflow-hidden text-base p-0 m-0">{collection.title}</p>
        </div>
    </Link>

}