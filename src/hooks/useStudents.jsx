import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useStudents = () => {
    const axiosSecure = useAxiosSecure();
    const {data: students=[], refetch}=useQuery({
        queryKey:['students'],
        queryFn: async ()=>{
            const res = await axiosSecure('students')
            return res.data
        }
    })
    
    return [students]
};

export default useStudents;