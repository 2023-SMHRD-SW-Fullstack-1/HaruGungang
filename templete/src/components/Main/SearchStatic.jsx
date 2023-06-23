import React, { useEffect, useState } from 'react'
import { Row, Col, Container, Card, CardBody } from 'reactstrap';
import Chart from './Chart';
import Filter from './Filter';
import axios from 'axios';
const SearchStatic = ({activeGenderW, activeGenderM, activeAgeGroup10, activeAgeGroup20, activeAgeGroup30, activeAgeGroup40, activeAgeGroup50, activeAgeGroup60, data, loadData, addGenderFilter, addAgeFilter, visibleChart, gender, age}) => {

    console.log('data', loadData);
    console.log('gender', gender);

    const [genderText, setGenderText] = useState('')

    useEffect(()=>{
      gender == 'w' ? setGenderText('여성') : setGenderText('남성')
    },[gender])
  
    return (
    <div>
        <Container>
          <div className='box-container'>
        <Row className="justify-content-center">
            <Col md="7" className="text-center">
                <h2 className="title font-bold">성별, 연령별 자주 찾는 영양제 조회하기</h2>
            </Col>
        </Row>
        <Row className="m-t-40" id="chart-wrapper">
          <Col>
          <Filter 
          activeGenderW={activeGenderW}
          activeGenderM={activeGenderM}
          activeAgeGroup10={activeAgeGroup10}
          activeAgeGroup20={activeAgeGroup20}
          activeAgeGroup30={activeAgeGroup30}
          activeAgeGroup40={activeAgeGroup40}
          activeAgeGroup50={activeAgeGroup50}
          activeAgeGroup60={activeAgeGroup60}
          loadData={loadData} addGenderFilter={addGenderFilter} addAgeFilter={addAgeFilter}/>
          </Col>
           {visibleChart && 
            <Col>
            <h4 className="title font-bold">{age}대 {genderText}이 최근 3개월간 많이 검색한 영양제</h4>
            <Chart data={data} id="chart"/>
            </Col> }
        </Row>
          </div>
    </Container>
    </div>
  )
}

export default SearchStatic