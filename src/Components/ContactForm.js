import React from 'react';
import '../Styles/ContactForm/contactForm.css';
import CloseBtn from '../Styles/ContactForm/Images/close-button.png';

export class ContactForm extends React.Component {


    render() {

        return (
            <form 
            id='contact'
            name='contact'
            method='POST'
            style={this.props.visible ? { visibility: 'visible' } : { visibility: 'hidden' }} >
                <input type='hidden' name='form-name' form-name='contact' value='contact' />
                <div className='psuedo-background'/>
                <h1 >GOT AN IDEA?</h1>
                <img className='close-button' src={CloseBtn} alt='close button' onClick={this.props.handleClick} />
                <div className='form-group'>
                    <label htmlFor='name'></label><br></br>
                    <input id='name' name='name' type='text' className='form-control' placeholder='Your Name' required />
                </div>
                <div className='form-group'>
                    <label htmlFor='email'></label><br></br>
                    <input type='email' name='email' id='email' className='form-control' placeholder='Your Email' required />
                </div>
                <div className='form-group'>
                    <label htmlFor='subject'></label><br></br>
                    <input type='text' name='subject' className='form-control' id='subject' placeholder='Subject' required />
                </div>
                <div className='form-group'>
                    <label htmlFor='message'></label><br></br>
                    <textarea className='form-control' id='message' name='message' rows='5' placeholder='Your Message Here...' required></textarea>
                </div>
                <p>All Fields Are Required</p>
                <button type='submit'>Send It!</button>
            </form>

        )
    }
}

export default ContactForm;