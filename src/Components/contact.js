import React from 'react';
import '../Styles/Contact/contact.css';
import { ContactForm } from './ContactForm';
import OffClick from 'react-offclick';

export class Contact extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      visible: false
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.setState( {visible: !this.state.visible} )
  }
  
  render() {
    return (
      <section className='contact' >
        <div className='contact-info'>
          <p>Thanks for your interest, <br/>If you want to make some magic just shoot me a message and ill get back to you on the double. </p>
          <button onClick={this.handleClick}> SEND ME A MESSAGE! </button>
        </div>
        <ContactForm handleClick={this.handleClick} visible={this.state.visible}/>
        <hr></hr>
      </section>
    )
  };
};