import React, { useEffect } from 'react'
import { useState } from 'react';
import { Button, Row, Col, Container, Card, FormGroup, Input, CardBody } from 'reactstrap';
import axios from 'axios'

const WishItem = ({item, checkedItemHandler, userId, checkedAllItemHandler}) => {

    console.log('item' , item);

    const product_id = item.wishlist.product_id

    console.log('productid' ,product_id);

    //하나의 체크박스 관리
    const [bChecked, setChecked] = useState(false)
    const checkHandler = ({target})=>{

        console.log(target.checked);

        setChecked(!bChecked)
        checkedItemHandler(item.wishlist.product_id, target.checked)
        checkedAllItemHandler(item.wishlist.product_id, target.checked)
        console.log('checkhandler' , item.wishlist.product_id);
    } 

    let data = {
        userId : `${userId}`,
        productIdMain : `${product_id}`
    }

    //찜하기 취소 기능 
    const cancelWishItem = ()=>{
        axios.post('http://localhost:8085/haru/wishlist/delete', data)
        .then((res)=>{
            console.log('찜하기 취소 data', res.data);
            window.location.replace("/haru/wishlist")
        })
    }

  return (
    <div>
            <Input name="bloodCk" type="checkbox" checked={bChecked} onChange={(e) => checkHandler(e)}></Input>
            <Card>
                <img className="card-img-top" alt="wrappixel kit" src={item.wishlist.img}/>
                <CardBody>
                <h5 className="title font-bold">{item.wishlist.detail_name}</h5>
                <p className="m-t-20">{item.wishlist.detail_price}원</p>
                <p className="m-t-20">{item.wishlist.manufacturer}</p>
                <Button onClick={cancelWishItem}>찜하기 취소</Button>
                </CardBody> 
            </Card> {"   "}
    </div>
  )
}

export default WishItem