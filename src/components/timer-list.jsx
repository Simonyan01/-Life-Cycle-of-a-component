import { Timer } from "./timer";

export const TimerList = ({ timers, onDelete }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {timers.map((timer) => (
                <Timer
                    key={timer.id}
                    onDelete={() => onDelete(timer.id)}
                    className="bg-white shadow-md p-4 rounded-lg border border-gray-200"
                />
            ))}
        </div>
    );
};
