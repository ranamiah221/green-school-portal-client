import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useTeachers = () => {
    const axiosSecure = useAxiosSecure();
    const {data: teachers=[], refetch}=useQuery({
        queryKey:['teachers'],
        queryFn: async()=>{
            const res = await axiosSecure('/teachers')
            return res.data
        }
    })
    return [teachers, refetch]
};

export default useTeachers;