import styles from './Services.module.scss';
import { BsPalette, BsArrowRight } from 'react-icons/bs';

function Services() {
    const services = [
        {
            title: 'Awesome Support',
            description:
                'Sed ut perspiciatis unde sit omnise iste natus voluptatem site accusantium doloremque laudantium combined with a handful totam.',
            icon: <BsPalette />,
        },
        {
            title: 'Awesome Support',
            description:
                'Sed ut perspiciatis unde sit omnise iste natus voluptatem site accusantium doloremque laudantium combined with a handful totam.',
            icon: <BsPalette />,
        },
        {
            title: 'Awesome Support',
            description:
                'Sed ut perspiciatis unde sit omnise iste natus voluptatem site accusantium doloremque laudantium combined with a handful totam.',
            icon: <BsPalette />,
        },
        {
            title: 'Awesome Support',
            description:
                'Sed ut perspiciatis unde sit omnise iste natus voluptatem site accusantium doloremque laudantium combined with a handful totam.',
            icon: <BsPalette />,
        },
        {
            title: 'Awesome Support',
            description:
                'Sed ut perspiciatis unde sit omnise iste natus voluptatem site accusantium doloremque laudantium combined with a handful totam.',
            icon: <BsPalette />,
        },
        {
            title: 'Awesome Support',
            description:
                'Sed ut perspiciatis unde sit omnise iste natus voluptatem site accusantium doloremque laudantium combined with a handful totam.',
            icon: <BsPalette />,
        },
    ];

    return (
        <section id="services" className={styles.services}>
            <div className={styles.container}>
                <h3 className={styles.serviceTitle}>OUR SERVICES</h3>
                <ul className={styles.serviceList}>
                    {services.map((service, index) => {
                        return (
                            <li className={styles.serviceItem} key={index}>
                                <div className={styles.serviceItemContainer}>
                                    <div className={styles.serviceItemHeading}>
                                        <div className={styles.serviceItemIcon}>{service.icon}</div>
                                        <a href="#">
                                            <h3 className={styles.serviceItemTitle}>{service.title}</h3>
                                        </a>
                                    </div>
                                    <p className={styles.serviceItemDes}>{service.description}</p>
                                    <a href="#" className={styles.serviceItemLearnMore}>
                                        LEARN MORE
                                        <BsArrowRight />
                                    </a>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
}

export default Services;
