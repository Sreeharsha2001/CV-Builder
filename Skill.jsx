import React from 'react'
import {useState} from 'react'
import '../App.css'

function Skill({skill, handleSkillChange, addSkill, saveSkillDetails}) {
    const [errors, setErrors] = useState([]);

    const validate = () => {
        const newErrors = skill.map((skillItem, index) => {
            const skillItemErrors = {};

            if (!skillItem.name.trim()) {
                skillItemErrors.name = 'Invalid format';
            }
            if (!skillItem.name1.trim()) {
                skillItemErrors.name1 = 'Invalid format';
            }
            if (!skillItem.name2.trim()) {
                skillItemErrors.name2 = 'Invalid format';
            }
            return skillItemErrors;
        });

        setErrors(newErrors);
        return newErrors.every((skillItemErrors) => Object.keys(skillItemErrors).length === 0);
    };

    const handleSave = () => {
        if (validate()) {
            saveSkillDetails(skill);
        }
    };

    return (
        <div>
            <h2>Skill</h2>
            {skill.map((skillItem,index)=>(
                <div key={index} >
                    {/* <h3>Technical Skills</h3> */}
                    <input className='Skill'
                        type='text'
                        name='name'
                        placeholder='Technical Skills' 
                        value={skillItem.name}
                        onChange={(e)=> handleSkillChange(e,index)}
                    />
                    {errors[index] && errors[index].name && <p className="error">{errors[index].name}</p>}

                    {/* <h3>Soft Skills</h3> */}
                    <input className='Skill'
                        type='text'
                        name='name1'
                        placeholder='Soft Skills' required
                        value={skillItem.name1}
                        onChange={(e)=> handleSkillChange(e,index)}
                    />
                    {errors[index] && errors[index].name1 && <p className="error">{errors[index].name1}</p>}

                    {/* <h3>Languages</h3> */}
                    <input className='Skill'
                        type='text'
                        name='name2'
                        placeholder='Languages' required
                        value={skillItem.name2}
                        onChange={(e)=> handleSkillChange(e,index)}
                    />
                    {errors[index] && errors[index].name2 && <p className="error">{errors[index].name2}</p>}
                </div> 
                
            ))}
            <button className='Bn' onClick={addSkill}>add</button>    
            <button className='Bn' onClick={handleSave}>save</button>
        </div>
    );
}

export default Skill










































































































































































































































































//import React from 'react';

// const Skills = ({ cvData, setCVData }) => {
//     const handleSkillsChange = (e) => {
//         const { name, value } = e.target;
//         setCVData(prevData => ({
//             ...prevData,
//             skills: {
//                 ...prevData.skills,
//                 [name]: value
//             }
//         }));
//     };

//     const saveSkillDetails = () => {
        
//     };

//     return (
//         <div>
//             <h2>Skills</h2>
//             <input
//                 type="text"
//                 name="technicalSkills"
//                 value={cvData.skills.technicalSkills || ''}
//                 onChange={handleSkillsChange}
//                 placeholder="Technical Skills"
//             />
//             <input
//                 type="text"
//                 name="softSkills"
//                 value={cvData.skills.softSkills || ''}
//                 onChange={handleSkillsChange}
//                 placeholder="Soft Skills"
//             />
//             <input
//                 type="text"
//                 name="languages"
//                 value={cvData.skills.languages || ''}
//                 onChange={handleSkillsChange}
//                 placeholder="Languages"
//             />
//         </div>
//     );
// };

// export default Skills;
