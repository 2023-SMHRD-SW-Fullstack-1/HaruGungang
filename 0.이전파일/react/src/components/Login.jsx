import React from 'react'

const Login = () => {
  return (
    <div>
      Login
      <a href='https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=4aWJJDtBTDQlg2SlFym8&state=STATE_STRING&redirect_uri=http://localhost:8081/auth/naver/callback'>
        <img src='http://localhost:3000/img/btnG_완성형.png'/>
      </a>
      <a href='https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=9682bae209042aa5b5a5dde259553bc4&redirect_uri=http://localhost:8081/auth/kakao/callback'>
        <img src='http://localhost:3000/img/kakao_login_medium_narrow.png'/>
      </a>
    </div>
  )
}

export default Login