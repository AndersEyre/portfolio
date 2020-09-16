import React from 'react';
import '../Styles/ContactForm/contactForm.css';
import CloseBtn from '../Styles/ContactForm/Images/close-button.png';



const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

export class ContactForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = { name: "", email: "", subject: "", message: "" };
      }
  
      /* Here’s the juicy bit for posting the form submission */
  
      handleSubmit = e => {
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({ "form-name": "contact", ...this.state })
        })
          .then(() => alert("Success!"))
          .catch(error => alert(error));
  
        e.preventDefault();
      };
  
      handleChange = e => this.setState({ [e.target.name]: e.target.value });
  
    
    render() {
        const { name, email, subject, message } = this.state;

        return (
            <form 
            id='contact'
            method='POST'
            
            style={this.props.visible ? { visibility: 'visible' } : { visibility: 'hidden' }} >
                
                <div className='psuedo-background'/>
                <h1 >GOT AN IDEA?</h1>
                <img className='close-button' src={CloseBtn} alt='close button' onClick={this.props.handleClick} />
                <div className='form-group'>
                    <label htmlFor='name'></label><br></br>
                    <input id='name' name='name' type='text' className='form-control' placeholder='Your Name' value={name} onChange={this.handleChange} required />
                </div>
                <div className='form-group'>
                    <label htmlFor='email'></label><br></br>
                    <input type='email' name='email' id='email' className='form-control'  placeholder='Your Email' value={email} onChange={this.handleChange} required />
                </div>
                <div className='form-group'>
                    <label htmlFor='subject'></label><br></br>
                    <input type='text' name='subject' className='form-control' id='subject' placeholder='Subject' value={subject} onChange={this.handleChange} required />
                </div>
                <div className='form-group'>
                    <label htmlFor='message'></label><br></br>
                    <textarea className='form-control' id='message' name='message' rows='5' placeholder='Your Message Here...' value={message} onChange={this.handleChange} required></textarea>
                </div>
                <p>All Fields Are Required</p>
                <button type='submit'>Send It!</button>
            </form>

        )
    }
}

export default ContactForm;