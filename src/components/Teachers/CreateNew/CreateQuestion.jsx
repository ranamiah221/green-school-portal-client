import { useContext } from "react";
import { FaEdit } from "react-icons/fa";
import { LuArrowUpDown } from "react-icons/lu";
import { RiDeleteBack2Line } from "react-icons/ri";
import AuthContext from "../../../context/AuthContext";

const CreateQuestion = () => {
    const {user}=useContext(AuthContext)
    console.log(user);
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
            {/* Todo create post test.... */}
        </div>
    );
};

export default CreateQuestion;