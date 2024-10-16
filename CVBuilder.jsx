import React, { useState } from 'react';
import '../App.css';
import PersonalDetails from './PersonalDetails';
import Education from './Education';
import Preview from './Preview';
import Experience from './Experience';
import Project from './Project';
import Certification from './Certification';
import Skill from './Skill';
import Signature from './Signature';


function CVBuilder({ cvData, setCVData }) {
    // const [validData, setValidData] = useState({ personalDetails: {}, experience:[], education: [],  project:[], certification:[], skill:[], signature:''});
    const [validData, setValidData] = useState({ personalDetails: {}, experience:[], education: [], skill:[]});
    const handlePersonalDetailsChange = (e) => {
        const { name, value } = e.target;
        setCVData((prevData) => ({
            ...prevData,
            personalDetails: { ...prevData.personalDetails, [name]: value },
        }));
    };
    
    // const handleImageUpload = (imageData) => {
    //     setCVData((prevData) => ({
    //         ...prevData,
    //         personalDetails: { ...prevData.personalDetails, image: imageData },
    //     }));
    // };

    const handleEducationChange = (e, index) => {
        const { name, value } = e.target;
        const newEducation = [...cvData.education];
        newEducation[index] = { ...newEducation[index], [name]: value };
        setCVData((prevData) => ({ ...prevData, education: newEducation }));
    };

    const addEducation = () => {
        const lastIndex = cvData.education.length-1;
        console.log('res',cvData.education[lastIndex])
       
        let checking = true;
        if(cvData.education.length>0){
            const istrue = Object.entries(cvData.education[lastIndex]).filter(each =>{
                if(each[1]===''){
                    // return false;
                    checking=false;
                }
                console.log("ojhg", each)
                console.log("qaw",each[1])
            } )
            
            console.log("ess",istrue)
        }
        console.log("pok", checking)

        if(cvData.education.length===0 || checking){
            setCVData((prevData)=>({
                ...prevData,
                education:[
                    ...prevData.education, {qualification:'', specialization:'', clg:'', cgpa:'', passedOutYear:''},
                    ],
                }));
        }
        // setCVData((prevData) => ({
        //     ...prevData,
        //     education: [
        //         ...prevData.education,
        //         { qualification: '', specialization: '', clg: '', cgpa: '', passedOutYear: '' },
        //     ],
        // }));
    };

    const handleExperienceChange = (e, index)=>{
        const {name, value} = e.target;
        const newExperience=[...cvData.experience];
        newExperience[index]={...newExperience[index], [name]:value};
        setCVData((prevData)=>({...prevData, experience:newExperience}));
    };
    
    const addExperience=()=>{
        const lastIndex = cvData.experience.length-1;
        // console.log('res',cvData.experience[lastIndex])
       
        let checking = true;
        if(cvData.experience.length>0){
            const istrue = Object.entries(cvData.experience[lastIndex]).filter(each =>{
                if(each[1]===''){
                    // return false;
                    checking=false;
                }
                // console.log("ojhg", each)
                // console.log("qaw",each[1])
            } )
            
            //console.log("ess",istrue)
        }
        //console.log("pok", checking)

        if(cvData.experience.length===0 || checking){
            setCVData((prevData)=>({
                ...prevData,
                experience:[
                    ...prevData.experience, {company:'', role:'', technology:'', duration:'', description:'', description1:'',description2:''},
                    ],
                }));
        }
    }
    //    console.log('res',cvData.experience)
    //    const  ahr = cvData.experience[cvData.experience.length-1]
    //    console.log('bes',ahr)
    //    if(cvData.experience.length===0){
    //         setCVData((prevData)=>({
    //             ...prevData,
    //             experience:[
    //                 ...prevData.experience, {company:'', role:'', technology:'', duration:'', description:'', description1:'',description2:''},
    //             ],
    //         }))
    //    }
    //    console.log('res',cvData.experience)

    //    if(ahr===cvData.experience) {
        
    //         setCVData((prevData)=>({
    //             ...prevData,
    //             experience:[
    //                 ...prevData.experience, {company:'', role:'', technology:'', duration:'', description:'', description1:'',description2:''},
    //             ],
    //         }))
    //     }
    

        // if(cvData.experience.length>0){
        //     if(cvData.experience.validate()){
        //         setCVData((prevData)=>({
        //         ...prevData,
        //         experience:[
        //             ...prevData.experience, {company:'', role:'', technology:'', duration:'', description:'', description1:'',description2:''},
        //             ],
        //         }));
        //         addExperience();
        //     }
            
            
            
        
        
            // setCVData((prevData)=>({
            //     ...prevData,
            //     experience:[
            //         ...prevData.experience, {company:'', role:'', technology:'', duration:'', description:'', description1:'',description2:''},
            //     ],
            // }));   
    

    // const handleProjectChange=(e, index)=>{
    //     const {name, value} = e.target;
    //     const newProject=[...cvData.project];
    //     newProject[index]={...newProject[index], [name]:value};
    //     setCVData((prevData)=>({...prevData, project:newProject}));
    // };
    // const addProject=()=>{
    //     setCVData((prevData)=>({
    //         ...prevData,
    //         project:[
    //             ...prevData.project, {name:'', duration:'',technology:'',description:''},
    //         ],
    //     }));
    // };

    // const handleCertificationChange=(e, index)=>{
    //     const {name, value}=e.target;
    //     const newCertification=[...cvData.certification];
    //     newCertification[index]={...newCertification[index], [name]:value};
    //     setCVData((prevData)=>({...prevData, certification:newCertification}));
    // };
    // const addCertification=()=>{
    //     setCVData((prevData)=>({
    //         ...prevData,
    //         certification:[
    //             ...prevData.certification, {name:'', issued:'', done:'', description:''},
    //         ],
    //     }));
    // };

    const handleSkillChange=(e, index)=>{
        const {name, value}=e.target;
        const newSkill=[...cvData.skill];
        newSkill[index]={...newSkill[index], [name]:value};
        setCVData((prevData)=>({...prevData, skill:newSkill}));
    };
  
    const addSkill=()=>{
        //const cr=cvData.skill.length-1
        // console.log("cr",cr)
        if(cvData.skill.length===0){
            setCVData((prevData)=>({
                ...prevData,
                skill:[
                    ...prevData.skill, {name:'', name1:'', name2:''},
                ],
            }));
         
        }
        // if(cvData.skill===saveValidSkillDetails(cr))
        // console.log('cv',cr)
        // console.log('ty',cvData.skill)
        // console.log("gy",saveValidSkillDetails)
        // {
        //     setCVData((prevData)=>({
        //         ...prevData,
        //         skill:[
        //             ...prevData.skill, {name:'', name1:'', name2:''},
        //         ],
        //     }));
        // }
    };

    // const handleSignatureChange = (e) => {
    //     setCVData((prevData) => ({
    //         ...prevData,
    //         signature: e
    //     }));
    // };

    const saveValidPersonalDetails = (validatedData) => {
        setValidData((prevData) => ({
            ...prevData,
            personalDetails: validatedData
        }));
    };

    const saveValidEducationDetails = (validatedData) => {
        setValidData((prevData) => ({
            ...prevData,
            education: validatedData
        }));
    };

    const saveValidExperienceDetails = (validatedData)=>{
        // const entry = validatedData[index];
        // const {company, role, technology, duration, ddescription, description1, description2}=entry;
        // const har = validatedData[validatedData.index];
        // const sha=validatedData.length[1]
        // console.log("res",har)
        // console.log("bes",validatedData)
        
        // const lastIndex = cvData.education.length-1;
        // if(cvData.experience.length===0 || validate(lastIndex)){
            setValidData((prevData)=>({
                ...prevData,
                experience: validatedData
            }));
        // }  
        //     // console.log("edx",validData)
        //     console.log("tfv",validatedData)
        //     console.log("ees",sha)
        //     // console.log("sha",sha)
        // }
        
    };

    // const saveValidProjectDetails=(validatedData)=>{
    //     setValidData((prevData)=>({
    //         ...prevData,
    //         project:validatedData
    //     }));
    // };

    // const saveValidCertificationDetails=(validatedData)=>{
    //     setValidData((prevData)=>({
    //         ...prevData,
    //         certification:validatedData
    //     }));
    // };

    const saveValidSkillDetails=(validatedData)=>{
        setValidData((prevData)=>({
            ...prevData,
            skill:validatedData
        }));
    };

    // const saveValidSignatureDetails=(validatedData)=>{
    //     setValidData((prevData)=>({
    //         ...prevData,
    //         signature:{name:validatedData}
    //     }));
    // };

    return (
        <div className="cv-builder-container">
            <div className="form-container">
                <h1>RESUME</h1>
                <PersonalDetails 
                    personalDetails={cvData.personalDetails}
                    handlePersonalDetailsChange={handlePersonalDetailsChange}
                    // handleImageUpload={handleImageUpload}
                    savePersonalDetails={saveValidPersonalDetails}
                />

                <Education 
                    education={cvData.education}
                    handleEducationChange={handleEducationChange}
                    addEducation={addEducation}
                    saveEducationDetails={saveValidEducationDetails}
                />

                <Experience 
                    experience={cvData.experience}
                    handleExperienceChange={handleExperienceChange}
                    addExperience={addExperience}
                    saveExperienceDetails={saveValidExperienceDetails}
                />

                {/* <Project className="Up"
                    project={cvData.project}
                    handleProjectChange={handleProjectChange}
                    addProject={addProject}
                    saveProjectDetails={saveValidProjectDetails}
                />

                <Certification className="Up"
                    certification={cvData.certification}
                    handleCertificationChange={handleCertificationChange}
                    addCertification={addCertification}
                    saveCertificationDetails={saveValidCertificationDetails}
                /> */}

                <Skill 
                    skill={cvData.skill}
                    handleSkillChange={handleSkillChange}
                    addSkill={addSkill}
                    saveSkillDetails={saveValidSkillDetails}
                />

                {/* <Signature className="Up"
                    signature={cvData.signature}
                    handleSignatureChange={handleSignatureChange}
                    saveSignatureDetails={saveValidSignatureDetails}
                /> */}
            </div>
            <div className="preview-container">
                <Preview cvData={validData} />
            </div>
        </div>
    );
}

