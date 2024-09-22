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

export default function CollectionRoute() {
    const { games } = useLoaderData() as { games: IGameContent[] }

    const [currentSrc, setCurrentSrc] = useState("")
    const [isAnswered, setIsAnswered] = useState([false, false, false])

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

    useEffect(() => {
        //showReplayOtion
    
    }, [isAnswered])
    

    return <>
        <div className="flex flex-row justify-evenly" >
            <audio ref={audioTag} className="hidden" onEnded={() => { handleChange("") }}></audio>
            {!!games.length && games.map((game, game_index) => {
                const { answer, preview, tracks } = game

                const chooseMusicAsOption = (index: number) => {
                    //TODO: if mobile, show confirmation Modal

                    const nextIsAnswered = isAnswered.map((b, i) => i === game_index ? true : b)
                    setIsAnswered(nextIsAnswered);
                }

                return (<div key={game_index} className="w-fit flex flex-col items-center select-none">
                    <PlayButton isPlaying={currentSrc === preview} handleClick={() => handleChange(preview)} />
                    <div>
                        {!!tracks.length && tracks.map((track, track_index) => (
                            <MusicCard key={track_index} track={track} isAnswered={isAnswered[game_index]} isCorrect={answer === track_index}
                                onClick={() => chooseMusicAsOption(track_index)} />
                        ))}
                    </div>
                </div>)
            }
            )}
        </div>

    </>
}