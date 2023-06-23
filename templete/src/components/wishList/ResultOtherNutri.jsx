import React from 'react'
import ProductDetailWish from './ProductDetailWish'
import PriceTotal from './PriceTotal'
import MaterialTotal from './MaterialTotal'
import { useState } from 'react'
import { useLocation } from 'react-router'
import axios from 'axios'
import { useEffect } from 'react'
import { Container, Row } from 'reactstrap'

const ResultOtherNutri = () => {

  const location = useLocation()

    // 체크된 제품 리스트
    const [compareList, setCompareList] = useState({})

    // 서버에서 불러온 정보
    const [result, setResult] = useState([])

    //PriceTotal 사용 변수
    const [ totalPrice, setTotalPrice ] = useState()
    const [ totalPriceOnday, setTotalPriceOneday] = useState()

    //차트용 데이터 변환
    let name1 = ""
    let value1 = 0
    let obj = {}
    let data = []
    
    //PriceTotal chart 변수
    const [chartData, setChartData] = useState([])

    useEffect(()=>{
      setCompareList(location.state.checkedAllItems)
    },[])
  
    useEffect(()=>{
      console.log(compareList);
      axios.post('http://localhost:8085/haru/compare', { product_id: Array.from(compareList) })
      .then((res)=>{
        console.log('제품 비교 통신 성공', res.data);
        setResult(res.data)
      })
    },[compareList])
  
    useEffect(()=>{
      console.log('result : ',result);
    },[])

    useEffect(()=>{

    let temp = 0;
    let tempOne = 0;
  
      result.map((item)=>(
        temp += item.detail_price,
        tempOne += item.day_price,

        name1 = item.detail_name,
        value1 = item.detail_price,
        obj = {name : name1, value : value1},
        data.push(obj)
        ))
  
      console.log('obj', obj);
      console.log('data', data);
      console.log('temp', temp);
      setTotalPrice(temp)
      setTotalPriceOneday(tempOne)
      setChartData(data);
      console.log('chartData1', chartData);
    },[result])

    console.log('chartData2', chartData);

  return (
    <div className="spacer" id="forms-component">
      <Container>
      <Row>
      <ProductDetailWish result={result}/>
      </Row>
      <h5 className='title font-bold'>가격정보</h5>
      <PriceTotal chartData={chartData} result={result} totalPrice={totalPrice} setTotalPrice={setTotalPrice} totalPriceOnday={totalPriceOnday} setTotalPriceOneday={setTotalPriceOneday}/>
      <Row>
      <h5 className='title font-bold'>성분정보</h5>
      <MaterialTotal result={result} />
      </Row>
      </Container>
    </div>
  )
}

export default ResultOtherNutri