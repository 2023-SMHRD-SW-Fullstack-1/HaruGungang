import React from 'react'
import { Button } from 'reactstrap';
import Nutri from './wishList/Nutri';
import { Container } from 'reactstrap';

const WishList = () => {
  return (
    <div>
      <Container>
      <div className='box-container'>
        <div className="justify-content-center">
        <br/><br/>
      <h2 className='title font-bold'>찜리스트</h2>
      <div>
        <Nutri/>
        <Button color="success" onClick={()=>{window.location.href="/haru/wishlist/samenutri"}}>동일 영양성분군 비교하기</Button>
        <Button color="success" onClick={()=>{window.location.href="/haru/wishlist/othernutri"}}>영양성분 조합 확인하기</Button>
      </div>
      
      </div>
      </div>
      </Container>
    </div>
  )
}

export default WishList