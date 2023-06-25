import React from 'react'
import CompareProductDetail from './CompareProductDetail'
import ComparePrice from './ComparePrice'
import TotalNutriInfo from './TotalNutriInfo'
import CompareNutri from './CompareNutri'

export const CompareSameNutri = () => {
  return (
    <div>
        <h3>제품 비교하기</h3>
        <CompareProductDetail/>
        <ComparePrice/>
        <CompareNutri/>
    </div>
  )
}
