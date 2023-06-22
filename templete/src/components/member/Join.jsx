import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, ButtonGroup } from 'reactstrap';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button, FormFeedback } from 'reactstrap';
import {useNavigate} from 'react-router-dom'
const Join = () => {

  
  const [id, setId] = useState('')
  const [pw, setPw] = useState('')
  const [pw2, setPw2] = useState('')
  const [gender, setGender] = useState('')
  const [age, setAge] = useState('10대')
  
  const nav = useNavigate()
  
  // useEffect(()=>{
  //   console.log(id);
  // }, [id])
  // useEffect(()=>{
  //   console.log(pw);
  // }, [pw])
  // useEffect(()=>{
  //   console.log(pw2);
  // }, [pw2])
  // useEffect(()=>{
  //   console.log(gender);
  // }, [gender])
  // useEffect(()=>{
  //   console.log(age);
  // }, [age])

    const joinUserInfo = {
      id: `${id}`,
      pw: `${pw}`,
      gender: `${gender}`,
      age: `${age}`
    }

    const submitClick = () => {
      console.log('회원가입 버튼 클릭');
      // 데이터 모두 입력했는지 확인
      if(id == '' || pw == '' || pw2 == '' || gender == '' || age == '') {
        alert('회원가입 정보를 모두 입력해주세요!')
      } else {
        console.log('스프링으로 넘기는 값 :', joinUserInfo);
        axios.post('http://localhost:8085/haru/join', joinUserInfo)
        .then(res => {
          console.log('통신성공' , res.data);

          if(JSON.stringify(res.data) === '{}') {
            alert('이미 등록된 회원입니다!')
            nav('/haru/preview')
          } else if (res.data.joinMember.user_id === id) {
            alert('회원가입이 완료되었습니다! 로그인 진행해주세요.')
            nav('/haru/main')
          } else {
            alert('다시 시도해주세요.')
          }
        })
        .catch(e => console.log(e))     
      }  
    }

  return (
    <div>
      <div className="spacer" id="forms-component">
    <Container>
        <Row className="justify-content-center">
            <Col md="7" className="text-center">
                <h1 className="title font-bold">회원가입</h1>
            </Col>
        </Row>
    </Container>
</div>
<Container>
    <Row>
        <Col md="12">
            <Form className="row">
                <FormGroup className="col-md-6">
                    <Label htmlFor="name">ID</Label>
                    <Input type="text" onChange={(e)=>{setId(e.target.value)}} className="form-control" id="name" placeholder="ID" />
                </FormGroup>

                <FormGroup className="col-md-6">
                    <Label htmlFor="password">Password</Label>
                    <Input type="password" onChange={(e)=>{setPw(e.target.value)}} className="form-control" id="password" placeholder="Password" />
                </FormGroup>
                <FormGroup className="col-md-6">
                    <Label htmlFor="confirmpwd">Confirm Password</Label>
                    <Input type="password" onChange={(e)=>{setPw2(e.target.value)}} className="form-control" id="confirmpwd" placeholder="Confirm Password" />                   
                </FormGroup>

                <div className="col-md-6">
                <FormGroup check >
                  <Input
                    name="gender"
                    type="radio"
                    onChange={(e)=>{setGender(e.target.value)}}
                    value='F'
                  />
                  {' '}
                  <Label check>
                    여성
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Input
                    name="gender"
                    type="radio"
                    onChange={(e)=>{setGender(e.target.value)}}
                    value='M'
                  />
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
                    id="birth-year-join"
                    name="birth-yaer"
                    type="select"
                    value={age}
                    onChange={(e)=>{setAge(e.target.value)}}
                  >
                    <option value="10대">
                      10대
                    </option>
                    <option value="20대">
                      20대
                    </option>
                    <option value="30대">
                      30대
                    </option>
                    <option value="40대">
                      40대
                    </option>
                    <option value="50대">
                      50대
                    </option>
                    <option value="60대 이상">
                      60대 이상
                    </option>
                  </Input>
                </FormGroup>
                <FormGroup className="col-md-12 ml-3">
                    <Input id="checkbox1" type="checkbox" />
                    <Label htmlFor="checkbox1"> Remember me </Label>
                </FormGroup>
                <Col md="12">
                    <Button onClick={submitClick} className="btn btn-success waves-effect waves-light m-r-10">회원가입</Button>
                    <Button type="reset" className="btn btn-inverse waves-effect waves-light">초기화</Button>
                </Col>
            </Form>
        </Col>
    </Row>
</Container>
    </div>
  )
}

export default Join