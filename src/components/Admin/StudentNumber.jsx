
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  Cell
} from "recharts";

const data = [
  { month: "February 2025", amount: 50000, color: "#22c55e" },
  { month: "March 2025", amount: 70000, color: "#3b82f6" },
  { month: "April 2025", amount: 55000, color: "#ef4444" }
];
const StudentNumber = () => {

  return (
     <div className="p-4 bg-white rounded-xl shadow-md w-full max-w-xs">
    <h2 className="text-lg font-semibold mb-2">Expenses</h2>
    <ResponsiveContainer width="100%" height={230}>
      <BarChart data={data}>
        <XAxis dataKey="month" hide />
        <YAxis />
        <Tooltip />
        <Bar dataKey="amount" radius={[6, 6, 0, 0]} isAnimationActive>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  </div>
  );
};

export default StudentNumber;