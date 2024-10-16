import React from 'react'
import {useState} from 'react'
import '../App.css'

function Project({project, handleProjectChange, addProject, saveProjectDetails}) {
    const [errors, setErrors] = useState([]);

    const validate = () => {
        const newErrors = project.map((projectItem, index) => {
            const projectItemErrors = {};

            if (!/^[0-9]/.test(projectItem.duration)) {
                projectItemErrors.duration = 'Invalid format';
            }
            return projectItemErrors;
        });

        setErrors(newErrors);
        return newErrors.every((projectItemErrors) => Object.keys(projectItemErrors).length === 0);
    };

    const handleSave = () => {
        if (validate()) {
            saveProjectDetails(project);
        }
    };
    
    return (
        <div>
            <h2>Project</h2>
            {project.map((projectItem, index)=>(
                <div key={index} className='Pro'>
                    <input required className='Pers'
                        type='text'
                        name='name'
                        placeholder='Name'
                        value={projectItem.name}
                        onChange={(e)=> handleProjectChange(e, index)}
                    />
                    <input required className='Pers'
                        type='text'
                        name='duration'
                        placeholder='Duration'
                        value={projectItem.duration}
                        onChange={(e)=> handleProjectChange(e, index)}
                    />
                    {errors[index] && errors[index].duration && <p className="error">{errors[index].duration}</p>}
                    <input required className='Pers'
                        type='text'
                        name='technology'
                        placeholder='Technology'
                        value={projectItem.technology}
                        onChange={(e)=> handleProjectChange(e, index)}
                    />
                    <input required className='Pers'
                        type='text'
                        name='description'
                        placeholder='Description'
                        value={projectItem.description}
                        onChange={(e)=> handleProjectChange(e, index)}
                    />
                </div>
            ))}
            <button  className='Bn' onClick={addProject}>add</button>
            <button className='Bn' onClick={handleSave}>save</button>
        </div>
    );
}

export default Project
