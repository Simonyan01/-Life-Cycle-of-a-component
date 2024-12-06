import { Timer } from '@components/timer';
import { useState } from 'react';

const App = () => {
  const [showTimer, setShowTimer] = useState(false);

  const handleCreate = () => setShowTimer(true);
  const handleDelete = () => setShowTimer(false);

  return (
    <section className="flex flex-col tracking-wide select-none bg-sdr-gradient items-center justify-center h-screen">
      <button
        onClick={handleCreate}
        disabled={showTimer}
        className={`px-6 py-3 mb-6 text-white text-lg font-semibold rounded-lg shadow-lg 
          ${showTimer ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'}`
        }
      >
        Create
      </button>
      {showTimer && <Timer onDelete={handleDelete} />}
    </section>
  );
};

export default App;
