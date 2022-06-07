import styles from './Features.module.scss';
import { FaReact, FaArrowRight } from 'react-icons/fa';
import clsx from 'clsx';

function Features() {
    return (
        <>
            <div className={styles.feature} id="features">
                <div className={styles.container}>
                    <h3 className={styles.title}>OUR FEATURES</h3>
                    <div className={styles.featureItem}>
                        <div className={styles.featureItemContent}>
                            <div className={styles.featureItemIcon}>
                                <FaReact />
                            </div>
                            <h3 className={styles.featureItemTitle}>Marketing Performance</h3>
                            <p className={styles.featureItemDes}>
                                Itaque earum rerum hic tenetur sapiente delectut reiciendis voluptatibus perspiciatis
                                unde omnis iste natus error sit maiores alias consequatur perferendisthat doloribus
                                asperiores repellat.
                            </p>
                            <p className={styles.featureItemDes}>
                                Nam libero tempore cum soluta nobis eligendi optio cumque nihil impedit minusidquod
                                maxime placeat facere possimus.
                            </p>
                            <a href="#" className={styles.learnMoreBtn}>
                                LEARN MORE
                                <FaArrowRight />
                            </a>
                        </div>
                        <div className={styles.featureItemThumnail}>
                            <img
                                src="https://themes.themesbrand.com/zooki/react/static/media/img-1.1bb1c555fb21d91778ad.png"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className={clsx(styles.feature, styles.reverse)} id="features">
                <div className={styles.container}>
                    <div className={styles.featureItem}>
                        <div className={styles.featureItemContent}>
                            <div className={styles.featureItemIcon}>
                                <FaReact />
                            </div>
                            <h3 className={styles.featureItemTitle}>Marketing Performance</h3>
                            <p className={styles.featureItemDes}>
                                Itaque earum rerum hic tenetur sapiente delectut reiciendis voluptatibus perspiciatis
                                unde omnis iste natus error sit maiores alias consequatur perferendisthat doloribus
                                asperiores repellat.
                            </p>
                            <p className={styles.featureItemDes}>
                                Nam libero tempore cum soluta nobis eligendi optio cumque nihil impedit minusidquod
                                maxime placeat facere possimus.
                            </p>
                            <a href="#" className={styles.learnMoreBtn}>
                                LEARN MORE
                                <FaArrowRight />
                            </a>
                        </div>
                        <div className={styles.featureItemThumnail}>
                            <img
                                src="https://themes.themesbrand.com/zooki/react/static/media/img-1.1bb1c555fb21d91778ad.png"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.feature} id="features">
                <div className={styles.container}>
                    <div className={styles.featureItem}>
                        <div className={styles.featureItemContent}>
                            <div className={styles.featureItemIcon}>
                                <FaReact />
                            </div>
                            <h3 className={styles.featureItemTitle}>Marketing Performance</h3>
                            <p className={styles.featureItemDes}>
                                Itaque earum rerum hic tenetur sapiente delectut reiciendis voluptatibus perspiciatis
                                unde omnis iste natus error sit maiores alias consequatur perferendisthat doloribus
                                asperiores repellat.
                            </p>
                            <p className={styles.featureItemDes}>
                                Nam libero tempore cum soluta nobis eligendi optio cumque nihil impedit minusidquod
                                maxime placeat facere possimus.
                            </p>
                            <a href="#" className={styles.learnMoreBtn}>
                                LEARN MORE
                                <FaArrowRight />
                            </a>
                        </div>
                        <div className={styles.featureItemThumnail}>
                            <img
                                src="https://themes.themesbrand.com/zooki/react/static/media/img-1.1bb1c555fb21d91778ad.png"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Features;
