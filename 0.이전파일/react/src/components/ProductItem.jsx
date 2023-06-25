import React from 'react'
import { Link } from 'react-router-dom'

const ProductItem = () => {
  return (
    <div>
      제품 이미지 <br/>
      아이클리어 루테인 지아잔틴 30정 <br/>
      19,500원 <br/>
      루테인 18.182mg <br/>
      (주)종근당건강 <br/>

      <Link to='/productdetail'>제품 상세정보 보러가기</Link>
    </div>
  )
}

export default ProductItem