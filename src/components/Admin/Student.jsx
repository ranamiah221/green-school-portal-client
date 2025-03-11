import { useLoaderData } from "react-router-dom";


const Student = () => {
    const student = useLoaderData();
    const {name,gender, classes, birth, religion,addmission,fatherName,
        motherName, email,  fatherOccupation,  photoURL}=student;
    return (
        <div className="flex items-start gap-10">
            <img className="w-60 h-60 rounded-full" src={photoURL} alt="" />
            <div>
                  <h2 className="text-xl font-medium text-blue-500 ">{name}</h2>
                  <p className="mb-5">{name} is a bright and hardworking student in class {classes}. He is eager 
                    to learn new things and always puts effort into his studies. With a 
                    curious mind and a positive attitude, he enjoys exploring different 
                    subjects and actively participates in school activities. {name} is also
                     a friendly and helpful classmate, making him well-liked among his peers.</p>
                   <div className="space-y-1">
                      <div className="flex items-center justify-between">
                          <p className="w-48 text-base font-medium">Name :</p> 
                          <p className="w-full">{name}</p>
                      </div>
                      <div className="flex items-center justify-between">
                          <p className="w-48 text-base font-medium">Gender :</p> 
                          <p className="w-full">{gender}</p>
                      </div>
                      <div className="flex items-center justify-between">
                          <p className="w-48 text-base font-medium">Father Name :</p> 
                          <p className="w-full">{fatherName}</p>
                      </div>
                      <div className="flex items-center justify-between">
                          <p className="w-48 text-base font-medium">Mother Name :</p> 
                          <p className="w-full">{motherName}</p>
                      </div>
                      <div className="flex items-center justify-between">
                          <p className="w-48 text-base font-medium">Date of Birth :</p> 
                          <p className="w-full">{birth}</p>
                      </div>
                      <div className="flex items-center justify-between">
                          <p className="w-48 text-base font-medium">Religion :</p> 
                          <p className="w-full">{religion}</p>
                      </div>
                      <div className="flex items-center justify-between">
                          <p className="w-48 text-base font-medium">Father Occupation :</p> 
                          <p className="w-full">{fatherOccupation}</p>
                      </div>
                      <div className="flex items-center justify-between">
                          <p className="w-48 text-base font-medium">Email :</p> 
                          <p className="w-full">{email}</p>
                      </div>
                      <div className="flex items-center justify-between">
                          <p className="w-48 text-base font-medium">Addmission date:</p> 
                          <p className="w-full">{addmission}</p>
                      </div>
                  
                   </div>
                   

            </div>
        </div>
    );
};

export default Student;