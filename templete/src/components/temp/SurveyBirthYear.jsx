import React, { useEffect, useState } from 'react'
import { Button, Row, Col, Container } from 'reactstrap';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

const SurveyBirthYear = ({selectAgeArange, submitAge}) => {

  const [yearList, setYearList] = useState([])

  let list = []

  useEffect(()=>{
      addList();
      setYearList(list)
  },[])

  const addList = ()=> {
      for(let i = 1930 ; i <= 2013 ; i++){
          list.push(i)
      }
  }

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <div className="wrapper">
            <div className="middle-spacer survey-year">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="7" className="text-center">
                            <h1 className="title font-bold">연령대를 알려주세요.</h1>
                        </Col>
                    </Row>
                </Container>

                <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                  <DropdownToggle caret size="lg">
                    연령대 선택
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem onClick={selectAgeArange} value="10">10대</DropdownItem>
                    <DropdownItem onClick={selectAgeArange} value="20">20대</DropdownItem>
                    <DropdownItem onClick={selectAgeArange} value="30">30대</DropdownItem>
                    <DropdownItem onClick={selectAgeArange} value="40">40대</DropdownItem>
                    <DropdownItem onClick={selectAgeArange} value="50">50대</DropdownItem>
                    <DropdownItem onClick={selectAgeArange} value="60">60대 이상</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
            <Button color="success" size='lg' onClick={submitAge}>다음</Button>
            </div>
        </div>
  )
}

export default SurveyBirthYear