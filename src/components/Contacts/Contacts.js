import React from 'react';
import styles from './contacts.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faGithubSquare, faLinkedin, faSkype, faTelegram, faViber } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faCompass } from "@fortawesome/free-regular-svg-icons";

const Contacts = ({ contacts }) => {
   return (
      <div className={styles.wrapper}>
         <a href={`mailto:` + contacts.email} className={styles.emailWrapper}>
            <FontAwesomeIcon icon={faEnvelope} color="red" size="lg" />
            <span className={styles.email}> {contacts.email}</span>
         </a>
         <div className={styles.socialMediaWrapper}>
            <a href={contacts.facebook} className={styles.facebook}>
               <FontAwesomeIcon icon={faFacebookSquare} color="blue" size="lg" />
            </a>

            <a href={contacts.linkedin} className={styles.linkedin}>
               <FontAwesomeIcon icon={faLinkedin} color="blue" size="lg" />
            </a>
            <a href={contacts.github} className={styles.github}>
               <FontAwesomeIcon icon={faGithubSquare} color="#6e5494" size="lg" />
            </a>
            <a href={contacts.skype} className={styles.skype}>
               <FontAwesomeIcon icon={faSkype} color="#00aff0" size="lg" />
            </a>
         </div>
         <div className={styles.phoneWrapper}>
            <a href={`t.me/` + contacts.telephone_number} className={styles.telegram}>
               <FontAwesomeIcon icon={faTelegram} color="#0088cc" size="lg" />
            </a>
            <a href={`viber://add?number=38` + contacts.telephone_number} className={styles.viber}>
               <FontAwesomeIcon color="#8f5db7" icon={faViber} size="lg" />
            </a>
            <a href={'tel:' + contacts.telephone_number} className={styles.number}>
               {contacts.telephone_number}
            </a>

         </div>

         <div className={styles.locationWrapper}>
            <FontAwesomeIcon icon={faCompass} size="lg" />
            <span className={styles.location}>{contacts.location}</span>
         </div>

      </div>
   )
}

export default Contacts;