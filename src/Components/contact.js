import React from 'react';
import '../Styles/Contact/contact.css';
import { ContactForm } from './contactForm';

export class Contact extends React.Component {

    render(){
        return(
            <section className='contact'>
              <div className='contact-info'>
                <p>Contact me: <br/> 1233341545 <br/> 36 chapel st <br/>
                Prahan </p>
              </div>
              <ContactForm/>
            </section>
        )
    };
};