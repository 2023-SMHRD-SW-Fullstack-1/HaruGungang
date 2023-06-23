import React, { useState } from 'react'
import PriceTotalChart from './PriceTotalChart';
import RecAmountNutri from './RecAmountNutri';
import { useEffect } from 'react';
import { Col, Row } from 'reactstrap';

const PriceTotal = ({result, totalPrice, totalPriceOnday, chartData}) => {

  console.log('chartData3', chartData);

  return (
    <Row>
      <Col>
        <PriceTotalChart chartData={chartData}/>
      </Col>
      <Col>
        <h5 className='title font-bold'>{result.length}가지 영양제 구매시 총 금액</h5>
        <p>{totalPrice}원</p>
        <p>하루에 {totalPriceOnday}원</p>
      </Col>
    </Row> 
  )
}

export default PriceTotal