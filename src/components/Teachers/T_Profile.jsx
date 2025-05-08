import { useContext } from "react";
import TeacherAuthContext from "../../TeacherContext/TeacherAuthContext";


const T_Profile = () => {
    const { teacher } = useContext(TeacherAuthContext)
    const { firstName = "*", lastName = "*", teacherPhone = "*", teacherEmail = "*", entry = "*", role = "*",
        teacherPhotoURL } = teacher;
    return (
        <div>
            <div className="flex justify-between gap-3">
                <div className="bg-[#FFF] p-5 border border-gray-200  rounded-lg w-full">
                    <h3 className="text-base font-medium mb-5">Personal details</h3>
                    <div className="text-sm font-base">
                        <div className="flex justify-start items-center mb-3">
                            <p className="w-36">Name:</p>
                            <p></p>
                            <p>{firstName} {lastName}</p>
                        </div>
                        <div className="flex justify-start items-center mb-3">
                            <p className="w-36">Contact:</p>
                            <p className="">{teacherPhone}</p>
                        </div>
                        <div className="flex justify-start items-center mb-3">
                            <p className="w-36">Email:</p>
                            <p>{teacherEmail}</p>
                        </div>
                        <div className="flex justify-start items-center ">
                            <p className="w-36">Password:</p>
                            <p>********</p>
                        </div>

                    </div>
                </div>
                <div className="w-1/4 bg-[#FFF] p-5 border border-gray-200 rounded-lg">
                    <div className="flex justify-center items-center">
                        <img className="w-24 h-24 rounded-full" src={teacherPhotoURL} alt="" />
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
            <div className="w-1/4 bg-[#FFF] p-5 border border-gray-200 rounded-lg mt-5">
                    <p className="text-base font-medium">Designation :</p>
                    <p>{role}</p>
                    <div className="mt-5">
                    <p className="text-base font-medium">Register:</p>
                    <p>{entry}</p>
                    </div>
                    
                </div>
            </div>

        </div>
    );
};

export default T_Profile;