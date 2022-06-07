import styles from './Body.module.scss';
import Home from '../Home/Home';
import { useEffect } from 'react';
import About from '../About/About';
import Services from '../Services/Services';
import Features from '../Features/Features';
import Pricing from '../Pricing/Pricing';
import Clients from '../Clients/Clients';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';

function Body() {
    useEffect(() => {
        document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth',
                });
            });
        });
    }, []);

    return (
        <div className={styles.body}>
            <Home />
            <About />
            <Services />
            <Features />
            <Pricing />
            <Clients />
            <Blog />
            <Contact />
        </div>
    );
}

export default Body;
