import React, { useEffect, useState } from 'react'
import { useLocation, useParams, useNavigate } from 'react-router'
import axios from 'axios'
import { Container, Row, Col, Button, Card } from 'reactstrap'

const ProductDetail = ({addWishList, wishData, setWishList, wishList, setProductIdMain, nutri, setNutri}) => {

    let {productId} = useParams()
    const location = useLocation();
    
    // 제품 정보 변수 
    //1행
    const [img, setImg]  = useState("")
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState()
    const [packageUnit, setPackageUnit] = useState()
    const [menufacturer, setMenufacturer] = useState("")
    //2행
    const [dailyPrice, setDailyPrice] = useState()
    const [dailyIntake, setDailyIntake] = useState("")
    const [withGood, setWithGood] = useState([])
    const [withBad, setWithBad] = useState([])
    //3행
    const [dayMany, setDayMany] = useState("")
    const [dayTimes, setDayTimes] = useState("")
    const [dayWhen, setDayWhen] = useState("")
    const [bfAfMeal, setBfAfMeal] = useState("")
    const [note, setNote] = useState("")
    //버튼
    const [url, setUrl] = useState("")

    useEffect(()=>{
        console.log('productId :', productId);
        setProductIdMain(productId)
        setImg(location.state.img)
        setWithGood(location.state.withNutri)
        setWithBad(location.state.withNotNutri)
        setDailyIntake(location.state.dailyRecTake.replace('|','~'))
        console.log(img);
        axios.get(`http://localhost:8085/haru/product/${productId}`)
        .then((res)=>{
            console.log('제품상세페이지 통신성공', res.data);
            let data = res.data.recNutri
            setTitle(data.detail_name)
            setPrice(data.detail_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))
            setPackageUnit(data.pack_unit + data.shape)
            setNutri(data.nutri_name)
            setMenufacturer(data.manufacturer)
            setDailyPrice(Math.floor(data.detail_price / parseInt(data.pack_unit) / (data.day_many * parseInt(data.day_times))))
            setDayMany(data.day_many)
            setDayTimes(data.day_times)
            setDayWhen(data.day_when)
            setBfAfMeal(data.bf_af_meal)
            setNote(data.intake_precaution)
            setUrl(data.detail_url)
        })
        .catch((e)=>{
            console.log('error : ', e);
        })
    },[])

    useEffect(()=>{
        console.log('img url :', img);
    },[img])


  return (
    <div>
        <Container>
            <Row>
                <Col>
                <Card className='product-img'>
                    <img src={`${img}`}></img>
                </Card>
                </Col>
                <Col>
                    <h4 className='title font-bold'>{title}</h4>
                    <p>가격 : {price}원 </p> 
                    <p>포장수량 : {packageUnit}</p>
                    <p>영양성분 : {nutri}</p>
                    <p>제조사 : {menufacturer}</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Row><p>하루에 : {dailyPrice}원</p></Row>
                </Col>
                <Col>
                    <Row><p>일일권장섭취량 : {dailyIntake}</p></Row>
                </Col>
                <Col>
                    <Row>
                        상호작용 : 
                        {withGood != "null" && <Col>Good : {withGood}</Col>}
                        {withBad != "null" && <Col>Bad : {withBad}</Col>}
                    </Row>                
                </Col>
            </Row>
            <Container>
            <Row>
                <Row>
                    섭취방법 : 
                    <Col>1회 {dayMany}(정/포)</Col>
                    <Col>하루에 {dayTimes}회</Col>
                    <Col>{dayWhen}</Col> 
                    <Col>{bfAfMeal}</Col>
                </Row>
            </Row>
            <hr/>
            <Row>
                <Row><h4 className='title font-bold'>섭취주의사항</h4></Row>
                <Row>- {note}</Row>
            </Row>
            <br/>
            <Row>
                <Button onClick={()=>{window.location.href=`${url}`} } size="lg" className="url-btn" color="success">상품 URL 연결</Button>
                <Button onClick={addWishList} size="lg" className="url-btn" color="success">제품 찜하기</Button>
            </Row>
            </Container>
        </Container>
    </div>
  )
}

export default ProductDetail