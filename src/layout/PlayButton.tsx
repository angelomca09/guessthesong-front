import { useEffect, useRef, useState } from "react"
import { FaPlay, FaPause } from "react-icons/fa"

export function PlayButton({ isPlaying, handleClick }: { isPlaying: boolean, handleClick: Function }) {

    return <button className="w-fit rounded-full aspect-square" onClick={() => handleClick()}>
        {isPlaying ? <FaPause /> : <FaPlay />}

    </button>
}