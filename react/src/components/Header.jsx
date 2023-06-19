import React from 'react'
import { Link } from 'react-router-dom'
import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header1}>
        <div className={styles.joinParent}>
        <Link to='/join'><div className={styles.join}>JOIN</div></Link>
        <Link to='/login'><div className={styles.login}>LOGIN</div></Link>
        <Link to='/main'><div className={styles.vectorParent}>
            <img
              className={styles.groupChild}
              alt=""
              src="/rectangle-113.svg"
            />
            <div className={styles.harugungang}>HARUGUNGANG</div>
          </div></Link>
        </div>
      </div>
    </div>
  )
}

export default Header