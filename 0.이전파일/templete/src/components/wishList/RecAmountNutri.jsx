import React, { useEffect } from 'react'
import { Container, Progress, Row, Col } from 'reactstrap'
import axios from 'axios'
import { useState } from 'react'

const RecAmountNutri = ({item}) => {

  const [minMax, setMinMax] = useState([])
  const [min, setMin] = useState()
  const [max, setMax] = useState()
  const [unit, setUnit] = useState("")

  useEffect(()=>{
    axios.get(`http://localhost:8085/haru/nutridetail/${item.nutri_name}`)
    .then((res) => {
      console.log('axios 통신 성공!',res.data.recNutri);
      setMinMax(res.data.recNutri.rec_intake.split('|'))
      setUnit(res.data.recNutri.intake_unit)
    })
  },[])

  useEffect(()=>{
    console.log(minMax);
    setMax(minMax[1])
    setMin(minMax[0])
  },[minMax])

  return (
    <div>
      <Container>
        <Row>
          <Col>{item.nutri_name}</Col>
          <Col>
          <Container>
            <Row><Col>성인기준 일 권장량 대비 80%</Col></Row>
            <Row>
              <Col>
                <Progress
                  value={item.nutri_content}
                  min={min}
                  max={max}
                >{item.nutri_content}</Progress>
              </Col>          
            </Row>
            <Row>
              <Col>{min}{unit}</Col>
              <Col>{max}{unit}</Col>
            </Row>
          </Container>
          </Col>
        </Row>
      </Container>


    </div>
  )
}

export default RecAmountNutri