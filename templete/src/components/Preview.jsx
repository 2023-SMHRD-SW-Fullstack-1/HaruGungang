import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';
import { Button, Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { Button } from 'react-bootstrap';

const Preview = () => {
  return (
    <div className="static-slider-head">
            <Container>
                <Row className="justify-content-center">
                    <Col lg="8" md="" className="align-self-center text-center">
                        {/* <h4 className="subtitle font-light">Powerful Reactstrap UI Kit with<br /> Beautiful Pre-Built Demos</h4> */}
                        
                        <div className='intro_btn'>
                        <Button id='tooltip' className="preview-btn" color="success" onClick={()=>{window.location.href="/haru/survey"}}><h2 className='preview-font'>설문하고 추천받기</h2>
                                <Button type="button" color="outline-success" className='tooltipText1'>간단한 설문으로 내게 필요한 영양요소를 추천 받고 싶다면?!</Button>
                            </Button>
                            <Button id='tooltip' className="preview-btn" color="success" onClick={()=>{window.location.href="/haru/main"}}><h2 className='preview-font'>기능성 검색하기</h2>
                                <Button type="button" color="outline-success" className='tooltipText2'>한 눈에 보이는 아이콘으로 기능성 정보 검색을 간편하게!</Button>
                            </Button>
                            </div>
                    </Col>
                </Row>
            </Container>
        </div>
  )
}

export default Preview