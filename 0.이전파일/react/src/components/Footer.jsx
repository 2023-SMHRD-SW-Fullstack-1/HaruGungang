import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <div className='footer-container'>
      <div className='footer-item'>
        <Link to='/mypage'>마이페이지</Link>
      </div>
      <div className='footer-item'>
        <Link to='/main'>메인</Link>
      </div>
      <div className='footer-item'>
        <Link to='/wishlist'>찜목록</Link>
      </div>

    </div>
    </div>
  )
}

export default Footer