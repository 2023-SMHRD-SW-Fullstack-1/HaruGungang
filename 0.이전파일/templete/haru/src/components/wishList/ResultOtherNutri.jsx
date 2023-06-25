import React from 'react'
import ProductDetailWish from './ProductDetailWish'
import PriceTotal from './PriceTotal'
import MaterialTotal from './MaterialTotal'

const ResultOtherNutri = () => {
  return (
    <div>
      <ProductDetailWish/>
      <h5>가격정보</h5>
      <PriceTotal/>
      <h5>성분정보</h5>
      <MaterialTotal/>
    </div>
  )
}

export default ResultOtherNutri