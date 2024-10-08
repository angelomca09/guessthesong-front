import { useState } from "react";
import { ITrack } from "../interfaces/ITrack";

export function MusicCard({ track, isAnswered, isCorrect, onClick }: { track: ITrack, isAnswered: boolean, isCorrect: boolean, onClick?: Function }) {

    const [isSelected, setIsSelected] = useState(false)

    const answeredClass = isAnswered ? "!cursor-default" : "hover:text-sky-500";

    const borderClass = `border-4 ${isCorrect ? "border-green-400" : "border-red-500"}`;

    return <div title={track.title} className={`group w-32  pb-6 ${answeredClass}`}>
        <button className={`outline secondary w-fit p-0 border-2 rounded-lg overflow-hidden m-0  ${(isSelected || (isAnswered && isCorrect)) && borderClass}`}
            disabled={isAnswered} onClick={() => { onClick && onClick(); setIsSelected(true) }}>
            <img className="w-32" src={track.cover} alt={track.album} />
        </button>
        <p className={`text-center text-nowrap text-ellipsis overflow-hidden text-base p-0 m-0 transition-colors ${!isAnswered && "group-hover:text-inherit"}`}>{track.title}</p>
    </div>
}