import { useContext, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { LuArrowUpDown } from "react-icons/lu";
import { RiDeleteBack2Line } from "react-icons/ri";
import AuthContext from "../../../context/AuthContext";

const CreateQuestion = ({ onSave }) => {
    const { user } = useContext(AuthContext)
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
        if (question && correctIndex !== null) {
        const onSave=({
                question,
                options,
                correctIndex,
            });
            console.log(onSave);
            setQuestion("");
            setOptions(["", "", "", ""]);
            setCorrectIndex(null);
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

            <form onSubmit={handleSubmit} className="p-4 border rounded">
                <h2 className="text-xl font-bold mb-2">Create Question</h2>
                <input
                    type="text"
                    placeholder="Enter question"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    className="border p-2 mb-2 w-full"
                    required
                />
                {options.map((opt, index) => (
                    <div key={index} className="flex items-center mb-2">
                        <input
                            type="text"
                            placeholder={`Option ${index + 1}`}
                            value={opt}
                            onChange={(e) => handleOptionChange(index, e.target.value)}
                            className="border p-2 mr-2 w-full"
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
                <button type="submit" className="bg-blue-500 text-white p-2 rounded">
                    Save Question
                </button>
            </form>

        </div>
    );
};

export default CreateQuestion;