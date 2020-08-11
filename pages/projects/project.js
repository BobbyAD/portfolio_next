import React from "react";

import styles from "../../styles/projects.less";

export const Project = () => {
    return (
        <section className={styles.projectContainer}>
            <div className={styles.imageContainer}>
                <img
                    className={styles.projectImage}
                    src="https://bobbyad.dev/static/6e587ecd49c7974c385cc308b81a1727/68386/gnarly_funky_01.jpg"
                />
            </div>
            <div className={styles.projectInfo}>
                <header className={styles.projectHeader}>asdf</header>
                <summary className={styles.projectDescription}>
                    Nostrud anim velit exercitation officia adipisicing officia
                    nisi. Id ipsum nulla nulla mollit et excepteur nostrud
                    ullamco consequat nostrud. Est non deserunt ullamco aliquip
                    irure veniam. Ad laborum qui culpa incididunt sit eu ut sit
                    voluptate laboris. Pariatur sint et mollit amet dolor veniam
                    ipsum laboris cillum.
                </summary>
            </div>
        </section>
    );
};
