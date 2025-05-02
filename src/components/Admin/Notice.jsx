import React from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const Notice = () => {
    const axiosSecure =useAxiosSecure()
    const handleNotice=(e)=>{
        e.preventDefault();
        const form = e.target;
        const date = form.date.value;
        const headline = form.headline.value;
        const description = form.description.value;

        const notice = {date, headline, description}
        
        axiosSecure.post('/notices', notice)
        .then(res=>{
            if(res.data.insertedId){
                Swal.fire("New notice added successfully.");
                form.reset();
            }
        })
    }
    return (
        <div>
            <h2 className='text-2xl font-medium'>Write a new notice</h2>
            <form onSubmit={handleNotice} className="m-2">
                <fieldset className="fieldset">
                    <label className="label">Date</label>
                    <input type="date" name='date' className="input" placeholder="Date"  />
                    <label className="label">Headline</label>
                    <input type="text" name='headline' className="input" placeholder="Headline" />
                    <label className="label">Write A Description</label>
                    <textarea  name='description' className="textarea " placeholder="Description"></textarea>
                    <button type='submit' className="btn mt-4 w-20 bg-blue-900 text-white">Submit</button>
                </fieldset>
            </form>
        </div>
    );
};

export default Notice;

