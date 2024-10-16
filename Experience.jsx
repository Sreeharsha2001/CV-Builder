import '../App.css'
import React, {useState} from 'react'

function Experience({experience, handleExperienceChange, addExperience, saveExperienceDetails}) {
    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = experience.map((experienceItem, index) => {
            const experienceItemErrors = {};
            const currentDate = new Date();
            const currentDateISO = currentDate.toISOString().split('T')[0];
            const technology=new Date(experienceItem.technology);
            const duration=new Date(experienceItem.duration);
            // if(experienceItem.technology && experienceItem.duration && technology>=duration && duration<=technology){
            //     experienceItemErrors.technology='Joining<Leaving';
            //     experienceItemErrors.duration='Leaving>Joining';
            // }
            if(index===0){
                if(experienceItem.duration && duration && experienceItem.technology && technology >= currentDate && duration> currentDate && technology>=duration && duration<=technology){
                    experienceItemErrors.technology='Invalid format'
                    experienceItemErrors.duration='Invalid format'
                }
            }else
            {
                const prevExperienceItem = experience[index-1];
                
                const prevTechnology = new Date(prevExperienceItem.technology);
                const prevDuration = new Date(prevExperienceItem.duration);

                if(experience.technology && experience.duration && technology>=prevTechnology && duration>=prevTechnology && technology>=duration && duration<=technology){
                    experienceItemErrors.technology = 'Invalid format';
                    experienceItemErrors.duration='Invalid format'
                }
            }
            // if(technology>=duration){
            //     experienceItemErrors.technology = 'Joining<Leaving';
            //     experienceItemErrors.duration='Leaving>Joining';
            // }
            // if(index===0){
            //     if(duration>currentDate){
            //         experienceItemErrors.duration='Leaving!>current date';
            //     }
            // } else{
            //     const prevTechnology=new Date(experience[index-1].technology);
            //     const prevDuration = new Date(experience[index-1].duration);

            //     if(technology >= prevTechnology || duration >= prevDuration){
            //         experienceItemErrors.technology = 'Joining<previous-entry-Joining';
            //         experienceItemErrors.duration = 'Leaving<previous-entry-Leaving';
            //     }
            // }

            if (!experienceItem.company.trim()) {
                experienceItemErrors.company = 'Please fill out this field';
            }
            if (!experienceItem.role.trim()) {
                experienceItemErrors.role = 'Please fill out this field';
            }
            if (!experienceItem.technology.trim()) {
                experienceItemErrors.technology = 'Please fill out this field';
            }
            if (!experienceItem.duration.trim()) {
                experienceItemErrors.duration = 'Please fill out this field';
            }
            if (!experienceItem.description.trim()) {
                experienceItemErrors.description = 'Please fill out this field';
            }
            if (!experienceItem.description1.trim()) {
                experienceItemErrors.description1 = 'Please fill out this field';
            }
            if (!experienceItem.description2.trim()) {
                experienceItemErrors.description2 = 'Please fill out this field';
            }

            // if (!/^(\d{2})-(\d{2})-(20(?:1[9-9]|2[0-4]))$/.test(edu.passedOutYear)) {
            //     eduErrors.passedOutYear = 'Invalid format';
            // }
            return experienceItemErrors;
        });

        setErrors(newErrors);
        return newErrors.every((experienceItemErrors) => Object.keys(experienceItemErrors).length === 0);
    };

    const handleSave = () => {
        if (validate()) {
            saveExperienceDetails(experience)
        }
    };

    // const disabled=()=>{
    //     if(addExperience.length===0){
    //         addExperience.disabled=true;
    //     }
    // }
    // useEffect(()=>{

    // },[experience])

    // const prevExp=cvData;
    //     // console.log("prevExp",prevExp)
    //     const result=cvData.experience.map(each=>{
    //         if(!each){
    //             return false;
    //         }
    //     })
    //     console.log(result);
    //     if(count===0){
    //         setCVData((prevData)=>({
    //             ...prevData,
    //             experience:[
    //                 ...prevData.experience, {company:'', role:'', technology:'', duration:'', description:'', description1:'',description2:''},
    //             ],
    //         }));
    //         count++;
    //     }
    //     if(result===undefined){
    //         setCVData((prevData)=>({
    //             ...prevData,
    //             experience:[
    //                 ...prevData.experience, {company:'', role:'', technology:'', duration:'', description:'', description1:'',description2:''},
    //             ],
    //         }));
    //     }
    // console.log("experience",experience)
    // let count = experience.length;
    // console.log("length",count)
    // let result=true ;
    // for(let i=0;i<count;i++){
    //     Object.entries(experience[i]).map(each=>{
    //         if(!each){
    //             result = false;
    //         }
    //     })
    // }
    // console.log("result",experience.duration)

    return (
        <div>
            <h2>Experience</h2>
            {experience.map((experienceItem, index)=>(
                <div key={index} className='Exp'>
                    <input className='Pers'
                        type='text'
                        name='company'
                        placeholder='Company Name'
                        value={experienceItem.company}
                        onChange={(e)=> handleExperienceChange(e, index)}
                    />
                    {errors[index] && errors[index].company && <p className="error">{errors[index].company}</p>}
                    <input className='Pers'
                        type='text'
                        name="role"
                        placeholder='Location'
                        value={experienceItem.role}
                        onChange={(e)=> handleExperienceChange(e, index)}
                    />
                    {errors[index] && errors[index].role && <p className="error">{errors[index].role}</p>}
                    <input className=' year-style'
                        type='date'
                        name='technology'
                        placeholder='Joining'
                        value={experienceItem.technology}
                        onChange={(e)=> handleExperienceChange(e, index)}
                    />
                    {errors[index] && errors[index].technology && <p className="error">{errors[index].technology}</p>}
                    <br/>  
                    <input className=' year-style'
                        type='date'
                        name='duration'
                        placeholder='Leaving'
                        value={experienceItem.duration}
                        onChange={(e)=> handleExperienceChange(e, index)}
                    />
                    {errors[index] && errors[index].duration && <p className="error">{errors[index].duration}</p>}
                    <input className='Pers'
                        type='text'
                        name='description'
                        placeholder='Description'
                        value={experienceItem.description}
                        onChange={(e)=> handleExperienceChange(e, index)}
                    />
                    {errors[index] && errors[index].description && <p className="error">{errors[index].description}</p>}
                    <input className='Pers'
                        type='text'
                        name='description1'
                        placeholder='Description'
                        value={experienceItem.description1}
                        onChange={(e)=> handleExperienceChange(e, index)}
                    />
                    {errors[index] && errors[index].description1 && <p className="error">{errors[index].description1}</p>}
                    <input className='Pers'
                        type='text'
                        name='description2'
                        placeholder='Description'
                        value={experienceItem.description2}
                        onChange={(e)=> handleExperienceChange(e, index)}
                    />
                    {errors[index] && errors[index].description2 && <p className="error">{errors[index].description2}</p>}
                </div>
            ))}
            <button className='Bn'  onClick={addExperience}>add</button>
            <button className='Bn' onClick={handleSave}>save</button>
        </div>
    );
    
}

