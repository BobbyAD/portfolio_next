import { Lower } from "./lower";

import styles from "../styles/home.less";

export default function Home() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.logo}>BobbyAD.dev</h1>
                <nav className={styles.navigation}>
                    <ul>
                        <li>asdf</li>
                    </ul>
                </nav>
            </header>
            <div className={styles.mainImage}>
                <section className={styles.information}>
                    <h1>
                        <strong>Hey! I'm Bobby!</strong>
                    </h1>
                    <p>
                        I am a professional designer and full stack developer.
                        Check out my projects below, or head over to my social
                        media.
                    </p>
                </section>
                <button className={styles.learn}>LEARN MORE</button>
            </div>
            <Lower />
            <div className={styles.test} />
            <div className={styles.test} />
        </div>
    );
}
