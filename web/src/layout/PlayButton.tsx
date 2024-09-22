import { useEffect, useRef, useState } from "react"
import { FaPlay, FaPause } from "react-icons/fa"

export function PlayButton({ url }: { url: string }) {

    const audioTag = useRef(null)

    const [isPlaying, setIsPlaying] = useState(false)

    const handleClick = () => {
        setIsPlaying(current => !current)
        if (isPlaying) {
            (audioTag.current as any)?.pause();
            (audioTag.current as any)?.load();
        }
        else {
            (audioTag.current as any)?.play();
        }
    }

    useEffect(() => {
      const volume = 0.05; // TODO: make it configurable
      (audioTag.current as any).volume = volume;
    }, [])

    return <button className="w-fit rounded-full aspect-square" onClick={handleClick}>
        {isPlaying ? <FaPause /> : <FaPlay />}
        <audio ref={audioTag} className="hidden" src={url} onEnded={() => setIsPlaying(false)}></audio>
    </button>
}