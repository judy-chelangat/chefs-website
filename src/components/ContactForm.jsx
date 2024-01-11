import React, { useRef } from 'react'
import './Form.css'
import emailjs from 'emailjs-com'


function ContactForm() {
    const refForm = useRef();
    const sendEmail=(e)=>{
        e.preventDefault()

        emailjs.sendForm(
            'service',
            '',
            refForm.current,
            ''
        )
        .then(
            (result)=>{
                alert('Message sent successfully')
                console.log('Email sent successfully!',result.text);
                window.location.reload(false)
            
            },
            (error) => {
                alert('please try again')
                console.error('Email could not be sent ',error.text );

            }
        );
    }
  return (
    <div className='form'>
      <form ref={refForm} onSubmit={sendEmail}>
        <label>Your Name</label> 
        <input type="text" name='from_name' required></input>
        <label>Email</label>
        <input type="email"   name='from_email' required></input>
        <label>Subject</label>
        <input type="text"name='subject' required></input>
        <label>Message</label>
        <textarea name="message" id=""  cols="30" rows="6" placeholder='Type in your message'/>

        <button type="submit" className='btn'>Submit</button>
      </form>
    </div>
  )
}

export default ContactForm
