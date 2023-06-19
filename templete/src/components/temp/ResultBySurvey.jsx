import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Row, Col, Container, Card, CardBody } from 'reactstrap';

const ResultBySurvey = ({interest}) => {

  const data = {
    interest1 : `${interest[0]}`,
    interest2 : `${interest[1]}`,
    interest3 : `${interest[2]}`
  }

  const [rec1, setRec1] = useState()
  const [rec2, setRec2] = useState()
  const [rec3, setRec3] = useState()

  useEffect(()=>{
    console.log('interest', data);

    axios.post("http://localhost:8085/haru/survey/result", data)
    .then((res)=>{
        console.log('survey result', res.data);
        setRec1(res.data[0].recNutriBySurvey.nutri_name);
        setRec2(res.data[1].recNutriBySurvey.nutri_name);
        setRec3(res.data[2].recNutriBySurvey.nutri_name);
    })
})

  return (
    <div>
      <Container>
          <Row className="justify-content-center">
              <Col md="7" className="text-center">
                  <h3 className="title">하루 건강이 추천하는 영양제</h3>
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

export default ResultBySurvey