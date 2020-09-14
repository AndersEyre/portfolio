import React from 'react';
import '../Styles/Footer/footer.css';

import fbIcon from '../Styles/Footer/Icons/fb.png';
import instaIcon from '../Styles/Footer/Icons/insta.png';
import mailIcon from '../Styles/Footer/Icons/mail.png';
import gitHub from '../Styles/Footer/Icons/github.png'




export function Footer() {
    return (
      <footer>
        <div className='social-group'>
          <a href='https://www.facebook.com/anders.eyre/' target='_blank' rel='noopener noreferrer'><img src={fbIcon} alt='fb icon' className='icon'></img></a>
          <a href='https://www.instagram.com/anders_air/?hl=en' target='_blank' rel='noopener noreferrer'><img src={instaIcon} alt='insta icon' className='icon'></img></a>
          <a href='https://github.com/AndersEyre/' target='_blank' rel='noopener noreferrer'><img src={gitHub} alt='insta icon' className='icon' id='github-icon'></img></a>
          <a href='mailto:anders_air@hotmail.com'><img src={mailIcon} alt='mail icon' className='icon'></img></a>
        </div>
        <div>
          <h1>Good Vibes Only</h1>
        </div>
        <div>
          <p>Conjured By © Anders Eyre</p>
          <p>- All Rights Reserved -</p>
        </div>
        <div className='attribution'>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

      </footer>
    )
};

export default Footer;