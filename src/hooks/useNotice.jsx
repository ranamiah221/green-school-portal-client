import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useNotice = () => {
    const axiosSecure = useAxiosSecure();
    const {data: notices=[], refetch}=useQuery({
        queryKey:['notices'],
        queryFn: async ()=>{
            const res = await axiosSecure('/notices')
            return res.data
        }
    })
    
    return [notices, refetch]
};

export default useNotice;