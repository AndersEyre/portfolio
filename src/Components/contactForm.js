import React from 'react';
import '../Styles/ContactForm/contactForm.css';
import CloseBtn from '../Styles/ContactForm/Images/close-button.png';

export class ContactForm extends React.Component {


    render() {

        return (
            <form id='contact' style={this.props.visible ? { visibility: 'visible' } : { visibility: 'hidden' }}>
                <div className='psuedo-background'/>
                <h1 >GOT AN IDEA?</h1>
                <img className='close-button' src={CloseBtn} alt='close button' onClick={this.props.handleClick} />
                <div className='form-group'>
                    <label htmlFor='name'></label><br></br>
                    <input id='name' name='name' type='text' className='form-control' placeholder='Your Name' required />
                </div>
                <div className='form-group'>
                    <label htmlFor='email'></label><br></br>
                    <input type='email' id='email' className='form-control' placeholder='Your Email' required />
                </div>
                <div className='form-group'>
                    <label htmlFor='subject'></label><br></br>
                    <input type='text' className='form-control' id='subject' placeholder='Subject' required />
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