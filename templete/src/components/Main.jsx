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

  //DetailFunc 사용하는 변수
  //Main > SearchFunc > DetailFunc
  const [title, setTitle] = useState("");
  const [nutri, setNutri] = useState("");
  const [effect, setEffect] = useState([])


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

    let data = {
        gender : gender,
        age_range : age
    }

       console.log('loadData');
       axios.post("http://localhost:8085/haru/main", data)
       .then((res)=>{

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
    <div>
{/* <<<<<<< HEAD
      <div>
        <SearchFunc 
        title={title}
        setTitle={setTitle}
        nutri={nutri}
        setNutri={setNutri}
        effect={effect}
        setEffect={setEffect}
        func={func} btnClick={btnClick} visible={visible} setVisible={setVisible} />
      </div>
      <div>
      <SearchStatic visibleChart={visibleChart} data={data} loadData={loadData} addGenderFilter={addGenderFilter} addAgeFilter={addAgeFilter}/>
      </div> */}
{/* ======= */}
      <Row>
        <SearchFunc 
        title={title}
        setTitle={setTitle}
        nutri={nutri}
        setNutri={setNutri}
        effect={effect}
        setEffect={setEffect} func={func} btnClick={btnClick} visible={visible} setVisible={setVisible} />
      </Row>
      <Row>
        <SearchStatic visibleChart={visibleChart} data={data} loadData={loadData} addGenderFilter={addGenderFilter} addAgeFilter={addAgeFilter}/>
      </Row>
    </div>
  )
}

export default Main