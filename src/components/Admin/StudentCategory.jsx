import { useEffect, useState } from "react";
import { PieChart, Pie, Sector, Cell } from "recharts";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const COLORS = ["#0088FE", "#00C49F"];

const StudentCategory = () => {
    const [students, setStudents] = useState([]);
    let countMale=0;
    let countFemale=0;
    let sum = 0;
    const axiosSecure = useAxiosSecure();
    useEffect(() => {
        axiosSecure.get('/students')
            .then(res => {
                const studentData = res.data;
                const fakeStudentData = studentData?.map(student => {
                    if (student.gender == "Male") {
                        sum = countMale +=1;
                        console.log(countMale);
                        const obj = {
                            value: sum,
                        }
                        return obj;
                    }
                    else if(student.gender =='Female'){
                        sum = countFemale +=1;
                        console.log(countFemale);
                        const obj = {
                            value: sum,

                        }
                        return obj;
                    }

                })
                setStudents(fakeStudentData)

            })
    }, [])
return (
    <>
        <PieChart width={400} height={300}>
            <Pie
                data={students}
                cx={120}
                cy={200}
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
            >
                {students?.map((student, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
            </Pie>
        </PieChart>
    </>
);
};

export default StudentCategory;