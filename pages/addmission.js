import { useState,useEffect } from "react";
import Head from "next/head";
import axios from "axios";
const Addmission = () => {
    const inputFields = {
        firstname:'',
        lastname:'',
        email:'',
        contactno:'',
        dob:'',
        landmark:'',
        address:''
    }
    const [formFields,setFormFields] = useState(inputFields);
    const [isLoding,setLoding] = useState(false)
    const [formSuccessMessage,setFormSuccessMessage] = useState('');

    const handleAddmissionFormInput = (e)=>{
        setFormFields({...formFields,[e.target.name] : e.target.value});
    }
    const handleAddmissionFormSubmit = (e)=>{
        e.preventDefault();
        axios.post('/api/post/addmission', formFields)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
        setLoding(true);
        setFormSuccessMessage('Form Submited , we will reach you soon');
        setTimeout(()=>{ 
            e.target.reset();
            setFormFields(inputFields); 
            setLoding(false);
            
         },1000);
         setTimeout(()=>{
            setFormSuccessMessage(false);
         },5000);
         
    }
    return (<>
    <Head><title>Addmission</title></Head>
        <section className="addmission_form_section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="text-center pt-2 pb-2">Addmission Form</h1>
                    </div>
                    <div className="col-md-12">
                        <form className="mb-5 rounded shadow" onSubmit={handleAddmissionFormSubmit} style={{ padding: "45px", background: "coral" }}>
                            <div className="row ">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="firstname" className="form-label">First Name</label>
                                    <input type="text" className="form-control" name="firstname" onChange={handleAddmissionFormInput} id="firstname" aria-describedby="firstname" placeholder="First Name" required />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="lastname" className="form-label">Last Name</label>
                                    <input type="text" className="form-control" name="lastname" onChange={handleAddmissionFormInput} id="lastname" aria-describedby="lastname" placeholder="Last Name" />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="emailaddress" className="form-label">Email Address</label>
                                    <input type="email" className="form-control" name="email" onChange={handleAddmissionFormInput} id="emailaddress" aria-describedby="emailaddress" placeholder="Email Address" />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="contactnumber" className="form-label">Contact Number</label>
                                    <input type="text" className="form-control" name="contactno" onChange={handleAddmissionFormInput} id="contactnumber" aria-describedby="contactnumber" placeholder="Contact Number" />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="datelabel" className="form-label">DOB</label>
                                    <input type="date" className="form-control" name="dob" onChange={handleAddmissionFormInput} id="datelabel" aria-describedby="datelabel" />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="landmark" className="form-label">Landmark</label>
                                    <input type="text" className="form-control" name="landmark" onChange={handleAddmissionFormInput} id="landmark" aria-describedby="landmark" placeholder="Landmark" />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Address</label>
                                    <textarea className="form-control" name="address" onChange={handleAddmissionFormInput} placeholder="Address" />
                                </div>
                            </div>
                            <div className="col-12">
                                {
                                    isLoding ? <button type="submit" className="btn btn-primary" disabled>
                                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Submitting Form</button> 
                                    :
                                    <><input type="submit" className="btn btn-primary" value="Submit" /> 
                                    {
                                        formSuccessMessage && <div className="mt-3 alert alert-success alert-dismissible fade show" role="alert">
                                        {formSuccessMessage}
                                    </div> 
                                    }
                                    </>
                                }
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section></>
    )
}
export default Addmission;