export default CVBuilder

















































































































































































































































//import React, { useState } from 'react';
// import PersonalDetails from './PersonalDetails';
// import Education from './Education';
// import Experience from './Experience';
// import Skills from './Skill';
// import Preview from './Preview';

// const CvBuilder = () => {
//     const [cvData, setCVData] = useState({
//         personalDetails: {},
//         education: [],
//         experience: [],
//         skills: {}
//     });
//     const [showPreview, setShowPreview] = useState(false);
//     const [currentStep, setCurrentStep]=useState('personalDetails');

//     const saveValidExperienceDetails = (index) => {
//         const entry = cvData.experience[index];
//         if(entry){
//             const { company, role, technology, duration, description, description1, description2 } = entry;
//             if (
//                 !company?.trim() === '' ||
//                 !role?.trim() === '' ||
//                 !technology?.trim() === '' ||
//                 !duration?.trim() === '' ||
//                 !description?.trim() === '' ||
//                 !description1?.trim() === '' ||
//                 !description2?.trim() === ''
//             ) {
//                 alert('Please fill all fields before saving.');
//                 return false;
//             } else {
//                 alert('Experience entry saved.');
//                 return true;
//             }
//         }
//         return false;
//     };

//     const saveValidEducationDetails = (index) => {
//         const entry = cvData.education[index];
//         if(entry){
//             const { qualification, specialization, clg, cgpa, passedOutYear } = entry;
//             if (
//                 !qualification?.trim() === '' ||
//                 !specialization?.trim() === '' ||
//                 !clg?.trim() === '' ||
//                 !cgpa?.trim() === '' ||
//                 !passedOutYear?.trim() === ''
//             ) {
//                 alert('Please fill all fields before saving.');
//                 return false;
//             } else {
//                 alert('Education entry saved.');
//                 return true;
//             }
//         }
//         return false;
//     };

