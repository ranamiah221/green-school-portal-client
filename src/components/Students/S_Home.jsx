
import CalendarComponent from "../Admin/CalendarComponent";
import ShowNotice from "../Admin/ShowNotice";
import AvgReportChart from "./AvgReportChart";


const S_Home = () => {
    return (
        <div>
           <AvgReportChart></AvgReportChart>
           <div className="className='mt-10 flex justify-start  items-start gap-10 mt-10">
            <ShowNotice></ShowNotice>
            <CalendarComponent></CalendarComponent>
           </div>
           
        </div>
    );
};

export default S_Home;