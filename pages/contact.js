import { useState,useEffect } from "react";
import style from '../styles/Contact.module.css';
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
        // axios.post('/api/post/addmission', formFields)
        //   .then(function (response) {
        //     console.log(response);
        //   })
        //   .catch(function (error) {
        //     console.log(error);
        //   });
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
        <section className={style.contact_us_section}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="text-center mb-5">Get in touch</h1>
                    </div>
                    <div className="col-md-12">
                        <form action="" onSubmit={handleAddmissionFormSubmit} style={{ padding: "45px", background: "coral" }}>
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <input type='text' name='name' className="form-control" onChange={handleAddmissionFormInput} placeholder="Your name" />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <input type='text' name='phoneno' className="form-control" onChange={handleAddmissionFormInput} placeholder="Your phone number" />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <input type='text' name='email' className="form-control" onChange={handleAddmissionFormInput} placeholder="Your email" />
                                    </div>
                                </div>
                                <div className="col-md-12 pt-3">
                                    <div className="form-group">
                                        <textarea className="form-control" onChange={handleAddmissionFormInput} name='message' placeholder="Your message" />
                                        {/* <input type='textarea' className="form-control" placeholder="Your message" /> */}
                                    </div>
                                </div>
                                <div className="col-md-12 pt-3">
                                {
                                    isLoding ? <button type="submit" className="btn btn-primary" disabled>
                                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Submitting Form</button> 
                                    :
                                    <><input type="submit" className="btn btn-primary" value="Submit" /> <span className='' style={{fontSize:"18px",paddingLeft:"15px"}} >{formSuccessMessage}</span></>
                                    
                                }
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Contact;