import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useSubject = () => {
    const axiosSecure=useAxiosSecure()
    const {data:subjects=[], refetch}=useQuery({
        queryKey:['subjects'],
        queryFn: async ()=>{
            const res = await axiosSecure('/subjects')
            return res.data
        }
    })

    return [subjects, refetch]
};

export default useSubject;