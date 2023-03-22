import { useEffect, useState } from "react"

// 현재 누르고 있는 키
const usePersonControl = () => {
    const keys = {
        KeyW: 'forward',
        KeyS: 'backward',
        KeyA: 'left',
        KeyD: 'right',
        Space: 'jump',
        KeyQ: 'leftRotate',
        KeyE: 'rightRotate'
    }

    const moveFieldByKey = (key) => keys[key]

    const [movement, setMovement] = useState({
        forward: false,
        backward: false,
        left: false,
        right: false,
        jump: false,
    })

    useEffect(() => {
        const handleKeyDown = (e) => {
            setMovement(movement => ({ ...movement, [moveFieldByKey(e.code)]: true }));
        }
        const handleKeyUp = (e) => {
            setMovement(movement => ({ ...movement, [moveFieldByKey(e.code)]: false }));
        }
        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('keyup', handleKeyUp);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('keyup', handleKeyUp);
        }
    }, [])

    return movement
}

export default usePersonControl;