import clsx from 'clsx';
import styles from './Contact.module.scss';
import { BsHeadphones, BsFacebook } from 'react-icons/bs';

function Contact() {
    return (
        <div className={styles.contact} id="contact">
            <div className={styles.container}>
                <h3 className={styles.title}>GET IN TOUCH</h3>
                <div className={styles.contactBox}>
                    <form name="formMessage" className={styles.contactForm}>
                        <p className={styles.errorMessage}>Error Message</p>
                        <div className={styles.contactFormContainer}>
                            <div className={clsx(styles.contactInput, styles.contactInputName)}>
                                <input type="text" placeholder="Name" name="name" />
                            </div>
                            <div className={clsx(styles.contactInput, styles.contactInputEmail)}>
                                <input type="email" placeholder="Email" name="email" />
                            </div>
                            <div className={clsx(styles.contactInput, styles.contactInputSubject)}>
                                <input type="text" placeholder="Subject" name="subject" />
                            </div>
                            <div className={clsx(styles.contactInput, styles.contactInputMessage)}>
                                <textarea placeholder="Message" name="message" />
                            </div>
                            <div className={styles.sendBtnContainer}>
                                <button type="submit" className={styles.sendBtn}>
                                    SEND MESSAGE
                                </button>
                            </div>
                        </div>
                    </form>
                    <div className={styles.contactInfo}>
                        <div className={styles.contactDetails}>
                            <div className={styles.contactDetailsIcon}>
                                <BsHeadphones />
                            </div>
                            <div className={styles.contactDetailsText}>
                                <p>Contact</p>
                                <p>012-345-6789</p>
                            </div>
                        </div>
                        <div className={styles.contactDetails}>
                            <div className={styles.contactDetailsIcon}>
                                <BsHeadphones />
                            </div>
                            <div className={styles.contactDetailsText}>
                                <p>Contact</p>
                                <p>012-345-6789</p>
                            </div>
                        </div>
                        <div className={styles.contactDetails}>
                            <div className={styles.contactDetailsIcon}>
                                <BsHeadphones />
                            </div>
                            <div className={styles.contactDetailsText}>
                                <p>Contact</p>
                                <p>012-345-6789</p>
                            </div>
                        </div>
                        <div className={styles.contactFollow}>
                            <h3 className={styles.contactFollowTitle}>Follow</h3>
                            <div className={styles.contactFollowIcon}>
                                <a href="#">
                                    <BsFacebook />
                                </a>
                                <a href="#">
                                    <BsFacebook />
                                </a>
                                <a href="#">
                                    <BsFacebook />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
