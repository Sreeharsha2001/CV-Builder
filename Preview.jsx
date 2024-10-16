import React, {useState} from 'react';
import '../App.css';
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

function Preview({ cvData }) {
    const[showGenerateButton, setShowGenerateButton]=useState(true)
    const handleGeneratePDF = () => {
        setShowGenerateButton(false)
        const preview = document.getElementById('preview-container');

        html2canvas(preview).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a4');
            const imgWidth = 210;
            const pageHeight = 297;
            const fontSize = 25; 
            const imgHeight = (canvas.height * imgWidth) / canvas.width;
            let heightLeft = imgHeight;
            let position = 0;

            pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight, fontSize);
            heightLeft -= pageHeight;

            while (heightLeft >= 0) {
                position = heightLeft - imgHeight;
                pdf.addPage();
                pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
                heightLeft -= pageHeight;
            }

            pdf.save('resume.pdf');
            setShowGenerateButton(true)
        });
    };
    // let Month;
    // let Year;
    // let Mon;
    // if(cvData.experience.length>0){
    //     Mon=new Date(cvData.experience[0].duration).getMonth()
    //     Month=Mon+1;
    //     Year=new Date(cvData.experience[0].duration).getFullYear()
    //    // console.log("today-date", new Date())

    // }
    // console.log("today-date", new Date())
    // console.log("today-date", new Date().getMonth())

    if (!cvData || !cvData.personalDetails.name) {
        return <div className='No'>No Preview Available</div>;
    }
    return (
        <div className="Preview1">
        <div id='preview-container' className="Preview">
            
            <div>
            {/* <h2 className='resume-heading' ></h2> */}
            {/* <h3>PERSONAL DETAILS</h3> */}
            <div className='customize-PersonalDetails'>
                <div >
                    <pre className='Cen'> {cvData.personalDetails.name}<hr/> </pre>
                    <pre className='personal-details' > {cvData.personalDetails.email} | {cvData.personalDetails.phone} | {cvData.personalDetails.address}</pre>
                    <h3 className='resume-heading'>SUMMARY</h3>
                    <div className='summary-about'>
                        <p className='sum'> {cvData.personalDetails.summary}</p>
                    </div>
                    
                    {/* <pre className='personal-details' > {cvData.personalDetails.phone} | </pre>
                    <pre className='personal-details'> {cvData.personalDetails.address}</pre> */}
                </div>
                <div>
                    {/* {cvData.personalDetails.image && (
                        <div className='img'>
                            <img src={cvData.personalDetails.image} alt="img" width="100" height="100" />
                        </div>
                    )} */}
                </div>
            </div>

            {/* {cvData.personalDetails.image && (
                <div className='img'>
                    <img src={cvData.personalDetails.image} alt="img" width="100" height="100" />
                </div>
            )} */}
            {/* <p className='Cen'>Name: {cvData.personalDetails.name}</p>
            <p className='Cen'>Email: {cvData.personalDetails.email}</p>
            <p className='Cen'>Contact: {cvData.personalDetails.phone}</p>
            <p className='Cen'>Address: {cvData.personalDetails.address}</p> */}
            
            {/* <div><h3 className='resume-heading'>EDUCATION</h3>
            {cvData.education.length > 0 ? (
                
                <div className="section">
                <table className="preview-table">
                    <thead>
                        <tr>
                            <th>Qualification</th>
                            <th>Specialization</th>
                            <th>College</th>
                            <th>CGPA</th>
                            <th>Year</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cvData.education.map((edu, index) => (
                            <tr key={index}>
                                <td>{edu.qualification}</td>
                                <td>{edu.specialization}</td>
                                <td>{edu.clg}</td>
                                <td>{edu.cgpa}</td>
                                <td>{edu.passedOutYear}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            ) : (
                <p className='Pre'>No Education</p>
            )}
            </div> */}
            
            {/* {console.log("result",cvData)} */}
            <h3 className='resume-heading'>PROFESSIONAL EXPERIENCE</h3>
            
            {cvData?.experience.length>0?(
                cvData.experience.map((experienceItem, index)=>(
                    <div key={index}>
                        {index===0?
                        <div>
                            {/* <pre>Most Recent Job Title                                                        {Month}/{Year} - Present</pre> */}
                            <pre>Most Recent Job Title                                               {experienceItem.technology} - Present</pre>
                            <p className='company-role'>{experienceItem.company} / {experienceItem.role}</p>
                            {/* <p> {Month}/{Year} - Present</p> */}
                            {/* <p> {experience.duration}</p> */}
                            <div className='desc'> 
                                <li className='list'>{experienceItem.description}</li>
                                <li className='list'>{experienceItem.description1}</li>
                                <li className='list'>{experienceItem.description2}</li>
                            </div>
                        </div> :
                        <div>
                            {/* <pre>Previous Job Title                                                           {Month}/{Year} - {Month}/{Year}</pre> */}
                            <pre>Previous Job Title                                                  {experienceItem.technology} - {experienceItem.duration}</pre>
                            <p className='company-role'>{experienceItem.company} / {experienceItem.role}</p>
                            {/* <p> {Month}/{Year} - {Month}/{Year}</p> */}
                            {/* <p> {experience.duration}</p> */}
                            <li className='list'>{experienceItem.description}</li>
                            <li className='list'>{experienceItem.description1}</li>
                            <li className='list'>{experienceItem.description2}</li>
                        </div> }
                    </div>
                ))
            ):(
                <p className='Pre'>No Experience Details</p>
            )}

            <h3 className='resume-heading'>EDUCATION</h3>
            {cvData.education.length>0?(
                cvData.education.map((edu, index)=>(
                    <div key={index}>
                        <pre>{edu.qualification}, {edu.specialization}                                                                             {edu.passedOutYear}</pre>
                        {/* <p>{edu.specialization}</p> */}
                        <pre>{edu.clg}, {edu.cgpa}</pre>
                        {/* <p>{edu.cgpa}</p> */}
                        {/* <pre>{edu.passedOutYear}</pre> */}
                    </div>
                ))
            ):(
                <p className='Pre'>No Education Details</p>
            )}

            {/* <h3 className='resume-heading'>PROJECTS</h3>
            {cvData.project.length>0?(
                cvData.project.map((projectItem, index)=>(
                    <div key={index}>
                        <p>Name: {projectItem.name}</p>
                        <p>Duration: {projectItem.duration}</p>
                        <p>Technology: {projectItem.technology}</p>
                        <p>Description: {projectItem.description}</p>
                    </div>
                ))
            ):(
                <p className='Pre'>No Project Details</p>
            )}

            <h3 className='resume-heading'>CERTIFICATIONS</h3>
            {cvData.certification.length>0?(
                cvData.certification.map((certificationItem,index)=>(
                    <div key={index}>
                        <p>Name:{certificationItem.name}</p>
                        <p>Issued By:{certificationItem.issued}</p>
                        <p>Issued On:{certificationItem.done}</p>
                        <p>Description:{certificationItem.description}</p>
                    </div>
                ))
            ):(
                <p className='Pre'>No Certification Details</p>
            )} */}

            <h3 className='resume-heading'>SKILLS</h3>
            {cvData.skill.length>0?(
                cvData.skill.map((skillItem,index)=>(
                    <div  key={index}>
                        {/* <pre>Technical Skills: {skillItem.name}</pre>
                        <pre>Soft Skills: {skillItem.name1}</pre>
                        <pre>Languages: {skillItem.name2}</pre> */}
                        <div className='skill-heading'>
                            <p className='srm'>Technical Skills: {skillItem.name}</p>
                            <p className='srm'>Soft Skills: {skillItem.name1}</p>
                            <p className='srm'>Languages: {skillItem.name2}</p>
                        </div>
                    </div>  
                ))
            ):(
                <p className='Pre'>No Skill Details</p>
            )}

            {/* <h3>SIGNATURE</h3>
            <p>{cvData.signature.name}</p> */}
            </div>
            
        
        </div>
        <div className='Ben'>{showGenerateButton && <button onClick={handleGeneratePDF} className='Bn'>Generate</button>}</div>
        </div>
    );
}

