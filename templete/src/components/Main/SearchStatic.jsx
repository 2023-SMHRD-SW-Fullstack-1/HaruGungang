import React, { useEffect, useState } from 'react'
import { Row, Col, Container, Card, CardBody } from 'reactstrap';
import Chart from './Chart';
import Filter from './Filter';
import axios from 'axios';
const SearchStatic = ({data, loadData, addGenderFilter, addAgeFilter, visibleChart}) => {

  return (
    <div>
        <Container>
        <Row className="justify-content-center">
            <Col md="7" className="text-center">
                <h2 className="title">최근 3개월간 사람들이 많이 찾은 영양제는?</h2>
            </Col>
        </Row>
        <Row className="m-t-40">
           {visibleChart && <Chart data={data}/>}
           <Filter loadData={loadData} addGenderFilter={addGenderFilter} addAgeFilter={addAgeFilter}/>
        </Row>
    </Container>
    </div>
  )
}

export default SearchStatic