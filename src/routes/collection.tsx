import { useLoaderData } from "react-router-dom";
import { getGameByPlaylistId } from "../api"
import { IGameContent } from "../interfaces/IGameContent";
import { MusicCard } from "../layout/MusicCard";
import { PlayButton } from "../layout/PlayButton";
import { useEffect, useRef, useState } from "react";

export const gamesLoader = async ({ params }: any) => {
    const games = await getGameByPlaylistId(params.playlistId)
    return { games };
}

export function GameColumn({ game }: { game: IGameContent }) {

    const { answer, tracks } = game

    const [answered, setAnswered] = useState(false)

    const chooseMusicAsOption = (index: number, answer: number) => {
        //TODO: if mobile, show confirmation Modal
        setAnswered(true);

        if (index !== answer) {
            //TODO: show WRONG
            console.log("WRONG")
        }
        else {
            //TODO: show CORRECT
            console.log("CORRECT")
        }
    }

    return (
        <div>
            {!!tracks.length && tracks.map((track, i) => (
                <MusicCard key={i} track={track} answered={answered} isCorrect={answer === i}
                    onClick={() => chooseMusicAsOption(i, answer)} />
            ))}
        </div>

    )
}

export default function CollectionRoute() {
    const { games } = useLoaderData() as { games: IGameContent[] }

    const [currentSrc, setCurrentSrc] = useState("")

    const audioTag = useRef(null)

    const handleChange = (newPreview: string) => {
        (audioTag.current as any)?.pause();
        (audioTag.current as any)?.load();

        if (newPreview === (audioTag.current as any).src || !newPreview) {
            (audioTag.current as any).src = ""
            setCurrentSrc("")
        }
        else {
            (audioTag.current as any).src = newPreview;
            (audioTag.current as any)?.play();
            setCurrentSrc(newPreview)
        }
    }

    useEffect(() => {
        const volume = 0.05; // TODO: make it configurable
        (audioTag.current as any).volume = volume;
    }, [])

    return <>
        <div className="flex flex-row justify-evenly" >
            <audio ref={audioTag} className="hidden" onEnded={() => { handleChange("") }}></audio>
            {!!games.length && games.map((game, i) => {
                const { preview } = game

                return (<div key={i} className="w-fit flex flex-col items-center select-none">
                    <PlayButton isPlaying={currentSrc === preview} handleClick={() => handleChange(preview)} />
                    <GameColumn game={game} />
                </div>)
            }
            )}
        </div>

    </>
}