export default Preview;




































































































































































































//import React from 'react';

// const Preview = ({ cvData }) => {
//     return (
//         <div id='preview-container' className="Preview">
//             <h2>Preview</h2>
//             <div className='customize-PersonalDetails'>
//                 <div>
//                     <pre className='Cen'> {cvData.personalDetails.name}<hr/> </pre>
//                     <pre className='personal-details' > {cvData.personalDetails.email} | {cvData.personalDetails.phone} | {cvData.personalDetails.address}</pre>
//                     <h3 className='resume-heading'>SUMMARY</h3>
//                     <div className='summary-about'>
//                         <p className='sum'> {cvData.personalDetails.summary}</p>
//                     </div>    
//                 </div>
//             </div>

//             <h3 className='resume-heading'>PROFESSIONAL EXPERIENCE</h3>
//             {cvData?.experience.length>0?(
//                 cvData.experience.map((experienceItem, index)=>(
//                     <div key={index}>
//                         {index===0?<div>
//                             <pre>Most Recent Job Title                                               {experienceItem.technology} - Present</pre>
//                             <p className='company-role'>{experienceItem.company} / {experienceItem.role}</p>
//                             <li className='list'>{experienceItem.description}</li>
//                             <li className='list'>{experienceItem.description1}</li>
//                             <li className='list'>{experienceItem.description2}</li>
//                         </div> :
//                         <div>
//                             <pre>Previous Job Title                                                  {experienceItem.technology} - {experienceItem.duration}</pre>
//                             <p className='company-role'>{experienceItem.company} / {experienceItem.role}</p>
//                             <li className='list'>{experienceItem.description}</li>
//                             <li className='list'>{experienceItem.description1}</li>
//                             <li className='list'>{experienceItem.description2}</li>
//                         </div> }
//                     </div>
//                 ))
//             ):(
//                 <p className='Pre'>No Experience Details</p>
//             )}

//             <h3 className='resume-heading'>EDUCATION</h3>
//             {cvData.education.length>0?(
//                 cvData.education.map((edu, index)=>(
//                     <div key={index}>
//                         <pre>{edu.qualification}, {edu.specialization}                                                                      {edu.passedOutYear}</pre>
//                         <pre>{edu.clg}, {edu.cgpa}</pre> 
//                     </div>
//                 ))
//             ):(
//                 <p className='Pre'>No Education Details</p>
//             )}

//             <h3 className='resume-heading'>SKILLS</h3>
//             {cvData.skills.length>0?(
//                 cvData.skills.map((skills, index)=>(
//                     <div key={index} className='skill-heading'>
//                         <p className='srm'>Technical Skills: {skills.technicalSkills}</p>
//                         <p className='srm'>Soft Skills: {skills.softSkills}</p>
//                         <p className='srm'>Languages: {skills.languages}</p>
//                     </div>
//                 ))
//             ):(
//                 <p className='Pre'>No Skills</p>
//             )}
//             <div className='skill-heading'>
                
//             </div>
//         </div>
//     );
// };

// export default Preview;