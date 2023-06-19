import React from 'react'
import { Button } from 'reactstrap';
import Nutri from './wishList/Nutri';

const WishList = () => {
  return (
    <div>
      <h3>찜리스트</h3>
      <div>
        <Nutri/>
        <Button color="success" onClick={()=>{window.location.href="/haru/wishlist/samenutri"}}>동일 영양성분군 비교하기</Button>
        <Button color="success" onClick={()=>{window.location.href="/haru/wishlist/othernutri"}}>영양성분 조합 확인하기</Button>
      </div>
    </div>
  )
}

export default WishList