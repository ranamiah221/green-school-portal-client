
import useNotice from "../../hooks/useNotice";
import S_N from "./S_N";

const ShowNotice = () => {
    const [notices, refetch]=useNotice()
    // console.log(notices);
    // const async()=>{

    // }
    // useEffect(()=>{
    //     axios('green-school-portal-server.vercel.app/notices')
    //     .then(res=>setNotices(res.data))
    // },[])
    return (
        <div className="bg-[#F0F1F3] w-1/2 rounded-lg p-5">
        <h3 className="text-xl font-medium mb-5">Remainders</h3>
        {
            notices?.map(notice=> <S_N key={notice._id} notice={notice}></S_N>)
        }
        </div>
        
    );
};

export default ShowNotice;