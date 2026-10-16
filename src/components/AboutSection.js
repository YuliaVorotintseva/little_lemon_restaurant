import styles from "./AboutSection.module.css";

import { Title } from "./ui";

export const AboutSection = () => (
  <section className={styles.about}>
    <div className={styles.about_content}>
      <Title />
      <p>
        fcjmcdkmdics jcsdkcsdcm erjcsdiksdk ksdcmdsckmc ejcdmdscm erjvcdsmczm ecdnsdncsc
      </p>
    </div>
    <div className={styles.imgs}>
      <div className={styles.overflow}>
        <img src="/assets/cooks1.jpg" alt="Mario and Adrian" />
      </div>
      <div className={styles.behind}>
        <img src="/assets/cooks2.jpg" alt="Mario and Adrian" />
      </div>
    </div>
  </section>
)