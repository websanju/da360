import Image from 'next/image';
import styles from './styles.module.scss';

const AccreditationSection = () => {
    return (
        <div className="container">
            <div className='row'>
                <div className='col-lg-12 d-flex justify-content-center'>
                    <div className={styles.accreditationSection}>
                        <div className={styles.accreditationHeader}>
                            <label>
                                WE ARE ACCREDITED BY
                            </label>
                            <p>★★★★★</p>
                        </div>
                        <div className={styles.accredited}>
                            <div className={styles.accreditedImg}>
                                <div className={styles.accreditedItem}>
                                    <Image
                                        src="/images/skill-india.svg"
                                        alt="Skill India"
                                        width={106}
                                        height={126}
                                    />
                                </div>
                                <div className={styles.accreditedItem}>
                                    <Image
                                        src="/images/media.svg"
                                        alt="Media Skill Council India"
                                        width={107}
                                        height={102}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccreditationSection;