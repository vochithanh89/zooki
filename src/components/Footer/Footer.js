import clsx from 'clsx';
import styles from './Footer.module.scss';

function Footer() {
    return (
        <>
            <footer className={styles.footer}>
                <div className={styles.container}>
                    <div className={clsx(styles.footerItem, styles.aboutUs)}>
                        <h3 className={styles.title}>ABOUT US</h3>
                        <p className={styles.description}>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem that is doloremque totam that
                            laudantiume.
                        </p>
                    </div>
                    <div className={styles.footerItem}>
                        <h3 className={styles.title}>ABOUT US</h3>
                        <ul className={styles.footerSub}>
                            <li className={styles.footerSubItem}>
                                <a href="#">Monitoring Grader</a>
                            </li>
                            <li className={styles.footerSubItem}>
                                <a href="#">Job Opening</a>
                            </li>
                            <li className={styles.footerSubItem}>
                                <a href="#">Customers</a>
                            </li>
                            <li className={styles.footerSubItem}>
                                <a href="#">Privacy</a>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.footerItem}>
                        <h3 className={styles.title}>ABOUT US</h3>
                        <ul className={styles.footerSub}>
                            <li className={styles.footerSubItem}>
                                <a href="#">Monitoring Grader</a>
                            </li>
                            <li className={styles.footerSubItem}>
                                <a href="#">Job Opening</a>
                            </li>
                            <li className={styles.footerSubItem}>
                                <a href="#">Customers</a>
                            </li>
                            <li className={styles.footerSubItem}>
                                <a href="#">Privacy</a>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.footerItem}>
                        <h3 className={styles.title}>ABOUT US</h3>
                        <ul className={styles.footerSub}>
                            <li className={styles.footerSubItem}>
                                <a href="#">Monitoring Grader</a>
                            </li>
                            <li className={styles.footerSubItem}>
                                <a href="#">Job Opening</a>
                            </li>
                            <li className={styles.footerSubItem}>
                                <a href="#">Customers</a>
                            </li>
                            <li className={styles.footerSubItem}>
                                <a href="#">Privacy</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
            <div className={styles.footerInfo}>2022 © Zooki. Clone By CT03</div>
        </>
    );
}

export default Footer;
