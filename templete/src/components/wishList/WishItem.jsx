import React from 'react'
import { useState } from 'react';
import { Button, Row, Col, Container, Card, FormGroup, Input } from 'reactstrap';

const WishItem = ({item, checkedItemHandler}) => {

    console.log('item' , item);

    //하나의 체크박스 관리
    const [bChecked, setChecked] = useState(false)
    const checkHandler = ({target})=>{

        console.log(target.checked);

        setChecked(!bChecked)
        checkedItemHandler(item.wishlist.product_id, target.checked)
        console.log('checkhandler' , item.wishlist.product_id);
    } 

  return (
    <div>
        <Col lg="4" md="6">
            <Input name="bloodCk" type="checkbox" checked={bChecked} onChange={(e) => checkHandler(e)}></Input>
            <Card>
                <img className="card-img-top" alt="wrappixel kit" src={item.wishlist.img}/>
                <h5 className="font-medium m-t-30">{item.wishlist.detail_name}</h5>
                <p className="m-t-20">{item.wishlist.detail_price}원</p>
                <p className="m-t-20">{item.wishlist.manufacturer}</p>
            </Card>
        </Col>
    </div>
  )
}

export default WishItem