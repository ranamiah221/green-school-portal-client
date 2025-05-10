import CalendarComponent from "../Admin/CalendarComponent";
import ShowNotice from "../Admin/ShowNotice";
import StudentStatistic from "./StudentStatistic";


const T_Home = () => {
    return (
        <div>
            <StudentStatistic></StudentStatistic>
             <div className="className='mt-10 flex justify-start  items-start gap-10 mt-10">
            <ShowNotice></ShowNotice>
            <CalendarComponent></CalendarComponent>
           </div>
        </div>
    );
};

export default T_Home;