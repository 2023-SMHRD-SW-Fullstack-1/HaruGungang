import React, { useEffect, useState } from 'react'
import { Row, Col, Container, Card, CardBody } from 'reactstrap';
import SearchFunc from './Main/SearchFunc';
import SearchStatic from './Main/SearchStatic';
import axios from 'axios';

//아이콘 import
import blood from "../assets/images/icon/blood-vessel.png"
import intestine from "../assets/images/icon/intestine.png"
import liver from "../assets/images/icon/liver.png"
import eyes from "../assets/images/icon/eyes.png"
import bone from "../assets/images/icon/bone.png"
import vitamin from "../assets/images/icon/vitamin.png"


const Main = () => {

  //기능성으로 정보찾기 관련 
  const btnClick  = (e)=>{
    console.log('btn click', e.target.name);
  }

  const [visible, setVisible] = useState(false)


  let func = [{
    effect: "혈행흐름개선",
    url : `${blood}`
  },{
    effect: "장 건강",
    url : `${intestine}`
  },{
    effect: "간 건강",
    url : `${liver}`
  },{
    effect: "눈 건강",
    url : `${eyes}`
  },{
    effect: "관절/뼈 건강",
    url : `${bone}`
  },{
    effect: "항산화",
    url : `${vitamin}`
  }]


  //연령, 성별 관련
  //성별, 연령대 선택 객체

   const [visibleChart, setVisibleChart] = useState(false)
   const [recommend, setRecommend] = useState([]) 
   const [gender, setGender] = useState("")
   const [age, setAge] = useState("")
   const [data, setData] = useState([])

   const addGenderFilter = (e)=>{
       console.log('성별 필터 추가', e.target.value);
       setGender(e.target.value)
   }

   const addAgeFilter = (e)=>{
       console.log('연령대 필터 추가', e.target.value);
       setAge(e.target.value)
   }

   const loadData = ()=>{
       console.log('loadData');
       axios.get("http://localhost:8085/haru/main")
       .then((res)=>{
       
           //성별, 연령 조건에 따른 jsaon 객체 선택
           if(gender==='w' && age === 10){

               let temp = [{
                   Nutriname: `${res.data[0].recNutri.nutri_name}`,
                   value: parseInt(`${res.data[0].recNutri.click_vol}`)
               },{
                   Nutriname: `${res.data[1].recNutri.nutri_name}`,
                   value: parseInt(`${res.data[1].recNutri.click_vol}`)
               },{
                   Nutriname: `${res.data[2].recNutri.nutri_name}`,
                   value: parseInt(`${res.data[2].recNutri.click_vol}`)
               }]
               setRecommend(temp);
               setVisibleChart(true)
           
              }else if(gender==='w' && age === 20){

                let temp = [{
                  Nutriname: `${res.data[3].recNutri.nutri_name}`,
                  value: parseInt(`${res.data[3].recNutri.click_vol}`)
              },{
                  Nutriname: `${res.data[4].recNutri.nutri_name}`,
                  value: parseInt(`${res.data[4].recNutri.click_vol}`)
              },{
                  Nutriname: `${res.data[5].recNutri.nutri_name}`,
                  value: parseInt(`${res.data[5].recNutri.click_vol}`)
              }]
              setRecommend(temp);
              setVisibleChart(true)

           }else if(gender==='w' && age === 30){
            let temp = [{
              Nutriname: `${res.data[6].recNutri.nutri_name}`,
              value: parseInt(`${res.data[6].recNutri.click_vol}`)
          },{
              Nutriname: `${res.data[7].recNutri.nutri_name}`,
              value: parseInt(`${res.data[7].recNutri.click_vol}`)
          },{
              Nutriname: `${res.data[8].recNutri.nutri_name}`,
              value: parseInt(`${res.data[8].recNutri.click_vol}`)
          }]
          setRecommend(temp);
          setVisibleChart(true)

           }else if(gender==='w' && age === 40){
            let temp = [{
              Nutriname: `${res.data[9].recNutri.nutri_name}`,
              value: parseInt(`${res.data[9].recNutri.click_vol}`)
          },{
              Nutriname: `${res.data[10].recNutri.nutri_name}`,
              value: parseInt(`${res.data[10].recNutri.click_vol}`)
          },{
              Nutriname: `${res.data[11].recNutri.nutri_name}`,
              value: parseInt(`${res.data[11].recNutri.click_vol}`)
          }]
          setRecommend(temp);
          setVisibleChart(true)

           }else if(gender==='w' && age === 50){
            let temp = [{
            Nutriname: `${res.data[12].recNutri.nutri_name}`,
            value: parseInt(`${res.data[12].recNutri.click_vol}`)
        },{
            Nutriname: `${res.data[13].recNutri.nutri_name}`,
            value: parseInt(`${res.data[13].recNutri.click_vol}`)
        },{
            Nutriname: `${res.data[14].recNutri.nutri_name}`,
            value: parseInt(`${res.data[14].recNutri.click_vol}`)
        }]
        setRecommend(temp);
        setVisibleChart(true)

           }else if(gender==='w' && age === 60){
            let temp = [{
            Nutriname: `${res.data[15].recNutri.nutri_name}`,
            value: parseInt(`${res.data[15].recNutri.click_vol}`)
        },{
            Nutriname: `${res.data[16].recNutri.nutri_name}`,
            value: parseInt(`${res.data[16].recNutri.click_vol}`)
        },{
            Nutriname: `${res.data[17].recNutri.nutri_name}`,
            value: parseInt(`${res.data[17].recNutri.click_vol}`)
        }]
        setRecommend(temp);
        setVisibleChart(true)

           }else if(gender==='m' && age === 60){
            let temp = [{
              Nutriname: `${res.data[18].recNutri.nutri_name}`,
              value: parseInt(`${res.data[18].recNutri.click_vol}`)
          },{
              Nutriname: `${res.data[19].recNutri.nutri_name}`,
              value: parseInt(`${res.data[19].recNutri.click_vol}`)
          },{
              Nutriname: `${res.data[20].recNutri.nutri_name}`,
              value: parseInt(`${res.data[20].recNutri.click_vol}`)
          }]
          setRecommend(temp);
          setVisibleChart(true)

           }else if(gender=='m' && age === 50){
            let temp = [{
              Nutriname: `${res.data[21].recNutri.nutri_name}`,
              value: parseInt(`${res.data[21].recNutri.click_vol}`)
          },{
              Nutriname: `${res.data[22].recNutri.nutri_name}`,
              value: parseInt(`${res.data[22].recNutri.click_vol}`)
          },{
              Nutriname: `${res.data[23].recNutri.nutri_name}`,
              value: parseInt(`${res.data[23].recNutri.click_vol}`)
          }]
          setRecommend(temp);
          setVisibleChart(true)

           }else if(gender==='m' && age === 40){
            let temp = [{
              Nutriname: `${res.data[24].recNutri.nutri_name}`,
              value: parseInt(`${res.data[24].recNutri.click_vol}`)
          },{
              Nutriname: `${res.data[25].recNutri.nutri_name}`,
              value: parseInt(`${res.data[25].recNutri.click_vol}`)
          },{
              Nutriname: `${res.data[26].recNutri.nutri_name}`,
              value: parseInt(`${res.data[26].recNutri.click_vol}`)
          }]
          setRecommend(temp);
          setVisibleChart(true)

           }else if(gender==='m' && age === 30){
            let temp = [{
              Nutriname: `${res.data[27].recNutri.nutri_name}`,
              value: parseInt(`${res.data[27].recNutri.click_vol}`)
          },{
              Nutriname: `${res.data[28].recNutri.nutri_name}`,
              value: parseInt(`${res.data[28].recNutri.click_vol}`)
          },{
              Nutriname: `${res.data[29].recNutri.nutri_name}`,
              value: parseInt(`${res.data[29].recNutri.click_vol}`)
          }]
          setRecommend(temp);
          setVisibleChart(true)

           }else if(gender==='m' && age === 20){
            let temp = [{
              Nutriname: `${res.data[30].recNutri.nutri_name}`,
              value: parseInt(`${res.data[30].recNutri.click_vol}`)
          },{
              Nutriname: `${res.data[31].recNutri.nutri_name}`,
              value: parseInt(`${res.data[31].recNutri.click_vol}`)
          },{
              Nutriname: `${res.data[32].recNutri.nutri_name}`,
              value: parseInt(`${res.data[32].recNutri.click_vol}`)
          }]
          setRecommend(temp);
          setVisibleChart(true)

           }else{
            let temp = [{
              Nutriname: `${res.data[33].recNutri.nutri_name}`,
              value: parseInt(`${res.data[33].recNutri.click_vol}`)
          },{
              Nutriname: `${res.data[34].recNutri.nutri_name}`,
              value: parseInt(`${res.data[34].recNutri.click_vol}`)
          },{
              Nutriname: `${res.data[35].recNutri.nutri_name}`,
              value: parseInt(`${res.data[35].recNutri.click_vol}`)
          }]
          setRecommend(temp);
          setVisibleChart(true)
           }

       }).catch((e)=>{
           console.log('error', e);
       })
   }
  
   useEffect(()=>{
    console.log('main rec', recommend);
    setData(recommend)
   },[recommend])

   useEffect(()=>{
    console.log('data', data);
   },[data])

  return (
    <div className='main-font'>
      <Row>
        <SearchFunc func={func} btnClick={btnClick} visible={visible} setVisible={setVisible} />
      </Row>
      <Row>
        <SearchStatic visibleChart={visibleChart} data={data} loadData={loadData} addGenderFilter={addGenderFilter} addAgeFilter={addAgeFilter}/>
      </Row>
    </div>
  )
}

export default Main