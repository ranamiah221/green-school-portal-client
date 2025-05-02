import axios from "axios";
import { useEffect, useState } from "react";

const ShowNotice = () => {
    const [notices, setNotices]=useState([]);
    console.log(notices);
    useEffect(()=>{
        axios.get('http://localhost:8000/notices')
        .then(res=>setNotices(res.data))
    },[])
    return (
        <div className="bg-[#F0F1F3] w-1/2 rounded-lg p-5">
        <h3 className="text-xl font-medium mb-5">Remainders</h3>
        {
            notices.map(notice=><div className="w-full text-justify" key={notice._id} notice={notice}>
                    <p className="text-base font-medium p-2 text-center text-white bg-amber-400 w-28 rounded-lg mb-3">{notice?.date}</p>
                    <p className="text-sm font-light">{notice?.description}</p>
                    <div className="divider divider-info mb-5"></div>
                </div>
            )
        }
        </div>
        
    );
};

export default ShowNotice;