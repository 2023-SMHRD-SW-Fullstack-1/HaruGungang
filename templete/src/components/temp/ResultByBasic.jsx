import React, { useEffect, useState } from 'react'
import { Row, Col, Container, Card, CardBody } from 'reactstrap';
import axios from 'axios'

const ResultByBasic = ({gender, ageRange}) => {

  const data = {
    gender : `${gender}`,
    ageRange : parseInt(ageRange)
  }

  const [rec1, setRec1] = useState()
  const [rec2, setRec2] = useState()
  const [rec3, setRec3] = useState()

  useEffect(()=>{
    console.log('interest', data);

    axios.post("http://localhost:8085/haru/survey/result2", data)
    .then((res)=>{
        console.log('basic result', res.data);
        setRec1(res.data[0].recNutriByBasic.nutri_name)
        setRec2(res.data[1].recNutriByBasic.nutri_name)
        setRec3(res.data[2].recNutriByBasic.nutri_name)
    })
})

  return (
    <div>
            <Container>
          <Row className="justify-content-center">
              <Col md="7" className="text-center">
                  <h3 className="title">{ageRange} {gender == 'w' ? "여성" : "남성"}이 최근 많이 검색한 영양제</h3>
              </Col>
          </Row>
          <Row className="m-t-40">
              <Col md="4">
                  <Card className="card-shadow">
                      <a href="#" className="img-ho"><img className="card-img-top" alt="wrappixel kit" /></a>
                      <CardBody>
                          <h5 className="font-medium m-b-0">{rec1}</h5>
                      </CardBody>
                  </Card>
              </Col>
              <Col md="4">
                  <Card className="card-shadow">
                      <a href="#" className="img-ho"><img className="card-img-top" alt="wrappixel kit" /></a>
                      <CardBody>
                          <h5 className="font-medium m-b-0">{rec2}</h5>
                      </CardBody>
                  </Card>
              </Col>
              <Col md="4">
                  <Card className="card-shadow">
                      <a href="#" className="img-ho"><img className="card-img-top" alt="wrappixel kit" /></a>
                      <CardBody>
                          <h5 className="font-medium m-b-0">{rec3}</h5>
                      </CardBody>
                  </Card>
              </Col>
          </Row>
      </Container>
    </div>
  )
}

export default ResultByBasic