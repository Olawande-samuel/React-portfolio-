import React, {useRef} from "react";
import {BsFillEnvelopeFill} from "react-icons/bs"
import {AiTwotonePhone} from "react-icons/ai"
import emailjs from "@emailjs/browser";


function Form(props) {
  const [loading, setLoading] = React.useState(false)

  const form = useRef();

  
  const submit =(e)=>{
    e.preventDefault();
    setLoading(true)
    emailjs.sendForm("service_re7h9hg","template_ee6jrpo", form.current, "user_dsL7r0Kn03RiIOTts2sWC" )
    .then(
      (result)=>{
        setLoading(false)  
        window.alert("Message sent successfully")
        console.log(result)
      }, (error)=>{
        setLoading(false)
        window.alert("Message sending failed")
        console.log(error)
    })
    
  }
  return (
    <div className="form-wrapper text-white" id="contact">
      <h3>Contact me</h3>
        <div className="row h-100 ">
          <div className="col-md-5">
            <div className="contact_info">
              <div className="contact_info_content d-flex flex-column h-75 align-items-center justify-content-center p-2 p-md-0">
                <header>
                  <p>I am open to any freelance, Contract or remote full time job </p>
                </header>
                <div className="mail  d-sm-flex ">
                  <i className="me-2">
                  <BsFillEnvelopeFill  />
                  </i>
                  <a href="mailto:olawandesamuel@gmail.com" className="text-white text-decoration-none ">olawandesamuel@gmail.com</a>
                </div>
                <div className="phone d-sm-flex justify-content-center align-items-center  ">
                  <i className="me-2">
                  <AiTwotonePhone  />
                  </i>
                  <a href="tel:+2348069366034" className="text-white text-decoration-none ">+2348069366034</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-7">
            <div className="d-flex px-3 pb-2 align-items-center justify-content-center">
              <form className=" contact_form" ref={form} onSubmit={submit}>
                <div className="form-group d-flex flex-column mb-3">
                  <label htmlFor="name" className="form-label text-center text-sm-start">Name</label>
                  <input type="text" name="from_name" id="name" className=" p-2 form-control" />
                </div>
                <div className="form-group d-flex flex-column mb-3">
                  <label htmlFor="mail" className="form-label text-center text-sm-start">Email Address</label>
                  <input type="mail" name="reply_to" id="mail" className=" p-2 form-control" />
                </div>  
                <div className="form-group d-flex flex-column mb-3">
                  <label htmlFor="message" className=" form-label text-center text-sm-start">Message</label>
                  <textarea name="message" id="message" cols="30" rows="5" className="form-control" ></textarea>
                </div>
                <div className="btn-wrapper w-100">
                  {loading ? (
                    <button className="btn bg-light w-100 contact_btn fw-bolder" type="submit">
                      <div className="spinner-border" role="status">
                        <span className="sr-only"></span>
                      </div>
                    </button>
                  ):(
                    <button className="btn bg-light w-100 contact_btn fw-bolder" type="submit">SEND</button>
                  )}

                </div>
              </form>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Form;
