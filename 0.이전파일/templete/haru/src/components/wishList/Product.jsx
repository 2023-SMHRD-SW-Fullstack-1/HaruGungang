import React from 'react'
import { Card, Container, Row, Col } from 'reactstrap'
import img1 from '../../assets/images/landingpage/루테인 지아잔틴.jpg'
import { Button } from 'bootstrap'

const Product = () => {
  return (
    <div>
        <Container>
            <Row className="m-t-40 justify-content-center">
                <Col lg="4" md="6">
                    <Card>
                        <a href="#"><img className="card-img-top" src={img1} alt="wrappixel kit" /></a>
                        <h5 className="font-medium m-t-30"><a href="#" className="link">아이클리어 루테인 지아잔틴 30정</a></h5>
                        <p className="m-t-20">19,500원</p>
                        <p className="m-t-20">루테인 18mg | 지아잔틴 1.818mg</p>
                        <p className="m-t-20">종근당건강</p>
                        <a href="#" className="linking text-themecolor m-t-10">상세 제품 보러가기 <i className="ti-arrow-right"></i></a>
                    </Card>
                </Col>
            </Row>
        </Container>
       </div>
     
  )
}

export default Product