import axios from "axios";

const axiosSecure = axios.create({
    baseURL:'green-school-portal-server.vercel.app'
})
const useAxiosSecure = () => {
    return axiosSecure
};

export default useAxiosSecure;