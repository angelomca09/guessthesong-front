import { useLoaderData, useParams } from "react-router-dom";
import { getGameByPlaylistId } from "../api"
import { IGameContent } from "../interfaces/IGameContent";
import { MusicCard } from "../layout/MusicCard";
import { PlayButton } from "../layout/PlayButton";
import { useEffect, useRef, useState } from "react";
import { ReplayButton } from "../layout/ReplayButton";
import { BeatLoader } from "react-spinners";

export const gamesLoader = async ({ params }: any) => {
    const games = await getGameByPlaylistId(params.playlistId)
    return { games };
}

const ISANSWERED_INITIAL_STATE = [false, false, false] // Length = 3

export default function CollectionRoute() {
    const { games } = useLoaderData() as { games: IGameContent[] }
    const { playlistId } = useParams()

    const [currentSrc, setCurrentSrc] = useState("")
    const [currentGames, setCurrentGames] = useState<IGameContent[]>([])
    const [isAnswered, setIsAnswered] = useState(ISANSWERED_INITIAL_STATE)
    const [isLoaderVisible, setIsLoaderVisible] = useState(true)

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

    const handleReplayClick = () => {

        (audioTag.current as any)?.pause();
        (audioTag.current as any)?.load();
        setCurrentGames([])
        setIsLoaderVisible(true);
        setTimeout(() => {
            getGameByPlaylistId(playlistId!).then(res => {
            setCurrentGames(res)
            setIsAnswered(ISANSWERED_INITIAL_STATE)
            setIsLoaderVisible(false)
        })
        }, 1000);
        
    }

    const allAnswered = isAnswered.every(a => a);

    useEffect(() => {
        setIsLoaderVisible(false);
        setCurrentGames(games);
    }, [])

    useEffect(() => {
        const volume = 0.05; // TODO: make it configurable
        console.log(audioTag)
        if (audioTag.current)
            (audioTag.current as any).volume = volume;
    }, [audioTag])

    return <>
        <div className="flex flex-row justify-evenly" >
            <audio ref={audioTag} className="hidden" onEnded={() => { handleChange("") }}></audio>
            <BeatLoader hidden={!isLoaderVisible} className="absolute inset-x-1/2 inset-y-1/2 w-80" color="#0ea5dd" />
            {!!currentGames.length && currentGames.map((game, game_index) => {
                const { answer, preview, tracks } = game

                const chooseMusicAsOption = () => {
                    //TODO: if mobile, show confirmation Modal

                    const nextIsAnswered = isAnswered.map((b, i) => i === game_index ? true : b)
                    setIsAnswered(nextIsAnswered);
                }

                const isGameAnswered = isAnswered[game_index]

                return (<article key={game_index} className="w-fit flex flex-col items-center select-none">
                    <PlayButton isPlaying={currentSrc === preview} handleClick={() => handleChange(preview)} />
                    <div>
                        {!!tracks.length && tracks.map((track, track_index) => (
                            <MusicCard key={track_index} track={track} isAnswered={isGameAnswered} isCorrect={answer === track_index}
                                onClick={() => !isGameAnswered && chooseMusicAsOption()} />
                        ))}
                    </div>
                </article>)
            }
            )}
        </div>

        <ReplayButton isVisible={allAnswered && !isLoaderVisible} handleClick={handleReplayClick} />
    </>
}