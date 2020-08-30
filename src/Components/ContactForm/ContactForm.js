import React from 'react';
import './ContactForm.css'

export class ContactForm extends React.Component {


    render() {
        return (
            <form id='contact'>
                <h1>Contact</h1>
                <div className='form-group'>
                    <label for='name'>Name</label><br></br>
                    <input id='name' name='name' type='text' className='form-control' />
                </div>
                <div className='form-group'>
                    <label for='email'>Email address</label><br></br>
                    <input type='email' id='email' className='form-control' />
                </div>
                <div className='form-group'>
                    <label for='message'>Message</label><br></br>
                    <textarea className='form-control' id='message' rows='5'></textarea>
                </div>
                <button type='submit'>Submit</button>
            </form>
        )
    }

    

}