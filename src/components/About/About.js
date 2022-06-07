import styles from './About.module.scss';

import { AiOutlineBulb, AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { BsJoystick } from 'react-icons/bs';

function About() {
    return (
        <div className={styles.about} id="about">
            <div className={styles.container}>
                <div className={styles.heading}>
                    <h3 className={styles.title}>ABOUT US</h3>
                </div>
                <div className={styles.aboutList}>
                    <div className={styles.aboutItem}>
                        <div href="#" className={styles.aboutItemHeading}>
                            <div className={styles.aboutItemIcon}>
                                <AiOutlineBulb strokeWidth="0" />
                            </div>
                            <a href="#">
                                <h4 className={styles.aboutItemTitle}>Creative Design</h4>
                            </a>
                        </div>
                        <p className={styles.aboutItemDes}>
                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur at aut odit aut fugit sed quia
                            consequuntur magni.
                        </p>
                    </div>
                    <div className={styles.aboutItem}>
                        <div href="#" className={styles.aboutItemHeading}>
                            <div className={styles.aboutItemIcon}>
                                <AiOutlineFundProjectionScreen strokeWidth="0" />
                            </div>
                            <a href="#">
                                <h4 className={styles.aboutItemTitle}>Strategy Solutions</h4>
                            </a>
                        </div>
                        <p className={styles.aboutItemDes}>
                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur at aut odit aut fugit sed quia
                            consequuntur magni.
                        </p>
                    </div>
                    <div className={styles.aboutItem}>
                        <div href="#" className={styles.aboutItemHeading}>
                            <div className={styles.aboutItemIcon}>
                                <BsJoystick strokeWidth="0" />
                            </div>
                            <a href="#">
                                <h4 className={styles.aboutItemTitle}>Dynamic Growth</h4>
                            </a>
                        </div>
                        <p className={styles.aboutItemDes}>
                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur at aut odit aut fugit sed quia
                            consequuntur magni.
                        </p>
                    </div>
                </div>
                <div className={styles.aboutInfomation}>
                    <div className={styles.aboutContent}>
                        <h3 className={styles.aboutContentTitle}>Performancect Solution For Small Businesses</h3>
                        <p className={styles.aboutContentText}>
                            Temporibus autem quibusdam a aut officiis debitis rerum necessitatibus saepeeveniet ut et
                            voluptates repudiandae sint a molestiae recusandae itaque earum rerum hic tenetur a sapiente
                            delectus ut at aut reiciendis voluptatibus maiores alias consequatur perferendis doloribus
                            asperiores rerum necessitat saepeeveniet.
                        </p>
                        <div className={styles.aboutContentFooter}>
                            <p>Learn More</p>
                            <a href="#">About Us</a>
                        </div>
                    </div>
                    <div className={styles.aboutContentImg}>
                        <img
                            src="https://themes.themesbrand.com/zooki/react/static/media/about-img.cb735e1c0599d2b5739c.jpg"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
