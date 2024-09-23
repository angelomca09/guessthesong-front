import { FaUndoAlt } from "react-icons/fa"

export function ReplayButton({ isVisible, handleClick }: { isVisible: boolean, handleClick: Function }) {

    return isVisible ? <button className="absolute inset-x-3/4 inset-y-1/2 w-16 aspect-square rounded-full p-0 flex justify-center items-center" onClick={() => handleClick()}>
        <FaUndoAlt fontSize={"1.5rem"} />
    </button> : <></>
}