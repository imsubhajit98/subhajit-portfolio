import React from 'react'
import { useRef, useState } from 'react'
import { ToastContainer,toast } from 'react-toastify';
import "react-toastify/ReactToastify.css"
import emailjs  from '@emailjs/browser';

export default function Contact() {

  const form = useRef();
  const [isSend, setIsSent]= useState(false);

  const sendEmail= (e)=> {
    e.preventDefault();
    emailjs.sendForm(
      "service_roqhrlc",  //service id
      "template_xqrmh4k", //template id
      form.current,
      "LKthyvvo9h1vYU7XL"  //public key
    ).then(
      ()=>{
        setIsSent(true);
        form.current.reset();  //reset from field after submit
        toast.success("Wessage sent sucessfully",{
          position:'top-right',
          autoClose:3000,
          hideProgressBar:false,
          closeOnClick:true,
          pauseOnHover:true,
          draggable:true,
          theme:'dark'
        });
      },
      (error)=>{
        toast.error("Error Sending",error);
        toast.success("Failed to send Message , please try again!!",{
          position:'top-right',
          autoClose:3000,
          hideProgressBar:false,
          closeOnClick:true,
          pauseOnHover:true,
          draggable:true,
          theme:'dark'
        });
        
      }
    )
  }


  

  return (
    <section id="contact" className="flex flex-col item-center justify-center py-24 px-[12vw] md:px[7vw] lg:px-[20vw]">
     <ToastContainer/>
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">CONTACT</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          i'd love to hear from you reach out any communinities or questions!
        </p>
      </div>

      {/* contact form */}
      <div className="mt-8 w-full mx-w-md bg-[#0d081f] p-6 rounded-lg shadow-lg border border-gray-700">
        <h3 className="text-xl font-semibold text-white text-center">Contact With Me</h3>
        <form ref={form} onSubmit={sendEmail} action="" className="mt-4 flex flex-col space-y-4">
          <input type="email" name="user_email" placeholder="Your Email" required className="w-full p-3 rounded-md bg-[#131025] border border-gray-600 focus:outline-none focus:border-purple-500 text-white"/>
          <input type="text" name="user_name" placeholder="Your Name" required className="w-full p-3 rounded-md bg-[#131025] border border-gray-600 focus:outline-none focus:border-purple-500 text-white"/>
          <input type="text" name="subject" placeholder="subject" required className="w-full p-3 rounded-md bg-[#131025] border border-gray-600 focus:outline-none focus:border-purple-500 text-white"/>
          <textarea name="message" id="" placeholder="Message" rows="4" className="w-full p-3 rounded-md bg-[#131025] border border-gray-600 focus:outline-none focus:border-purple-500 text-white"></textarea>

          {/* Submit Button */}
          <button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-pink-500 py-3 font-semibold text-white rounded-md hover:opacity-70 transition">Send</button>
        </form>
      </div>
    </section>
  )
}
