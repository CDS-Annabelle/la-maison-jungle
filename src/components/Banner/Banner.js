import React from "react";
import styles from "./Banner.module.scss";
import logo from "../../assets/images/logo-lamaison-jungle.png";

const Banner = () => {
    const title = "La maison jungle"
    return(
        <div className={styles.header}>
            <img src={logo} alt="la maison jungle" className={styles.logo} />            
            <h1 className={styles.titleHeader}>{title.toUpperCase()}</h1>
        </div>
    )
}

export default Banner;