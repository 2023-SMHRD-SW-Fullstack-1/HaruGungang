import React, { useState } from 'react'
import PriceTotalChart from './PriceTotalChart';
import RecAmountNutri from './RecAmountNutri';

const PriceTotal = () => {

  return (
    <div>
      <div>
        <PriceTotalChart/>
      </div>
      {/* 텍스트 */}
      <div>
        <h5>3가지 영양제 구매시 총 금액</h5>
        <p>63,000원</p>
        <p>하루에 1,900원</p>
      </div>
    </div> 
  )
}

export default PriceTotal