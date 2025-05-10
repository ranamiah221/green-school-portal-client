import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const data = [
  { name: "Quiz", score: 50 },
  { name: "Monthly test", score: 75 },
  { name: "Weekly tests", score: 20 },
  { name: "Questionnaires", score: 45 },
  { name: "Tests", score: 42 }
];

const AvgReportChart = () => {
  return (
    <div className="p-4 bg-white rounded-xl shadow-md w-full max-w-3xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Avg report</h2>
        <span className="text-sm font-medium text-gray-500">
          <span className="text-black font-semibold">Yearly</span> Average report
        </span>
      </div>
      <ResponsiveContainer width="100%" height={250}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#f472b6" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#f472b6" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" tick={{ fontSize: 12 }} />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="score"
            stroke="#ec4899"
            strokeDasharray="3 3"
            fillOpacity={1}
            fill="url(#colorScore)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AvgReportChart;
