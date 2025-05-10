import React, { PureComponent } from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import useStudents from '../../hooks/useStudents';

export const testResults = [
  { name: 'A grade', value: 1, color: '#D953A3' },
  { name: 'B grade', value: 0, color: '#3F8B8B' },
  { name: 'C grade', value: 2, color: '#F76C5E' },
  { name: 'D grade', value: 1, color: '#64E8A6' },
  { name: 'Failing', value: 1, color: '#F7E44E' }
];

export const attendance = {
  attended: 4,
  notAttended: 1
};



const StudentStatistic = () => {
  const {students}=useStudents();
  return (
    <div className="p-6 bg-white rounded-xl shadow-lg max-w-xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">Recent test results</h2>

      <div className="flex items-center">
        <PieChart width={300} height={300}>
          <Pie
            data={testResults}
            cx="50%"
            cy="50%"
            outerRadius={100}
            dataKey="value"
            label={({ name }) => name}
          >
            {testResults.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip formatter={(value, name) => [`${value} students`, name]} />
        </PieChart>

        <div className="ml-8 space-y-2">
          {testResults.map((entry, idx) => (
            <div key={idx} className="flex items-center space-x-2">
              <span className="w-4 h-4 rounded-full" style={{ background: entry.color }}></span>
              <span>{entry.value} students</span>
              <span className="text-gray-500 text-sm">(19% {entry.name})</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex justify-between text-center text-sm">
        <div>
          <span className="text-xl font-bold">{attendance.attended}</span><br />
          Students attended the test
        </div>
        <div>
          <span className="text-xl font-bold">{attendance.notAttended}</span><br />
          Students didn’t attend the test
        </div>
      </div>
    </div>

  );
};

export default StudentStatistic;