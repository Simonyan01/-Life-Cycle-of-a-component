export const KillItem = ({ id, timeStart, timeEnd, overallDuration, calculateDuration, onRestore }) => {
    return (
        <tr className="odd:bg-gray-50 even:bg-white hover:bg-gray-100">
            <td className="px-4 py-2 text-gray-700 text-sm">{id}</td>
            <td className="px-4 py-2 text-gray-700 text-sm">{new Date(timeStart).toLocaleString()}</td>
            <td className="px-4 py-2 text-gray-700 text-sm">{timeEnd ? calculateDuration(timeStart, timeEnd) : 'N/A'}</td>
            <td className="px-4 py-2 text-gray-700 text-sm">{overallDuration ? overallDuration : 'N/A'}</td>
            <td className="px-4 py-2 text-gray-700 text-sm">
                <button
                    onClick={() => onRestore(id)}
                    className="bg-red-400 text-white py-1 px-3 rounded hover:bg-red-500 transition">
                    Restore
                </button>
            </td>
        </tr>
    );
};
