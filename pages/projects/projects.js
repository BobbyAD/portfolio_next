import React from 'react'
import { Project } from "./project"

import styles from "../../styles/projects.less"

export const Projects = () => {
    return (
        <div className={styles.projectsContainer}>
            <Project />
        </div>
    )
}
