import { useLoaderData } from "react-router-dom";
import { getGameByPlaylistId } from "../api"
import { IGameContent } from "../interfaces/IGameContent";
import { MusicCard } from "../layout/MusicCard";
import { PlayButton } from "../layout/PlayButton";
import { useState } from "react";

export const gamesLoader = async ({ params }: any) => {
    const games = await getGameByPlaylistId(params.playlistId)
    return { games };
}

export function GameColumn({ game }: { game: IGameContent }) {

    const { answer, preview, tracks } = game

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
        <div className="w-fit flex flex-col items-center select-none">
            <PlayButton url={preview} />

            <div>
                {!!tracks.length && tracks.map((track, i) => (
                    <MusicCard key={i} track={track} answered={answered} isCorrect={answer === i} onClick={() => chooseMusicAsOption(i, answer)} />
                ))}
            </div>
        </div>
    )
}

export default function CollectionRoute() {
    const { games } = useLoaderData() as { games: IGameContent[] }

    return <>
        <div className="flex flex-row justify-evenly" >
            {!!games.length && games.map(game => <GameColumn game={game} />)}
        </div>

    </>
}