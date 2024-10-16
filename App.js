import './App.css';
import React, { useState } from 'react';
import CVBuilder from './Components/CVBuilder';
import Preview from './Components/Preview';
import {BrowserRouter as Router,Route, Routes, Link } from 'react-router-dom';

function App() {
    const [showCVBuilder, setShowCVBuilder] = useState(false);
    const [showPreview, setShowPreview] = useState(false);
    const [cvData, setCVData] = useState({
        personalDetails: {
            name: '', email: '', phone: '', address: '', image: '', summary:''
        },
        education: [],
        skill:[],
        experience: [],
        project: [],
        certification:[],
        signature: '',
    });

    const handleCreateNewCV = () => {
        setShowCVBuilder(true);
        setShowPreview(false);
    };

    const handleModifyExistingCV = () => {
        setShowCVBuilder(false);
        setShowPreview(true);
    };

    // const savePersonalDetails = () => {
    //     setShowPreview(true);
    // };

    return (
        <Router>
            <div className='container'>
                <Routes>
                    <Route path='/' element={
                        <div>
                            <button className='New' onClick={handleCreateNewCV}>
                                <Link to='/cvbuilder'>Create New CV</Link>
                            </button>
                            <button className='Exist' onClick={handleModifyExistingCV}>Modify Existing CV</button>
                        </div>
                    } />
                    <Route path='/cvbuilder' element={<CVBuilder cvData={cvData} setCVData={setCVData}/>}/>
                    <Route path='/preview' element={<Preview cvData={cvData} />} />
                </Routes>
            </div>
        </Router>
    );
}

//         <div className="container">
//              {!showCVBuilder && !showPreview && (
//                 <div>
//                     <button className='New'>Create New CV</button>
//                     <button className='Exist' onClick={handleModifyExistingCV}>Modify Existing CV</button>
//                 </div> 
//             )}  
//             {showCVBuilder && (
//                 <div>
//                     <CVBuilder cvData={cvData} setCVData={setCVData}  />  
//                 </div> 
//             )} 
//             {showPreview && (
//                 <div>
//                     <Preview cvData={cvData} />
//                 </div>
//             )}
//         </div> 
        
        
//         {/*  savePersonalDetails={savePersonalDetails} */}
//     );
// }

export default App;