import React from 'react'
import { Container, Progress, Row, Col } from 'reactstrap'

const RecAmountNutri = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>루테인</Col>
          <Col>
          <Container>
            <Row><Col>성인기준 일 권장량 대비 80%</Col></Row>
            <Row>
              <Col>
                <Progress
                  value={16}
                  min={10}
                  max={20}
                >16mg</Progress>
              </Col>          
            </Row>
            <Row>
              <Col>10mg</Col>
              <Col>20mg</Col>
            </Row>
          </Container>
          </Col>
        </Row>
      </Container>


    </div>
  )
}

export default RecAmountNutri