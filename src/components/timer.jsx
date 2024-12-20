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
    const [isActive, setIsActive] = useState(true)
    const [intervalId, setIntervalId] = useState(null)

    const handlePause = () => setIsActive(false)
    const handleContinue = () => setIsActive(true)
    const handleDelete = () => {
        clearInterval(intervalId)
        onDelete()
    }

    useEffect(() => {
        if (isActive) {
            const interval = setInterval(() => {
                setTime(({ minutes, seconds }) => {
                    seconds -= 1
                    if (seconds < 0) {
                        seconds = 59
                        minutes = minutes === 0 ? 59 : minutes - 1
                    }
                    return { minutes, seconds }
                })
            }, 1000)

            setIntervalId(interval)
            return () => clearInterval(interval)
        }
    }, [isActive])

    return (
        <section className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
            <div className="text-4xl font-bold mb-4 text-gray-800">
                {String(time.minutes).padStart(2, '0')}:{String(time.seconds).padStart(2, '0')}
            </div>
            <div className="space-x-4 space-y-3">
                <button
                    onClick={handlePause}
                    disabled={!isActive}
                    className={`px-4 py-2 rounded-lg text-white font-semibold 
                        ${!isActive ? 'bg-gray-400 cursor-not-allowed' : 'bg-orange-400 hover:bg-orange-500'}`
                    }
                >
                    Pause
                </button>
                <button
                    onClick={handleContinue}
                    disabled={isActive}
                    className={`px-4 py-2 rounded-lg text-white font-semibold 
                        ${isActive ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-500 hover:bg-green-600'}`
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
