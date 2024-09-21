import { Link } from "react-router-dom";
import { ICollection } from "../interfaces/ICollection";
import Interrogation from "../assets/interrogation.png"

export function CollectionCard({ collection }: { collection: ICollection }) {

    return <Link to={`collection/${collection.playlistId}`}>
        <div title={collection.name}>
            <div className="w-32 aspect-square border-2 border-slate-600 rounded-xl overflow-hidden" >
                <img className="w-32 aspect-square object-cover" src={collection.cover || Interrogation} alt={collection.name} />
            </div>
            <p className="w-32 text-center text-nowrap text-ellipsis overflow-hidden text-base p-0 m-0">{collection.name}</p>
        </div>
    </Link>

}