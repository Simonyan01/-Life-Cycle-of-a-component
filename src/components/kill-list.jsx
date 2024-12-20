import { KillItem } from "./kill-item";

export const KillList = ({ killed, onRestore, calculateDuration }) => {
    return (
        <div className="overflow-x-auto rounded-lg">
            <table className="min-w-full bg-white border border-gray-300 shadow">
                <thead className="bg-gray-200 text-gray-700">
                    <tr>
                        <th className="px-4 py-2 text-left font-medium">Id</th>
                        <th className="px-4 py-2 text-left font-medium">Time Start</th>
                        <th className="px-4 py-2 text-left font-medium">Time End</th>
                        <th className="px-4 py-2 text-left font-medium">Overall Duration</th>
                        <th className="px-4 py-2 text-left font-medium">Actions</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                    {
                        killed.map((item) => (
                            <KillItem
                                key={item.id}
                                onRestore={onRestore}
                                calculateDuration={calculateDuration}
                                {...item}
                            />
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};
