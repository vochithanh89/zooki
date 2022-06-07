import clsx from 'clsx';
import styles from './Pricing.module.scss';

function Pricing() {
    return (
        <div className={styles.pricing} id="pricing">
            <div className={styles.container}>
                <h3 className={styles.title}>OUR PRICING</h3>
                <ul className={styles.pricingList}>
                    <li className={styles.pricingItem}>
                        <div className={styles.pricingItemContainer}>
                            <div className={styles.pricingItemHeading}>
                                <p className={styles.pricingItemTitle}>Basic</p>

                                <p className={styles.pricingItemCount}>
                                    <sup>$</sup>19.00
                                </p>
                            </div>
                            <ul className={styles.pricingItemContent}>
                                <li className={styles.pricingItemPrice}>Bandwidth: 1.5GB</li>
                                <li className={styles.pricingItemPrice}>Bandwidth: 1.5GB</li>
                                <li className={styles.pricingItemPrice}>Bandwidth: 1.5GB</li>
                                <li className={styles.pricingItemPrice}>Bandwidth: 1.5GB</li>
                                <li className={styles.pricingItemPrice}>Bandwidth: 1.5GB</li>
                            </ul>
                            <a href="#" className={styles.pricingBtn}>
                                BUY NOW
                            </a>
                        </div>
                    </li>
                    <li className={clsx(styles.pricingItem, styles.active)}>
                        <div className={styles.pricingItemContainer}>
                            <div className={styles.pricingItemHeading}>
                                <p className={styles.pricingItemTitle}>Basic</p>

                                <p className={styles.pricingItemCount}>
                                    <sup>$</sup>19.00
                                </p>
                            </div>
                            <ul className={styles.pricingItemContent}>
                                <li className={styles.pricingItemPrice}>Bandwidth: 1.5GB</li>
                                <li className={styles.pricingItemPrice}>Bandwidth: 1.5GB</li>
                                <li className={styles.pricingItemPrice}>Bandwidth: 1.5GB</li>
                                <li className={styles.pricingItemPrice}>Bandwidth: 1.5GB</li>
                                <li className={styles.pricingItemPrice}>Bandwidth: 1.5GB</li>
                            </ul>
                            <a href="#" className={styles.pricingBtn}>
                                BUY NOW
                            </a>
                        </div>
                    </li>
                    <li className={styles.pricingItem}>
                        <div className={styles.pricingItemContainer}>
                            <div className={styles.pricingItemHeading}>
                                <p className={styles.pricingItemTitle}>Basic</p>

                                <p className={styles.pricingItemCount}>
                                    <sup>$</sup>19.00
                                </p>
                            </div>
                            <ul className={styles.pricingItemContent}>
                                <li className={styles.pricingItemPrice}>Bandwidth: 1.5GB</li>
                                <li className={styles.pricingItemPrice}>Bandwidth: 1.5GB</li>
                                <li className={styles.pricingItemPrice}>Bandwidth: 1.5GB</li>
                                <li className={styles.pricingItemPrice}>Bandwidth: 1.5GB</li>
                                <li className={styles.pricingItemPrice}>Bandwidth: 1.5GB</li>
                            </ul>
                            <a href="#" className={styles.pricingBtn}>
                                BUY NOW
                            </a>
                        </div>
                    </li>
                    <li className={styles.pricingItem}>
                        <div className={styles.pricingItemContainer}>
                            <div className={styles.pricingItemHeading}>
                                <p className={styles.pricingItemTitle}>Basic</p>

                                <p className={styles.pricingItemCount}>
                                    <sup>$</sup>19.00
                                </p>
                            </div>
                            <ul className={styles.pricingItemContent}>
                                <li className={styles.pricingItemPrice}>Bandwidth: 1.5GB</li>
                                <li className={styles.pricingItemPrice}>Bandwidth: 1.5GB</li>
                                <li className={styles.pricingItemPrice}>Bandwidth: 1.5GB</li>
                                <li className={styles.pricingItemPrice}>Bandwidth: 1.5GB</li>
                                <li className={styles.pricingItemPrice}>Bandwidth: 1.5GB</li>
                            </ul>
                            <a href="#" className={styles.pricingBtn}>
                                BUY NOW
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Pricing;
