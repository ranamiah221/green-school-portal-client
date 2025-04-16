import { FaEdit } from "react-icons/fa";
import { RiDeleteBack2Line } from "react-icons/ri";
import { LuArrowUpDown } from "react-icons/lu";
import { Link } from "react-router-dom";



const CreateNew = () => {
    return (
        <div className="border rounded-lg">
            <div className='bg-[#F0EEED] flex justify-between items-center rounded-lg p-2'>
                <h3 className="text-base font-normal">Page 1</h3>
                <div className="flex gap-2">
                    <LuArrowUpDown />
                    <FaEdit />
                    <RiDeleteBack2Line />
                </div>
            </div>

            <div className="flex justify-evenly m-10">
                <Link to='/create-questions'>
                <div className="w-72 text-center border-[#54BAB9] shadow-2xl p-5 rounded-lg">
                    <h3 className="text-base text-[#757575] font-normal">Create new</h3>
                    <h2 className="text-xl text-[#153462] font-bold">Add new questions</h2>
                </div>
                </Link>
                <div className="w-72 text-center border-[#54BAB9] shadow-2xl p-5 rounded-lg">
                    <h3 className="text-base text-[#757575] font-normal">Already created</h3>
                    <h2 className="text-xl text-[#153462] font-bold">Enter test name</h2>
                </div>
            </div>


        </div>
    );
};

export default CreateNew;