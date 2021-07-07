import React from 'react';
import styles from './contacts.module.css';

const Contacts = ({ contacts }) => {
   return (
      <div className={styles.wrapper}>

         <a href={contacts.email} className={styles.mail}>{contacts.email}</a>
         <a href={contacts.facebook} className={styles.facebook}>{contacts.facebook}</a>
         <a href={contacts.linkedin} className={styles.linkedin}>{contacts.linkedin}</a>
         <a href={contacts.github} className={styles.github}>{contacts.github}</a>
         <a href={contacts.skype} className={styles.skype}>{contacts.skype}</a>
         <a href={contacts.telephone_number} className={styles.number}>{contacts.telephone_number}</a>
         <a href={contacts.telephone_number} className={styles.telegram}>telegram</a>
         <a href={contacts.telephone_number} className={styles.viber}>viber</a>
         <span className={styles.location}>{contacts.location}</span>
      </div>
   )
}

export default Contacts;