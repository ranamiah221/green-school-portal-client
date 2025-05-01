import { useContext, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { LuArrowUpDown } from "react-icons/lu";
import { RiDeleteBack2Line } from "react-icons/ri";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { toast } from "react-toastify";

const CreateQuestion = () => {
    const axiosSecure = useAxiosSecure();
    const [question, setQuestion] = useState("");
    const [options, setOptions] = useState(["", "", "", ""]);
    const [correctIndex, setCorrectIndex] = useState(null);

    const handleOptionChange = (index, value) => {
        const newOptions = [...options];
        newOptions[index] = value;
        setOptions(newOptions);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const classes = e.target.classes.value;
        if (question && correctIndex !== null) {
            const onSave = ({
                question,
                options,
                correctIndex,
                classes
            });
            
            setQuestion("");
            setOptions(["", "", "", ""]);
            setCorrectIndex(null);
            axiosSecure.post('/questions', onSave)
            .then(res => {
                if(res.data.insertedId){
                    toast("question added successfully!") 
                }
            })
            .catch(err=>{
                console.log(err);
            })
        };

    }
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

            <form onSubmit={handleSubmit} className="p-4 rounded">
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold mb-2">Create Question</h2>
                    <div className="flex justify-between items-center gap-5">
                        <p className="text-base font-medium">Class</p>
                        <select name='classes' defaultValue="6" className="select">
                            <option value={'6'}>Six</option>
                            <option value={'7'}>Saven</option>
                            <option value={'8'}>Eight</option>
                            <option value={'9'}>Nine</option>
                            <option value={'10'}>Ten</option>
                        </select>
                    </div>
                </div>
                <input
                    type="text"
                    placeholder="Enter question"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    className="bg-[#F0EEED] rounded-lg mt-2 p-2 mb-2 w-full"
                    required
                />
                {options.map((opt, index) => (
                    <div key={index} className="flex items-center mb-2">
                        <input
                            type="text"
                            placeholder={`Option ${index + 1}`}
                            value={opt}
                            onChange={(e) => handleOptionChange(index, e.target.value)}
                            className="bg-[#F0EEED] rounded-lg p-2 mr-2 w-full"
                            required
                        />
                        <input
                            type="radio"
                            name="correct"
                            checked={correctIndex === index}
                            onChange={() => setCorrectIndex(index)}
                        />
                        <span className="ml-1">Correct</span>
                    </div>
                ))}
                <button type="submit" className="bg-[#14238A] text-white p-2 rounded">
                    Save and add another
                </button>
            </form>

        </div>
    );
};

export default CreateQuestion;