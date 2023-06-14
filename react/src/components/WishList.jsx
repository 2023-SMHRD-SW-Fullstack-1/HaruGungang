import React from 'react'
import WishListItem from './WishListItem'
import {Link} from 'react-router-dom'

const WishList = () => {
  return (
    <div>
      **맵함수**
      <WishListItem /> 
      <Link to='/combination'><button>**링크걸것!**선택 제품 조합 확인하기</button></Link>     
    </div>
  )
}

export default WishList