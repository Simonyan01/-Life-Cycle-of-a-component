import { useState, useEffect } from "react"

const timeData = () => {
    const now = new Date()
    return {
        minutes: now.getMinutes(),
        seconds: now.getSeconds(),
    }
}

export const Timer = ({ onDelete }) => {
    const [time, setTime] = useState(timeData)
    const [isPaused, setIsPaused] = useState(false)
    const [intervalId, setIntervalId] = useState(null)

    const handlePause = () => setIsPaused(true)
    const handleContinue = () => setIsPaused(false)
    const handleDelete = () => {
        clearInterval(intervalId)
        onDelete()
    }

    useEffect(() => {
        const interval = setInterval(() => {
            if (!isPaused) {
                setTime(({ minutes, seconds }) => {
                    seconds -= 1
                    if (seconds < 0) {
                        seconds = 59
                        minutes = minutes === 0 ? 59 : minutes - 1
                    }
                    return { minutes, seconds }
                })
            }
        }, 1000)

        setIntervalId(interval)
        return () => clearInterval(interval)
    }, [isPaused])

    return (
        <section className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
            <div className="text-4xl font-bold mb-4 text-gray-800">
                {String(time.minutes).padStart(2, '0')}:{String(time.seconds).padStart(2, '0')}
            </div>
            <div className="space-x-4">
                <button
                    onClick={handlePause}
                    disabled={isPaused}
                    className={`px-4 py-2 rounded-lg text-white font-semibold 
                        ${isPaused ? 'bg-gray-400 cursor-not-allowed' : 'bg-orange-500 hover:bg-orange-400'}`
                    }
                >
                    Pause
                </button>
                <button
                    onClick={handleContinue}
                    disabled={!isPaused}
                    className={`px-4 py-2 rounded-lg text-white font-semibold 
                        ${!isPaused ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-500 hover:bg-green-600'}`
                    }
                >
                    Continue
                </button>
                <button
                    onClick={handleDelete}
                    className="px-4 py-2 rounded-lg bg-red-500 hover:bg-red-600 text-white font-semibold"
                >
                    Delete
                </button>
            </div>
        </section>
    )
}
