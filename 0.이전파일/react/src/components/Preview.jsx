import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from "../styles/FirstPage.module.css";

const Preview = () => {

  const nav = useNavigate()

  return (
    <div className={styles.firstPage}>
            <div className={styles.parent}>
        <div className={styles.div}>
          <span className={styles.txt}>
            <p className={styles.p}>{`영양제! 언제? 뭐랑? `}</p>
            <p className={styles.p1}>먹으면 더 좋을까?</p>
          </span>
        </div>
        <div className={styles.div1}>•</div>
        <div className={styles.div2}>•</div>
        <div className={styles.div3}>•</div>
        <div className={styles.div4}>•</div>
      </div>
      <div className={styles.join}>JOIN</div>
      <div className={styles.login}>LOGIN</div>
      <div className={styles.vectorParent}>
        <img className={styles.groupChild} alt="" src="/rectangle-113.svg" />
        <div className={styles.harugungang}>HARUGUNGANG</div>
      </div>
      <img className={styles.openDoodlesIcon} alt="" src="/open-doodles.svg" />
      <div className={styles.lowerBarParent}>
        <div className={styles.lowerBar}>
          <div className={styles.lowerBarChild} />
          <div className={styles.mainParent}>
            <div className={styles.main}>Main</div>
            <div className={styles.wishList}>Wish List</div>
          </div>
          <div className={styles.mypage}>mypage</div>
        </div>
        <img className={styles.vectorIcon} alt="" src="/vector.svg" />
        <img
          className={styles.component10Icon}
          alt=""
          src="/component-10.svg"
        />
        <img
          className={styles.iconixtoboldcart}
          alt=""
          src="/iconixtoboldcart.svg"
        />
      </div>
      <div className={styles.buttonPrimary}>
        <div className={styles.calque12}>
          <img className={styles.vectorIcon1} alt="" src="/vector1.svg" />
          <Link to='/survey'>
          <div className={styles.div5}>
            <p className={styles.p}>{`설문하고 `}</p>
            <p className={styles.p}>추천받기</p>
          </div>
          </Link>
        </div>
      </div>
      <div className={styles.buttonPrimary1}>
        <div className={styles.calque12}>
          <img className={styles.vectorIcon1} alt="" src="/vector1.svg" />
          <div className={styles.div6}>
            <p className={styles.p}>영양제</p>
            <p className={styles.p}>정보보기</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Preview

