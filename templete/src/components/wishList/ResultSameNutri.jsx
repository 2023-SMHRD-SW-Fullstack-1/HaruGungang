import React from 'react'
import ProductDetailWish from './ProductDetailWish'
import ComparePrice from './ComparePrice'
import CompareMaterial from './CompareMaterial'

const ResultSameNutri = () => {
  return (
    <div>
      <h3>동일 영양성분 제품 비교하기</h3>
      <ProductDetailWish/>
      <h5>함량 비교</h5>
      <CompareMaterial/>
    </div>
  )
}

export default ResultSameNutri