import React, { useContext } from 'react';
import StudentAuthContext from '../StudentContext/StudentAuthContext';

const S_profile = () => {
    const {student}= useContext(StudentAuthContext)
    const {email, phone , name, photoURL}=student;
    return (
        <div>
            <div className="flex justify-between gap-3">
                <div className="bg-[#FFF] p-5 border border-gray-200  rounded-lg w-full">
                    <h3 className="text-base font-medium mb-5">Personal details</h3>
                    <div className="text-sm font-base">
                        <div className="flex justify-start items-center mb-3">
                            <p className="w-36">Name:</p>
                            <p></p>
                            <p>{name}</p>
                        </div>
                        <div className="flex justify-start items-center mb-3">
                            <p className="w-36">Contact:</p>
                            <p className="">{phone}</p>
                        </div>
                        <div className="flex justify-start items-center mb-3">
                            <p className="w-36">Email:</p>
                            <p>{email}</p>
                        </div>
                        <div className="flex justify-start items-center ">
                            <p className="w-36">Password:</p>
                            <p>********</p>
                        </div>

                    </div>
                </div>
                <div className="w-1/4 bg-[#FFF] p-5 border border-gray-200 rounded-lg">
                    <div className="flex justify-center items-center">
                        <img className="w-24 h-24 rounded-full" src={photoURL} alt="" />
                    </div>
                    <p className="text-center text-blue-400 underline mt-5">change profile</p>
                </div>
            </div>



            {/* bio */}
            <div className="flex justify-between gap-3">
                <div className="bg-[#FFF] w-full p-5 border border-gray-200  rounded-lg mt-5">
                    <h3 className="text-base font-medium mb-2">Bio</h3>
                    <p className="text-sm font-base text-justify">Lörem ipsum sara dialören därför att bokstav
                        teran är neostik laskapet autonöpuktig kroliga. Vapossade självka rantän pompekunskap carpa.
                        Lörem ipsum sara dialören därför att bokstav teran är
                        neostik laskapet autonöpuktig kroliga. Vapossade självka rantän pompekunskap carpa.
                        Lörem ipsum sara dialören därför att bokstav teran är neostik laskapet autonöpuktig
                        kroliga. Vapossade självka rantän pompekunskap carpa.  </p>
                </div>
                
            </div>

        </div>
    );
};

export default S_profile;