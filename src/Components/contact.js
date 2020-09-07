import React from 'react';
import '../Styles/Contact/contact.css';
import { ContactForm } from './ContactForm';

export class Contact extends React.Component {

  render() {
    return (
      <section className='contact'>
        <div className='contact-info'>
          <p>Thanks for your interest, <br />If you want to make some magic just shoot me a message and ill get back to you on the double. </p>
        </div>
        <ContactForm />
      </section>
    )
  };
};