import { FaEdit } from "react-icons/fa";
import { LuArrowUpDown } from "react-icons/lu";
import { RiDeleteBack2Line } from "react-icons/ri";

const CreateQuestion = () => {
    return (
        <div>
            <div className='bg-[#F0EEED] flex justify-between items-center rounded-lg p-2'>
                <h3 className="text-base font-normal">Page 1</h3>
                <div className="flex gap-2">
                    <LuArrowUpDown />
                    <FaEdit />
                    <RiDeleteBack2Line />
                </div>
            </div>
            
        </div>
    );
};

export default CreateQuestion;