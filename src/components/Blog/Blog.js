import styles from './Blog.module.scss';
import { AiOutlineArrowRight } from 'react-icons/ai';

function Blog() {
    return (
        <div className={styles.blog} id="blog">
            <div className={styles.container}>
                <h3 className={styles.title}>THE BLOG</h3>
                <ul className={styles.blogList}>
                    {[...new Array(3)].map((item, index) => {
                        return (
                            <li className={styles.blogItem} key={index}>
                                <div className={styles.blogItemContainer}>
                                    <p className={styles.blogItemDate}>01 Jan 2019</p>
                                    <img
                                        src="https://themes.themesbrand.com/zooki/react/static/media/img-1.f19acca3adc39c364415.jpg"
                                        alt=""
                                        className={styles.blogItemImg}
                                    />
                                    <div className={styles.blogItemContent}>
                                        <p className={styles.blogItemPos}>UI/UX DESIGNER</p>
                                        <a href="#" className={styles.blogItemTitle}>
                                            Quis autem reprehenderit
                                        </a>
                                        <p className={styles.blogItemDes}>
                                            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                                            deleniti corrupti.
                                        </p>
                                        <div className={styles.readMoreBtnContainer}>
                                            <a href="#" className={styles.readMoreBtn}>
                                                Read more
                                            </a>
                                            <AiOutlineArrowRight />
                                        </div>
                                    </div>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

export default Blog;
