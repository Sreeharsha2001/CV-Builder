import React, { useState } from 'react';
import '../App.css';

function Education(props) {
    const { education, handleEducationChange, addEducation, saveEducationDetails} = props
    const [errors, setErrors] = useState([]);

    const validate = () => {
        const newErrors = education.map((edu, index) => {
            const eduErrors = {};
            const currentDate = new Date().toISOString().split('T')[0];
            if (!edu.qualification.trim()) {
                eduErrors.qualification = 'Please fill out this field';
            }
            if (!edu.specialization.trim()) {
                eduErrors.specialization = 'Please fill out this field';
            }
            if (!edu.clg.trim()) {
                eduErrors.clg = 'Please fill out this field';
            }
            if (!edu.cgpa.trim()) {
                eduErrors.cgpa = 'Please fill out this field';
            }
            if (!edu.passedOutYear.trim()) {
                eduErrors.passedOutYear = 'Please fill out this field';
            } else{
                
                if(index===0 && edu.passedOutYear > currentDate){
                    eduErrors.passedOutYear = 'Invalid format';
                }
                if(index>0 && edu.passedOutYear >= education[index-1].passedOutYear){
                    eduErrors.passedOutYear= 'Invalid format'
                }
            }

            // if (!/^(\d{2})-(\d{2})-(20(?:1[9-9]|2[0-4]))$/.test(edu.passedOutYear)) {
            //     eduErrors.passedOutYear = 'Invalid format';
            // }
            return eduErrors;
        });

        setErrors(newErrors);
        return newErrors.every((eduErrors) => Object.keys(eduErrors).length === 0);
    };

    const handleSave = () => {
        if (validate()) {
            saveEducationDetails(education)
        }
    };

    return (
        <div>
            <h2>Education</h2>
            {education.map((edu, index) => (
                <div key={index} >
                    <input  className='Pers'
                        type="text"
                        name="qualification"
                        placeholder="University Name" required
                        value={edu.qualification}
                        onChange={(e) => handleEducationChange(e, index)} 
                    />
                    {errors[index] && errors[index].qualification && <p className="error">{errors[index].qualification}</p>}
                    <input  className='Pers'
                        type="text"
                        name="specialization"
                        placeholder="Location"
                        value={edu.specialization}
                        onChange={(e) => handleEducationChange(e, index)}
                    />
                    {errors[index] && errors[index].specialization && <p className="error">{errors[index].specialization}</p>}
                    <input  className='Pers'
                        type="text"
                        name="clg"
                        placeholder="Degree"
                        value={edu.clg}
                        onChange={(e) => handleEducationChange(e, index)}
                    />
                    {errors[index] && errors[index].clg && <p className="error">{errors[index].clg}</p>}
                    <input  className='Pers'
                        type="text"
                        name="cgpa"
                        placeholder="Major"
                        value={edu.cgpa}
                        onChange={(e) => handleEducationChange(e, index)}
                    />
                    {errors[index] && errors[index].cgpa && <p className="error">{errors[index].cgpa}</p>}

                    <input  className=' year-style'
                        type="date"
                        name="passedOutYear"
                        placeholder="Year"
                        value={edu.passedOutYear}
                        onChange={(e) => handleEducationChange(e, index)}
                    />
                    {errors[index] && errors[index].passedOutYear && <p className="error">{errors[index].passedOutYear}</p>}
                </div>
            ))}
            <button  className='Bn'  onClick={addEducation} >add</button>
            <button className='Bn' onClick={handleSave} >save</button>
        </div>
    );
}

export default Education;



















































































































































































































































































































//import React from 'react';

// const Education = ({ cvData, setCVData, saveValidEducationDetails }) => {
//     const handleEducationChange = (e, index) => {
//         const { name, value } = e.target;
//         const newEducation = [...cvData.education];
//         newEducation[index][name] = value;
//         setCVData(prevData => ({
//             ...prevData,
//             education: newEducation
//         }));
//     };

//     const addEducation = () => {
//         if (cvData.education.length === 0 || saveValidEducationDetails(cvData.education.length - 1)) {
//             setCVData(prevData => ({
//                 ...prevData,
//                 education: [
//                     ...prevData.education,
//                     { university: '', location: '', degree: '', major: '', passedOutYear: '' }
//                 ]
//             }));
//         } else {
//             alert('Please fill and save the current entry before adding a new one.');
//         }
//     };

//     const saveEducationEntry = (index) => {
//         if (saveValidEducationDetails(index)) {
            
//         } else {
//             alert('Please fill all fields before saving.');
//         }
//     };

//     return (
//         <div>
//             <button onClick={addEducation}>Add</button>
//             {cvData.education.map((edu, index) => (
//                 <div key={index}>
//                     <input className='Pers'
//                         type="text"
//                         name="university"
//                         value={edu.university}
//                         onChange={(e) => handleEducationChange(e, index)}
//                         placeholder="University"
//                     />
//                     <input className='Pers'
//                         type="text"
//                         name="location"
//                         value={edu.location}
//                         onChange={(e) => handleEducationChange(e, index)}
//                         placeholder="Location"
//                     />
//                     <input className='Pers'
//                         type="text"
//                         name="degree"
//                         value={edu.degree}
//                         onChange={(e) => handleEducationChange(e, index)}
//                         placeholder="Degree"
//                     />
//                     <input className='Pers'
//                         type="text"
//                         name="major"
//                         value={edu.major}
//                         onChange={(e) => handleEducationChange(e, index)}
//                         placeholder="Major"
//                     />
//                     <input className='year-style'
//                         type="date"
//                         name="passedOutYear"
//                         value={edu.passedOutYear}
//                         onChange={(e) => handleEducationChange(e, index)}
//                         placeholder="PassedOutYear"
//                     />
//                     <button onClick={() => saveEducationEntry(index)}>Save</button>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default Education;