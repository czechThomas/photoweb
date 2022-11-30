import React from 'react';
import './Contact.css';

const Contact =() => {
   return (
    <div>
       <div className='Contact-div center'>
            <h1 className='NameOfTitle'><span className='bgline'>Kontakt</span></h1>
        </div>
        <div className='infoAboutPhoto center'>
            <p>Objednávám již na druhou polovinu roku 2023!</p>
        </div>
        <div className='contact-form'>
            <form className="contact-form" action="index.html" method="post">
                <input type="text" className="contact-form-text" placeholder="Vaše jméno"></input>
                <input type="email" className="contact-form-text" placeholder="Váš email"></input>
                <input type="text" className="contact-form-text" placeholder="Váš telefon"></input>
                <textarea className="contact-form-text" placeholder="Krátká zpráva o jaké focení máte zájem a předpokládaný termín."></textarea>
                <input type="submit" className="contact-form-btn send-btn" value="Kontaktuj mě"></input>
            </form>
        </div>
    </div>
   );
}

export default Contact;