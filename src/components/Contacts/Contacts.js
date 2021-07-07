import React from 'react';
import styles from './contacts.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faGithubSquare, faLinkedin, faSkype, faTelegram, faViber } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faCompass } from "@fortawesome/free-regular-svg-icons";

const Contacts = ({ contacts }) => {
   return (
      <div className={styles.wrapper}>
         <a href={`mailto:` + contacts.email} className={styles.emailWrapper}>
            <FontAwesomeIcon icon={faEnvelope} />
            <span className={styles.email}> {contacts.email}</span>
         </a>
         <div className={styles.socialMediaWrapper}>
            <a href={contacts.facebook} className={styles.facebook}>
               <FontAwesomeIcon icon={faFacebookSquare} />
            </a>

            <a href={contacts.linkedin} className={styles.linkedin}>
               <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href={contacts.github} className={styles.github}>
               <FontAwesomeIcon icon={faGithubSquare} />
            </a>
            <a href={contacts.skype} className={styles.skype}>
               <FontAwesomeIcon icon={faSkype} />
            </a>
         </div>
         <div className={styles.phoneWrapper}>
            <a href={`tg://resolve?domain=` + contacts.telephone_number} className={styles.telegram}>
               <FontAwesomeIcon icon={faTelegram} />
            </a>
            <a href={`viber://add?number=` + contacts.telephone_number} className={styles.viber}>
               <FontAwesomeIcon icon={faViber} />
            </a>
            <a href={'tel:' + contacts.telephone_number} className={styles.number}>
               {contacts.telephone_number}
            </a>

         </div>

         <div className={styles.locationWrapper}>
            <FontAwesomeIcon icon={faCompass} />
            <span className={styles.location}>{contacts.location}</span>
         </div>

      </div>
   )
}

export default Contacts;