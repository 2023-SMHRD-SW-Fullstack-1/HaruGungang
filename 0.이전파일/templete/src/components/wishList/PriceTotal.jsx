import React, { useState } from 'react'
import PriceTotalChart from './PriceTotalChart';
import RecAmountNutri from './RecAmountNutri';
import { useEffect } from 'react';
import { Col, Row } from 'reactstrap';

const PriceTotal = ({result, totalPrice, totalPriceOnday, chartData}) => {

  console.log('chartData3', chartData);

  return (
    <Row className='wishlist-align'>
      <Col>
        <PriceTotalChart className='m-t-100' chartData={chartData}/>
      </Col>
      <Col>
        <h5 className='title font-bold'>{result.length}가지 영양제 구매시 총 금액 : {totalPrice}원</h5>
        <p>하루에 {totalPriceOnday}원</p>
      </Col>
    </Row> 
  )
}

export default PriceTotal