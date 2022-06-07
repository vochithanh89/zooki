import styles from './Clients.module.scss';
import './CustomSwiper.scss';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper';

function Clients() {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };

    return (
        <div className={styles.clients} id="clients">
            <div className={styles.container}>
                <h3 className={styles.title}>OUR CLIENTS</h3>
                <ul className={styles.clientSwiper}>
                    <Swiper
                        // pagination={pagination}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        loop={true}
                        loopFillGroupWithBlank={true}
                        spaceBetween={20}
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                                slidesPerGroup: 1,
                            },
                            768: {
                                slidesPerView: 2,
                                slidesPerGroup: 2,
                            },
                        }}
                        className="mySwiper"
                    >
                        {[...new Array(6)].map((item, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <div className={styles.clientSwiperItem}>
                                        <div className={styles.clientSwiperItemBox}>
                                            <div className={styles.clientSwiperItemHeading}>
                                                <h3 className={styles.clientSwiperItemTitle}>"Best Designer"</h3>
                                                <img
                                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAmCAYAAACGeMg8AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjc0RTA4MjRCMUVEMzExRTk4N0M4QTE3MDJGNTk5Q0NFIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjc0RTA4MjRDMUVEMzExRTk4N0M4QTE3MDJGNTk5Q0NFIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NzRFMDgyNDkxRUQzMTFFOTg3QzhBMTcwMkY1OTlDQ0UiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NzRFMDgyNEExRUQzMTFFOTg3QzhBMTcwMkY1OTlDQ0UiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4P10moAAAEgklEQVR42tyZeYhNcRTH732DGYzR2Jf5Y0L2LXtCRkN2WZPEKFEi2XKzhchNmShLUmRJZDCWYSSTjCVmENkjS5Mly2AYu+t77jtTb26/313e7/7l1OfOm/vuO7/3/a3nnKdblqX9D1bF8wlTT8W1P9MUVAVl4A7IB7fBX4XvkAg6gz6gOf//DhSDS5phvQxHiKZ1AyP4b33+TDlIAzScpeC5gpBWYAgLqeioT6AR0NGRpyGmzMuJLp1app6O6wowDDRw8XEL7ADbAo5MXbAQjAMtJM+U8chsgphjwYWYentcd/Eo+LFfYDeYz417GX3x7WCAT/80QhvAOgj67W9qmToN6c4AIjSeDtN5RGaBPy7P1mH/fQP4rw1W8lReI3ogIri3HHSPc77PANPcZgBYHFBE7Hddio4e4j61TJ1Gpy04B+opLN6HvMO9FrxHU/YMaKLgvwhkYIp9lY1IBzAFpCpu6S3BJMl7mYoiNJ4to9DxEZmQHqA3SFBsiKbPcFBDsI66a+HYBNBQJqQxL8QwrBkfbrGW7LGNB7GuoI1MiC5Z/PEYnRHpjnsJPg9gP5bC0YBQCC2ebyE1lCxYCz9D9F+dIwKhkA/gc4hxXIrj/3I+2MKKERvIhNC2eV8xAHQ7bOlEfhaSb1oG1WRCboBcnmJhmMgPxU0/QvBNnf1FLCR6wJwFF0NoiEKU94L757nDVI1iu1fyEMWw6IFl4IViQx+BKI8gcas531Ax2jQeu8dahkU9NpnDcxUhJZL38jmwLFHwT5vSXa+gkcQU4joabIlzy3zkkWwdAmPB0TiFPOA2PIRExTzFdS4YCvYF3ASu8bnh9UwWmAguBBRyCbz1lyFWzlGScO1I8uyAzT0CKOWs8oqvr2RY5L8WXg3ijLGXxye+g374XJG/Eanc2HdAPTieNwO3LfQ6b7P+jXJywzqMV4M5bXZLzGja3/STWLk1SA2sBydcntrL22NwM6xPPCoFLk/tEaW7kTga+8MRgCY58I4obayGRTvSZRf/eX5TXa/1kshhtNNosZnOEzcO/zVxbSfxT9WU0nCERBe7qPpxUNZbAS2D62hOy3Mb7UjA3qKcfhVIEpwbq3hHURmNNPaT6HjnhX3fsMrVhZg6VRk3gtaCItoiPqRURNAWvBl0EWy3yyCi2KvE4qeR2tzIQEHhbDY4riiiuj3/o9PWKWIRROz1jOs9D8Ro6TSbQ5ZYo9xiHof+KpbK/rMEAeYCiNjtt+jlJoLCk2MCEQV27xmWqoie7N8pgg68MX5FaNJigKlTgW4JmOko63zmKZCNRj4qCKjJU3K+I2X9YR94VB71+XOCXIipD+TzoIujgUI7l4hGxqqjQPXbTMf9IjtqMKwctbza1DvZwZimrQW1YlLKixx2UGjwU0EA5dkjwVZHhYV+KDpgx1iGFXfCFTsic8BUvveWRyDXjqvUplGF1efssAnvRlfBSZAD/8pFiVgh+/lgS+Qs7p6zUKxodJid4mrNPhbyxg7jQy7ZlPDCpntPQhZRUaB7wuvtoaQ4Ebf9E2AAoZ5BQwPOsjoAAAAASUVORK5CYII="
                                                    alt=""
                                                />
                                            </div>
                                            <p className={styles.clientSwiperItemDes}>
                                                At vero eos et accusamus et iusto odio dignissimos that site ducimus qui
                                                blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
                                                quas molestias excepturi cupiditate non.
                                            </p>
                                        </div>
                                        <div className={styles.clientSwiperItemUser}>
                                            <div className={styles.clientSwiperItemInfo}>
                                                <p className={styles.clientSwiperItemUserName}>Jonas David</p>
                                                <p className={styles.clientSwiperItemUserPos}>Web Design</p>
                                            </div>
                                            <img
                                                src="data:image/jpeg;base64,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"
                                                alt=""
                                                className={styles.clientSwiperItemUserImg}
                                            />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </ul>
            </div>
        </div>
    );
}

export default Clients;
