import React from 'react'
import {useState} from 'react'
import '../App.css'

function Certification({certification, handleCertificationChange, addCertification, saveCertificationDetails}) {
    const [errors, setErrors] = useState([]);

    const validate = () => {
        const newErrors = certification.map((certificationItem, index) => {
            const certificationItemErrors = {};

            if (/^(\d{2})-(\d{2})-(20(?:1[9-9]|2[0-4]))$/.test(certificationItem.done)) {
                certificationItemErrors.done = 'Invalid format';  //-(20(?:1[9-9]|2[0-4]))$/ or /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-\d{4}$/
            }
            return certificationItemErrors;
        });

        setErrors(newErrors);
        return newErrors.every((certificationItemErrors) => Object.keys(certificationItemErrors).length === 0);
    };

    const handleSave = () => {
        if (validate()) {
            saveCertificationDetails(certification);
        }
    };

    return (
        <div>
            <h2>Certification</h2>
            {certification.map((certificationItem, index)=>(
                <div key={index} className='Cert'>
                    <input required className='Pers'
                        type='text'
                        name='name'
                        placeholder='Name'
                        value={certificationItem.name}
                        onChange={(e)=> handleCertificationChange(e, index)}
                    />
                    <input required className='Pers'
                        type='text'
                        name='issued'
                        placeholder='Issued'
                        value={certificationItem.issued}
                        onChange={(e)=> handleCertificationChange(e,index)}
                    />
                    <input required className='Pers'
                        type='text'
                        name='done'
                        placeholder='Done'
                        value={certificationItem.done}
                        onChange={(e)=> handleCertificationChange(e,index)}
                    />
                    {errors[index] && errors[index].done && <p className="error">{errors[index].done}</p>}
                    <input required className='Pers'
                        type='text'
                        name='description'
                        placeholder='Description'
                        value={certificationItem.description}
                        onChange={(e)=> handleCertificationChange(e,index)}
                    />
                </div>
            ))}
            <button className='Bn' onClick={addCertification}>add</button>
            <button className='Bn' onClick={handleSave}>save</button>
        </div>
    );
}

export default Certification
