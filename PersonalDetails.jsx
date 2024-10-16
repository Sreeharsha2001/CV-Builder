import React, { useState } from 'react';
import '../App.css';

function PersonalDetails({ personalDetails, handlePersonalDetailsChange, handleImageUpload, savePersonalDetails }) {
    const [errors, setErrors] = useState({});
    // const [imageError, setImageError] = useState('');

    const validate = () => {
        const newErrors = {};

        if (!/^[A-Z][a-z]*|[A-Z]+$/.test(personalDetails.name) || !personalDetails.name.trim()) {
            newErrors.name = 'Please fill out this field';
        }

        if (!/^[a-z][a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(personalDetails.email) || !personalDetails.email.trim()) {
            newErrors.email = 'Please fill out this field';
        }

        if (!/^\+\d{1,3}\d{10}$/.test(personalDetails.phone) || !personalDetails.phone.trim()) {
            newErrors.phone = 'Please fill out this field';
        }

        if (!personalDetails.address.trim()) {
            newErrors.address = 'Please fill out this field';
        }

        if (!personalDetails.summary.trim()) {
            newErrors.summary = 'Please fill out this field';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSave = () => {
        if (validate()) {
            savePersonalDetails(personalDetails);
        }
    };

    // const handleImageChange = (e) => {
    //     const file = e.target.files[0];
    //     if (file && (file.type === 'image/jpeg' || file.type === 'image/png')) {
    //         const reader = new FileReader();
    //         reader.onloadend = () => {
    //             handleImageUpload(reader.result);
    //         };
    //         reader.readAsDataURL(file);
    //         setImageError('');
    //     } else {
    //         setImageError('Invalid format');
    //     }
    // };

    return (
        <div>
            <h2>Personal Details</h2>
            {/* <input className='img' type="file" accept=".jpg, .jpeg, .png" name="image" onChange={handleImageChange} />
            {imageError && <p className="error">{imageError}</p>} */}
            <input required className='Pers'
                type="text"
                name="name"
                placeholder="Name"
                value={personalDetails.name}
                onChange={handlePersonalDetailsChange}
            />
            {errors.name && <p className="error">{errors.name}</p>}
            <input required className='Pers'
                type="text"
                name="email"
                placeholder="Email"
                value={personalDetails.email}
                onChange={handlePersonalDetailsChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}
            <input required className='Pers'
                type="text"
                name="phone"
                placeholder="Contact"
                value={personalDetails.phone}
                onChange={handlePersonalDetailsChange}
            />
            {errors.phone && <p className="error">{errors.phone}</p>}
            <input required className='Pers'
                type="text"
                name="address"
                placeholder="Address"
                value={personalDetails.address}
                onChange={handlePersonalDetailsChange}
            />
            {errors.address && <p className="error">{errors.address}</p>}
            <input required className='Pers '
                type="text"
                name="summary"
                placeholder="About"
                value={personalDetails.summary}
                onChange={handlePersonalDetailsChange}
            />
            {errors.summary && <p className="error">{errors.summary}</p>}
            <button className='Bn' onClick={handleSave}>Save</button>
        </div>
    );
}

export default PersonalDetails;
















































































































































































































//import React from 'react';

// const PersonalDetails = ({ cvData, setCVData }) => {
//     const handlePersonalDetailsChange = (e) => {
//         const { name, value } = e.target;
//         setCVData(prevData => ({
//             ...prevData,
//             personalDetails: {
//                 ...prevData.personalDetails,
//                 [name]: value
//             }
//         }));
//     };

//     const savePersonalDetails = () => {
    
//     };

//     return (
//         <div>
//             <h2>PersonalDetails</h2>
//             <input className='Pers'
//                 type="text"
//                 name="name"
//                 value={cvData.personalDetails.name ||''}
//                 onChange={handlePersonalDetailsChange}
//                 placeholder="Name"
//             />
//             <input className='Pers'
//                 type="text"
//                 name="email"
//                 value={cvData.personalDetails.email || ''}
//                 onChange={handlePersonalDetailsChange}
//                 placeholder="Email"
//             />
//             <input className='Pers'
//                 type="text"
//                 name="phone"
//                 value={cvData.personalDetails.phone || ''}
//                 onChange={handlePersonalDetailsChange}
//                 placeholder="Phone"
//             />
//             <input className='Pers'
//                 type="text"
//                 name="address"
//                 value={cvData.personalDetails.address || ''}
//                 onChange={handlePersonalDetailsChange}
//                 placeholder="Address"
//             />
//             <input className='Pers'
//                 type="text"
//                 name="summary"
//                 value={cvData.personalDetails.summary || ''}
//                 onChange={handlePersonalDetailsChange}
//                 placeholder="Summary"
//             />
//             <button onClick={savePersonalDetails}>save</button>
//         </div>
//     );
// };

// export default PersonalDetails;

