import Image from 'next/image';
import styles from './styles.module.scss';

const AccreditationSection = () => {
    return (
        <div className="col-lg-12 d-flex justify-content-center">
            <div className={styles.accredited}>
                <div>
                    <label>
                        WE ARE <br /> ACCREDITED BY
                    </label>
                    <p>★★★★★</p>
                </div>
                <div className={styles.accreditedImg}>
                    <div className={styles.accreditedItem}>
                        <Image
                            src="/images/skill-india.png"
                            alt="Skill India"
                            width={67}
                            height={88}
                        />
                    </div>
                    <div className={styles.accreditedItem}>
                        <Image
                            src="/images/media-skills-council.png"
                            alt="Media Skill Council India"
                            width={76}
                            height={72}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccreditationSection;