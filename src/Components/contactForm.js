import React from 'react';
import '../Styles/ContactForm/contactForm.css';

export class ContactForm extends React.Component {


    render() {
        return (
            <form id='contact'>
                <h1>GOT AN IDEA?</h1>
                <div className='form-group'>
                    <label htmlFor='name'></label><br></br>
                    <input id='name' name='name' type='text' className='form-control' placeholder='Your Name' required/>
                </div>
                <div className='form-group'>
                    <label htmlFor='email'></label><br></br>
                    <input type='email' id='email' className='form-control' placeholder='Your Email' required/>
                </div>
                <div class='form-group'>
                    <label htmlFor='subject'></label><br></br>
                    <input type='text' class='form-control' id='subject' placeholder='Subject' required />
                </div>
                <div className='form-group'>
                    <label htmlFor='message'></label><br></br>
                    <textarea className='form-control' id='message' rows='5' placeholder='Your Message Here...' required></textarea>
                </div>
                <p>All Fields Are Required</p>
                <button type='submit'>Send It!</button>
            </form>
        )
    }



}