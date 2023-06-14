import React from 'react'
import ProductItem from './ProductItem'
import { Link } from 'react-router-dom'

const WishListItem = () => {
  return (
    <div>
        성분명 <button><Link to="/compareproduct">제품 비교하기</Link> </button><br/>
        **맵함수**<ProductItem />
    </div>
  )
}

export default WishListItem