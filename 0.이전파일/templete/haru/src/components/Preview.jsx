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
                            <Button className="preview-btn" color="success" onClick={()=>{window.location.href="/haru/survey"}}><h2 className='preview-font'>설문하고 추천받기</h2></Button>
                            <Button className="preview-btn" color="success" onClick={()=>{window.location.href="/haru/main"}}><h2 className='preview-font'>기능성 검색하기</h2></Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
  )
}

export default Preview