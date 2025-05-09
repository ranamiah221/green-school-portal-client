import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";


const useStudents = () => {
    const axiosSecure = useAxiosSecure();
    const {user}=useAuth()
    const {data: students=[], refetch}=useQuery({
        queryKey:['students'],
        queryFn: async ()=>{
            const res = await axiosSecure('/students')
            return res.data
        }
    })
    
    return [students,refetch]
};

export default useStudents;