export default Experience


































































































































































































































































//import React from 'react';

// const Experience = ({ cvData, setCVData, saveValidExperienceDetails }) => {
//     const handleExperienceChange = (e, index) => {
//         const { name, value } = e.target;
//         const newExperience = [...cvData.experience];
//         newExperience[index][name] = value;
//         setCVData(prevData => ({
//             ...prevData,
//             experience: newExperience
//         }));
//     };

//     const addExperience = () => {
//         if (cvData.experience.length === 0 || saveValidExperienceDetails(cvData.experience.length - 1)) {
//             setCVData(prevData => ({
//                 ...prevData,
//                 experience: [
//                     ...prevData.experience,
//                     { company: '', role: '', technology: '', duration: '', description: '', description1: '', description2: '' }
//                 ]
//             }));
//         } else {
//             alert('Please fill and save the current entry before adding a new one.');
//         }
//     };

//     const saveExperienceEntry = (index) => {
//         if (saveValidExperienceDetails(index)) {
            
//         } else {
//             alert('Please fill all fields before saving.');
//         }
//     };

//     return (
//         <div>
//             <button onClick={addExperience}>Add</button>
//             {cvData.experience.map((experienceItem, index) => (
//                 <div key={index} className='Exp'>
//                     <input className='Pers'
//                         type='text'
//                         name='company'
//                         placeholder='Company Name'
//                         value={experienceItem.company}
//                         onChange={(e)=> handleExperienceChange(e, index)}
//                     />
                                    
//                     <input className='Pers'
//                         type='text'
//                         name="role"
//                         placeholder='Location'
//                         value={experienceItem.role}
//                         onChange={(e)=> handleExperienceChange(e, index)}
//                     />
                    
//                     <input className=' year-style'
//                         type='date'
//                         name='technology'
//                         placeholder='Joining'
//                         value={experienceItem.technology}
//                         onChange={(e)=> handleExperienceChange(e, index)}
//                     />
                                   
//                     <br/>  
//                     <input className=' year-style'
//                         type='date'
//                         name='duration'
//                         placeholder='Leaving'
//                         value={experienceItem.duration}
//                         onChange={(e)=> handleExperienceChange(e, index)}
//                     />
                                   
//                     <input className='Pers'
//                         type='text'
//                         name='description'
//                         placeholder='Description'
//                         value={experienceItem.description}
//                         onChange={(e)=> handleExperienceChange(e, index)}
//                     />
                                    
//                     <input className='Pers'
//                         type='text'
//                         name='description1'
//                         placeholder='Description'
//                         value={experienceItem.description1}
//                         onChange={(e)=> handleExperienceChange(e, index)}
//                     />
                                   
//                     <input className='Pers'
//                         type='text'
//                         name='description2'
//                         placeholder='Description'
//                         value={experienceItem.description2}
//                         onChange={(e)=> handleExperienceChange(e, index)}
//                     />
//                     <button onClick={() => saveExperienceEntry(index)}>Save</button>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default Experience;