//     const saveValidSkillDetails = () => {
//         const { technicalSkills, softSkills, languages } = cvData.skills;
//         if (
//             !technicalSkills?.trim() === '' ||
//             !softSkills?.trim() === '' ||
//             !languages?.trim() === ''
//         ) {
//             alert('Please fill all fields before saving.');
//             return false;
//         } else {
//             alert('Skills entry saved.');
//             return true;
//         }
//     };

//     const saveValidPersonalDetails=()=>{
//         const { name, email, phone, address, summary } = cvData.personalDetails;
//         if(!name.trim()===''||!email.trim()===''||!phone.trim()===''||!address.trim()===''||!summary.trim()===''){
//             alert('Please fill all fields before saving.');
//             return false;
//         }   else{
//             alert('Personal details saved.');
//             return true;
//         }
//     };

//     const handleNextStep=()=>{
//         if(currentStep==='personalDetails'&& saveValidPersonalDetails()){
//             setCurrentStep('education');
//         } else if(currentStep === 'education'&& saveValidEducationDetails(cvData.education.length-1)){
//             setCurrentStep('experience');
//         } else if(currentStep==='experience'&& saveValidExperienceDetails(cvData.experience.length-1)){
//             setCurrentStep('skills');
//         }
//     };

//     // const handleGenerateClick = () => {
//     //     if (saveValidSkillDetails()) {
//     //         setShowPreview(true);
//     //     }
//     // };

//     return (
//         <div className='cv-builder-container'>
//             <h1>Resume</h1>
//             {!showPreview ? (
//                 <div className='form-container'>
//                     {currentStep==='personalDetails'&&(
//                     <PersonalDetails cvData={cvData} setCVData={setCVData} /> 
//                     )}
//                     {currentStep==='education'&&(
//                     <Education 
//                         cvData={cvData} 
//                         setCVData={setCVData} 
//                         saveValidEducationDetails={saveValidEducationDetails} 
//                     /> 
//                     )}
//                     {currentStep==='experience'&&(
//                     <Experience 
//                         cvData={cvData} 
//                         setCVData={setCVData} 
//                         saveValidExperienceDetails={saveValidExperienceDetails} 
//                     /> 
//                     )}
//                     {currentStep==='skills'&&(
//                     <Skills 
//                         cvData={cvData} 
//                         setCVData={setCVData} 
//                     /> 
//                     )}
//                     {/* <button onClick={handleGenerateClick}>Generate Resume</button> */}
//                 </div>
//             ) : (
//                 <div className='preview-container'>
//                     <Preview cvData={cvData} />
//                 </div>
//             )}
//         </div>
//     );
// };

// export default CvBuilder;