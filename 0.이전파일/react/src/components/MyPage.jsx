import React from 'react'
import { Link } from 'react-router-dom'

const MyPage = () => {
  return (
    <div>
      <Link to='/updatemember'>회원정보수정</Link>
      <Link to='/deletemember'>회원탈퇴</Link>
    </div>
  )
}

export default MyPage