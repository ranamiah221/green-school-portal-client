
import { useEffect, useState } from "react";
import useNotice from "../../hooks/useNotice";
import S_N from "./S_N";
import axios from "axios";

const ShowNotice = () => {
    const [notices, setNotices] = useState([])
    console.log(notices.length);
    // console.log(notices);
    
    useEffect(()=>{
        axios('http://localhost:8000/notices')
        .then(res=>setNotices(res.data))
    },[])
    return (
        <div close={true} className="bg-[#F0F1F3] w-1/2 rounded-lg p-5">
            <h3 className="text-xl font-medium mb-5">Remainders</h3>
            {
                notices?.map(notice => <S_N key={notice._id} notice={notice}></S_N>)
            }
        </div>

    );
};

export default ShowNotice;