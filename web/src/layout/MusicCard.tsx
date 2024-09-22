import { useState } from "react";
import { ITrack } from "../interfaces/ITrack";

export function MusicCard({ track, answered, isCorrect, onClick }: { track: ITrack, answered: boolean, isCorrect: boolean, onClick?: Function }) {

    const [isSelected, setIsSelected] = useState(false)

    const answeredClass = answered ? "!cursor-not-allowed" : "";

    const isSelectedClass = isSelected ? "border-4" : "";

    const isCorrectClass = isCorrect ? "border-green-400" : "border-red-500";

    return <div title={track.title} className={`w-32  pb-6 ${answeredClass}`}>
        <button className={`outline secondary w-fit p-0 border-2 rounded-lg overflow-hidden m-0  ${isSelectedClass} ${isSelected ? isCorrectClass : ""}`}
            disabled={answered} onClick={() => { onClick && onClick(); setIsSelected(true) }}>
            <img className="w-32" src={track.cover} alt={track.album} />
        </button>
        <p className=" text-center text-nowrap text-ellipsis overflow-hidden text-base p-0 m-0">{track.title}</p>
    </div>
}