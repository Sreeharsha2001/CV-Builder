import React,{useState} from 'react'
import '../App.css'


function Signature({signature, handleSignatureChange, saveSignatureDetails}) {
    const [errors, setErrors] = useState('');

    const validate = (name) => {

        if (!name || !name.match(/^[A-Z\s]+$/)) {
            setErrors('Invalid format');
            return false;
        }else{
            setErrors('');
            return true
        }
    };

    const handleSave = () => {
        if (validate(signature)) {
            saveSignatureDetails(signature.trim());
        }
    };
   

    return (
        <div>
            <h2>Signature</h2>
            <div  className='Sig'>
                <input 
                        type='text'
                        name='name' required
                        placeholder='Name'
                        value={signature}
                        onChange={(e)=> handleSignatureChange(e.target.value)}
                />
                {errors && <p className="error">{errors}</p>}
            </div> 
            <button className='Bn' onClick={handleSave}>save</button>
        </div>
    );
}

export default Signature
