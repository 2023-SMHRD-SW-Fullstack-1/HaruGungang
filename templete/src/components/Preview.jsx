import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';
import { Container, Row, Col } from 'reactstrap';

const Preview = () => {
  return (
    <div className="static-slider-head">
            <Container>
                <Row className="justify-content-center">
                    <Col lg="8" md="6" className="align-self-center text-center">
                        <h1 className="intro">영양제! 언제? 뭐랑?</h1>
                        <h1 className="intro">먹으면 더 좋을까?</h1>
                        {/* <h4 className="subtitle font-light">Powerful Reactstrap UI Kit with<br /> Beautiful Pre-Built Demos</h4> */}
                        <div className="intro_btn">
                            <div className="intro_btn_item">
                                <Link to="/haru/survey" className="btn btn-md m-t-30 btn-info-gradiant font-14">설문하고 추천받기</Link>
                            </div>
                            <div className="intro_btn_item">
                                <Link to="/haru/main" className="btn btn-md m-t-30 btn-info-gradiant font-14">영양제 정보 보기</Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
  )
}

export default Preview