import React, {useEffect} from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router'

const Login = ({ KAKAO_AUTH_URL }) => { 

  const nav = useNavigate()

  const [id, setId] = useState('')
  const [pw, setPw] = useState('')

  // useEffect(()=>{
  //   console.log('ID :', id);
  // }, [id])
  // useEffect(()=>{
  //   console.log('PW :', pw);
  // }, [pw])

  const loginUserInfo = {
    id: `${id}`,
    pw: `${pw}`
  }

  const loginClick = () => {
    console.log('로그인 버튼 클릭!');

    if (id == '' || pw == '') {
      alert('아이디, 또는 비밀번호를 입력해주세요!')
    } else {
      console.log('스프링으로 넘기는 값 :', loginUserInfo);
        axios.post('http://localhost:8085/haru/login', loginUserInfo)
        .then(res => {
          console.log('통신성공' , res.data);

          sessionStorage.setItem('id', res.data.loginMember.user_id)
          sessionStorage.setItem('pw', res.data.loginMember.user_pw)
          sessionStorage.setItem('gender', res.data.loginMember.user_gender)
          sessionStorage.setItem('age', res.data.loginMember.user_age)
          sessionStorage.setItem('type', res.data.loginMember.user_type)

          console.log('세션 저장 성공, 아이디 :', sessionStorage.getItem('id'));
          console.log('세션 저장 성공, 패스워드 :', sessionStorage.getItem('pw'));
          console.log('세션 저장 성공, 성별 :', sessionStorage.getItem('gender'));
          console.log('세션 저장 성공, 연령대 :', sessionStorage.getItem('age'));
          console.log('세션 저장 성공, 유저타입 :', sessionStorage.getItem('type'));

          alert('로그인 성공')

          // setIsOpen(!isOpen)

          nav('/haru/main')
        })
        .catch(e => console.log(e))
    }
  }

  return (
    <div className='main_login'>
      <h2>하루건강</h2>
      <p className='info'>로그인 후 이용하실 수 있습니다.</p>
      <fieldset>
        <legend>로그인 입력 폼</legend>
        <p className='id_field'>
          <label for="uid" id="uid_label" style={{display: 'block'}}>
            <span className="zh" data-translate="아이디">아이디</span>
          </label>
          <input onChange={(e)=>{setId(e.target.value)}} id="uid" name="uid" type="text" title="아이디입력" maxLength="50" tabindex="1"/>
        </p>
        <p className="pw_field">
            <label for="password" id="pass_label">
              <span className="zh" data-translate="비밀번호">비밀번호</span>
            </label>
            <input onChange={(e)=>{setPw(e.target.value)}} id="password" name="password" type="password" title="비밀번호입력" maxlength="15" tabindex="2" />
            <span className="caps_Lock" style={{display: 'none'}}>
                <em></em>
                <strong>Caps Lock</strong>이 켜져 있습니다.
            </span>
        </p>
        <p className="login_btn">
            <button type="button" onClick={loginClick} tabindex="3">
              <span className="zh" data-translate="로그인">로그인</span>
            </button>
        </p>
        <div className='signup_area'>
          <a className='naver' href='https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=4aWJJDtBTDQlg2SlFym8&state=STATE_STRING&redirect_uri=http://localhost:8081/auth/naver/callback'>
            <em></em>
            네이버로 로그인
          </a>
          <a className='kakao' href={KAKAO_AUTH_URL}>
            <em></em>
            카카오로 로그인
          </a>
        </div>
      </fieldset>
    </div>
  )
}

export default Login