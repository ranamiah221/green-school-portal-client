
import {
    PieChart, Pie, Cell, ResponsiveContainer, Legend
} from "recharts";

const data = [
    { name: "Female", value: 2 },
    { name: "Male", value: 3 }
];

const COLORS = ["#3b82f6", "#ef4444"];

const StudentCategory = () => {

    return (
        <>
            <div className="p-4 bg-white rounded-xl shadow-md w-full max-w-xs">
                <h2 className="text-lg font-semibold mb-2">Students</h2>
                <ResponsiveContainer width="100%" height={200}>
                    <PieChart>
                        <Pie
                            data={data}
                            dataKey="value"
                            innerRadius={60}
                            outerRadius={80}
                            startAngle={90}
                            endAngle={-270}
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index]} />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
                <div className="flex justify-around mt-4 text-sm">
                    <div className="text-blue-600">Female: 2</div>
                    <div className="text-red-500">Male: 3</div>
                </div>
            </div>
        </>
    );
};

export default StudentCategory;