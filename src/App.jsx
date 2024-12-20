import { TimerList } from '@components/timer-list'
import { KillList } from '@components/kill-list'
import { data } from '@data/killed-timers'
import { useState } from 'react'

const App = () => {
  const [timers, setTimers] = useState([])
  const [killed, setKilled] = useState(data)
  const [idCounter, setIdCounter] = useState(data.length + 1);

  const handleCreate = () => {
    if (timers.length >= 3) return

    setIdCounter(idCounter + 1);
    setTimers([
      ...timers,
      { id: idCounter, timeStart: Date.now(), timeEnd: null }
    ])
  }

  const handleRemove = (id) => {
    setTimers(timers.filter(timer => {
      if (timer.id == id) {
        setKilled([...killed, { ...timer, timeEnd: new Date().toLocaleTimeString() }])
        return false
      }
      return timer
    }))
  }

  const handleRestore = (id) => {
    const restoredTimer = killed.find(timer => timer.id === id)
    if (restoredTimer) {
      setKilled(killed.filter(timer => timer.id !== id))
      setTimers([
        ...timers,
        { id: restoredTimer.id, timeStart: restoredTimer.timeStart, timeEnd: null }
      ])
    }
  }

  const calculateOverallDuration = () => {

  };

  return (
    <section className="flex flex-col tracking-wide select-none bg-sdr-gradient items-center justify-start pt-6 h-screen">
      <button
        onClick={handleCreate}
        className="px-6 py-3 mb-6 text-white text-lg font-semibold rounded-lg shadow-lg bg-blue-500 hover:bg-blue-600"
      >
        Create
      </button>
      <div className="w-full max-w-max space-y-6">
        <TimerList timers={timers} onDelete={handleRemove} />
        <KillList killed={killed} onRestore={handleRestore} calculateDuration={calculateOverallDuration} />
      </div>
    </section>
  )
}

export default App
