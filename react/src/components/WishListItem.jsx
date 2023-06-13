import React from 'react'
import ProductItem from './ProductItem'

const WishListItem = () => {
  return (
    <div>
        성분명 <button>제품 비교하기</button> <br/>
        **맵함수**<ProductItem />
    </div>
  )
}

export default WishListItem