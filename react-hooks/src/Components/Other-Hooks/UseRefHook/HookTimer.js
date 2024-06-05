import React, { useEffect, useRef, useState } from "react"
/**
 * A functional component that displays a timer and provides a button to clear the interval.
 *
 * @return {JSX.Element} A React component that displays a timer and a button to clear the interval.
 */
function HookTimer() {
    const [timer, setTimer] = useState(0)
    const intervalRef = useRef()
    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setTimer(prevTimer => prevTimer + 1)
        }, 1000)
        return () => {
            clearInterval(intervalRef.current)
        };
    }, [])
    return (
        <div>HookTimer -{timer}
            <button onClick={clearInterval(intervalRef.current)}>Clear Interval</button></div>
    )
}
export default HookTimer