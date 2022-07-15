import { useState,useEffect } from "react";
import axios from "axios";
import style from '../styles/Contact.module.css';
import Head from "next/head";
const Contact = () => {
    const inputFields = {
        name:'',
        phoneno:'',
        email:'',
        message:'',
    }
    const [formFields,setFormFields] = useState(inputFields);
    const [isLoding,setLoding] = useState(false);
    const [formSuccessMessage,setFormSuccessMessage] = useState('');

    const handleAddmissionFormInput = (e)=>{
        setFormFields({...formFields,[e.target.name] : e.target.value});
    }
    const handleAddmissionFormSubmit = (e)=>{
        e.preventDefault();
        axios.post('/api/post/contactus', formFields)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
        setLoding(true);
        setFormSuccessMessage('Submited , we will get back to you soon');
        setTimeout(()=>{ 
            e.target.reset();
            setFormFields(inputFields); 
            setLoding(false);
         },1000);
         setTimeout(()=>{
            setFormSuccessMessage('');
         },5000);
    }
    console.log(formFields);
    return (
        <>
        <Head>
            <title>Contact us | Mira Bhayander</title>
        </Head>
        <section className={style.contact_us_section}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="text-center mb-5">Get in touch</h1>
                    </div>
                    <div className="col-md-12">
                        <form action="" className="rounded shadow" onSubmit={handleAddmissionFormSubmit} style={{ padding: "45px", background: "coral" }}>
                            <div className="row">
                                <div className="col-md-4 mb-3">
                                    <div className="form-group">
                                        <label htmlFor="name" className="form-label">Name</label>
                                        <input type='text' name='name' id="name" className="form-control" onChange={handleAddmissionFormInput} placeholder="Your name" required />
                                    </div>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <div className="form-group">
                                        <label htmlFor="name" className="form-label">Contact Number</label>
                                        <input type='text' name='phoneno' className="form-control" onChange={handleAddmissionFormInput} placeholder="Your phone number" required />
                                    </div>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <div className="form-group">
                                        <label htmlFor="name" className="form-label">Email</label>
                                        <input type='text' name='email' className="form-control" onChange={handleAddmissionFormInput} placeholder="Your email" required />
                                    </div>
                                </div>
                                <div className="col-md-12 mb-3">
                                    <div className="form-group">
                                        <label htmlFor="message" className="form-label">Your Message</label>
                                        <textarea className="form-control" id="message" onChange={handleAddmissionFormInput} name='message' placeholder="Your message" />
                                        {/* <input type='textarea' className="form-control" placeholder="Your message" /> */}
                                    </div>
                                </div>
                                <div className="col-md-12 mb-3">
                                {
                                    isLoding ? <button type="submit" className="btn btn-primary" disabled>
                                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Submitting Form</button> 
                                    : <> <input type="submit" className="btn btn-primary" value="Submit" /> 
                                    {
                                        formSuccessMessage && <div className="mt-3 alert alert-warning alert-dismissible fade show" role="alert">
                                        {formSuccessMessage}
                                        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                    </div> 
                                    }
                                        
                                    </>
                                }
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default Contact;