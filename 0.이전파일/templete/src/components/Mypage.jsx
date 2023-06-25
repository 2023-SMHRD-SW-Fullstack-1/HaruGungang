import React, { useEffect, useReducer, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { NavItem, Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import axios from 'axios'

const Mypage = () => {
  const nav = useNavigate()

  // 패스워드 일치 여부
  const [isEqual, setIsEqual] = useState(false)

  // 회원 전체 정보 state 처리
  const [userId, setUserId] = useState('')
  const [userPw1, setUserPw1] = useState('')
  const [userPw2, setUserPw2] = useState('')
  const [userType, setUserType] = useState('')
  const [userGender, setUserGender] = useState('')
  const [userAge, setUserAge] = useState('')
  const [snsUserId, setSnsUserId] = useState('')
  const [snsUserName, setSnsUserName] = useState('')
  const [snsUserEmail, setSnsUserEmail] = useState('')
  const [snsUserGender, setSnsUserGender] = useState('')
  const [snsUserAge, setSnsUserAge] = useState('')

  // id로 회원 전체 정보 요청
  useEffect(()=>{
    const id = sessionStorage.getItem('id')
    setUserId(id);
    console.log('id 값 :', id);
    axios.get(`http://localhost:8085/haru/memberinfo/${id}`)
    .then(res => {
      console.log(res.data.HaruMember);
      setUserId(res.data.HaruMember.user_id)
      setUserPw1(res.data.HaruMember.user_pw)
      setUserType(res.data.HaruMember.user_type)
      setUserGender(res.data.HaruMember.user_gender)
      setUserAge(res.data.HaruMember.user_age)
      setSnsUserId(res.data.HaruMember.sns_user_id)
      setSnsUserName(res.data.HaruMember.sns_user_Name)
      setSnsUserEmail(res.data.HaruMember.sns_user_email)
      setSnsUserGender(res.data.HaruMember.sns_user_gender)
      setSnsUserAge(res.data.HaruMember.sns_user_age)

      // SNS로그인 유저일때
      if (userType == 'N' || userType == 'K' || userType == 'G'){
        console.log('1번');
        setUserId(res.data.HaruMember.sns_user_id)
        // 성별
        setUserGender(res.data.HaruMember.sns_user_gender)
        // 연령대
        setUserAge(res.data.HaruMember.sns_user_age)
      } else {
        console.log('2번');
        setSnsUserName(res.data.HaruMember.user_id)
      }
    })
    .catch(e => {
      console.log(e);
    })
  }, [])

  useEffect(()=>{
    if(userPw1 == userPw2) {
      setIsEqual(true)
    } else {
      setIsEqual(false)
    }
  }, [userPw1, userPw2])

  const updateUserInfo = {
    userId: `${userId}`,
    userPw: `${userPw1}`,
    userType: `${userType}`,
    userGender: `${userGender}`,
    userAge: `${userAge}`,
    snsUserId: `${snsUserId}`,
    snsUserName: `${snsUserName}`,
    snsUserEmail: `${snsUserEmail}`,
    snsUserGender: `${snsUserGender}`,
    snsUserAge: `${snsUserAge}`
  }

  const submitClick = () => {
    console.log('회원정보 수정 버튼 클릭!');
    if(isEqual == false){
      alert('비밀번호를 확인해주세요!')
    } else {
      console.log('스프링으로 넘길 값 :', updateUserInfo);
      axios.post('http://localhost:8085/haru/update', updateUserInfo)
      .then(res => {
        console.log('통신 성공', res);

        if (res.data == 1) {
          alert('회원정보 수정 성공! 다시 로그인해주세요')
          sessionStorage.clear()
          nav('/haru/main')
        }
      })
      .catch(e => {
        console.log(e);
      })
    }
  }

  return (
    <div>
      <div className="spacer" id="forms-component">
    <Container>
        <Row className="justify-content-center">
            <Col md="7" className="text-center">
                <h1 className="title font-bold">마이페이지</h1>
            </Col>
        </Row>
    </Container>
</div>
<Container>
    <Row>
        <Col md="12">
            <Form className="row">
                <FormGroup className="col-md-6">
                    <Label htmlFor="id">ID</Label>
                    <Input type="text" className="form-control" id="id" placeholder={userType == 'C' ? userId : snsUserId} disabled />
                </FormGroup>

                <FormGroup className="col-md-6">
                    <Label htmlFor="password">Password</Label>
                    <Input type="password" className="form-control" 
                    id="password" placeholder="Password" onChange={e => setUserPw1(e.target.value)}/>
                </FormGroup>
                <FormGroup className="col-md-6">
                    <Label htmlFor="confirmpwd">Confirm Password</Label>
                    <Input type="password" className="form-control" 
                    id="confirmpwd" placeholder="Confirm Password" onChange={e => setUserPw2(e.target.value)}
                    style={{ borderColor: isEqual ? 'green' : 'red' }} />
                </FormGroup>

                <div className="col-md-6">
                <FormGroup check >
                  <Input
                    type="radio" value="female" checked={userGender === 'F'} />
                  
                  {' '}
                  <Label check>
                    여성
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Input
                    type="radio" value="male" checked={userGender === 'M'} />
                  {' '}
                  <Label check>
                    남성
                  </Label>
                </FormGroup>
                </div>

                <FormGroup className="col-md-6">
                  <Label for="birth-year-join">
                    연령대 선택
                  </Label>
                  <Input
                    defaultValue={userAge}
                    id="birth-year-join"
                    name="birth-yaer"
                    type="select"
                    onChange={e=>{setUserAge(e.target.value)}}
                  >
                    <option value='10대'>
                      10대
                    </option>
                    <option value='20대'>
                      20대
                    </option>
                    <option value='30대'>
                      30대
                    </option>
                    <option value='40대'>
                      40대
                    </option>
                    <option value='50대'>
                      50대
                    </option>
                    <option value='60대 이상'>
                      60대 이상
                    </option>
                  </Input>
                </FormGroup>
                <Col md="12">
                    <Button onClick={submitClick} className="btn btn-success waves-effect waves-light m-r-10">Submit</Button>
                    <Button type="reset" className="btn btn-inverse waves-effect waves-light">Cancel</Button>
                    <Link className="nav-link" to={'/haru/delete'}>
                            회원탈퇴하러 가기
                    </Link>
                </Col>
            </Form>
        </Col>
    </Row>
</Container>
    </div>
  )
}

export default Mypage