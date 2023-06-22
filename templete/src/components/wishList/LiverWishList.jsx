import React, { useState } from 'react'
import { Button, Row, Col, Container, Card, FormGroup, Input } from 'reactstrap';
import WishItem from './WishItem';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

const LiverWishList = ({liverList, userId}) => {

    const nav = useNavigate()

    //체크박스 기능
    //선택된 체크박스 세트
    const [checkedItems, setCheckedItems] = useState(new Set())
  
    const checkedItemHandler = (id, isChecked) => {
      console.log('checkedItemHandler', id);
  
      if(isChecked){
          
        checkedItems.add(id)
        setCheckedItems(checkedItems)
          console.log('is checked', checkedItems);
      }else if(!isChecked && checkedItems.has(id)){
        checkedItems.delete(id)
        setCheckedItems(checkedItems)
        console.log('no checked', checkedItems);
      }
  
      if(checkedItems.size > 3){
          alert('4개 이상의 제품은 비교가 불가능합니다. ')
      }
    }

  return (
    <div>
        <h5>간 건강</h5>
        <FormGroup>
        <Container>
            <Row className="m-t-40 justify-content-center">
        {liverList.map((item)=>(
            <WishItem item={item} userId={userId} checkedItemHandler={checkedItemHandler}/>
        ))}
        </Row>
        </Container>
        <Button color="success" onClick={()=>{nav("/haru/wishlist/samenutri", {state : {checkedItem : checkedItems}})}}>동일 영양성분군 비교하기</Button>
        </FormGroup>
    </div>
  )
}

export default LiverWishList