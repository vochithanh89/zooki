import styles from './Home.module.scss';
import thumnail from '../../assets/image/thumnail.png';

function Home() {
    return (
        <section className={styles.home} id="home">
            <div className={styles.container}>
                <div className={styles.info}>
                    <h1 className={styles.title}>Make Your Marketing Real.</h1>
                    <p className={styles.description}>
                        Ut enim ad minima veniam quis nostrum exercitationem ullam corporis at suscipit laboriosam nisi
                        ut aliquid a commodi consequatur Quis autem.
                    </p>
                    <div className={styles.btnContainer}>
                        <a href="#" className={styles.learnMoreBtn}>
                            LEARN MORE
                        </a>
                    </div>
                </div>

                <img src={thumnail} alt="Thumnail" className={styles.thumnail} />
            </div>
        </section>
    );
}

export default Home;
