

const Subjects = () => {
    return (
        <div className="bg-[#F0F1F3] shadow-2xl rounded-lg px-5">
            <h1 className="text-2xl font-medium ">Add New Subjects</h1>
            <form className="grid grid-cols-4 gap-5 mt-5">
                <div>
                <label className="fieldset-label">Subject Name*</label>
                <input type="text" name="subject" className="input" placeholder="Subjects Name" />
                </div>
                <div>
                <label className="fieldset-label">Teacher*</label>
                <input type="text" name="teacher" className="input" placeholder="Teacher" />
                </div>
                <div>
                <label className="fieldset-label">Classes*</label>
                <input type="text" name="classes" className="input" placeholder="Classes" />
                </div>
                <div>
                <label className="fieldset-label">Days*</label>
                <input type="text" name="days" className="input" placeholder="Days" />
                </div>
                <div>
                <div className="mb-5">
                <button className='text-base font-medium bg-red-700 text-white p-2 rounded-lg mt-5 mr-5'>Save</button>
                <button className='text-base font-medium bg-purple-900 text-white p-2 rounded-lg mt-5'>Reset</button>
                </div>
                </div>
            </form>

        </div>
    );
};

export default Subjects;