import React from 'react';
import '../Styles/ContactForm/contactForm.css';
import CloseBtn from '../Styles/ContactForm/Images/close-button.png';


export class ContactForm extends React.Component {


  render() {
    return (
            <form id='contact' method='POST' style={this.props.visible ? { visibility: 'visible' } : { visibility: 'hidden' }}>
              <input type='hidden' name='form-name' value='contact' />
              <div className='psuedo-background'/>
              <h1>GOT AN IDEA?</h1>
              <img className='close-button' src={CloseBtn} alt='close button' onClick={this.props.handleClick} />
                <div className='form-group'>
                     <br></br>
                     <input name='name' type='text' className='form-control' placeholder='Your Name' required />
                </div>
                <div className='form-group'>
                    <br></br>
                    <input type='email' name='email' className='form-control'  placeholder='Your Email' required />
                </div>
                <div className='form-group'>
                    <br></br>
                    <input type='text' name='subject' className='form-control' placeholder='Subject' required />
                </div>
                <div className='form-group'>
                    <br></br>
                    <textarea className='form-control' id='message' name='message' rows='5' placeholder='Your Message Here...' required></textarea>
                </div>
                <p>All Fields Are Required</p>
                <button type='submit'>Send It!</button>
            </form>
        )
    }
}

export default ContactForm;
