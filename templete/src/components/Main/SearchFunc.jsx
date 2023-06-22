import React from 'react'
import { Row, Col, Container, Card, CardBody } from 'reactstrap';
import DetailFunc from './DetailFunc';
import FloatDetailFunc from './FloatDetailFunc';
const SearchFunc = ({title, setTitle, nutri, setNutri, effect, setEffect, func, btnClick, visible, setVisible}) => {
  return (
    <div>

    <Container>
      <div className='box-container'>
        <div className="justify-content-center">
            <Col md="7" className="text-center">
              <br/>
                <h2 className="title font-bold">기능성으로 정보 찾기</h2>
            </Col>
        </div>
        <div className='detailFunc_container'>
        <Row className="m-t-40">
        <DetailFunc 
        title={title}
        setTitle={setTitle}
        nutri={nutri}
        setNutri={setNutri}
        effect={effect}
        setEffect={setEffect}
        func={func} btnClick={btnClick} visible={visible} setVisible={setVisible} />
        </Row>
        </div>
        </div>
    </Container>


    </div>
  )
}

export default SearchFunc