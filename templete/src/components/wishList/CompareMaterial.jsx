import React, { useEffect, useState } from 'react'
import { Col } from 'reactstrap';
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts'


const CompareMaterial = ({item,setChartX,chartX}) => {

  console.log('chart result : ' , item);

  const data = [{
        name : `${item.nutri_name}`,
        incredient : `${parseInt(item.nutri_content)}` 
      }]

  useEffect(()=>{
    console.log(item.nutri_name);
    setChartX(item.nutri_name)
  }, [])

  useEffect(()=>{
    console.log('chartX', chartX);
  },[chartX])

  return (
    <Col>
      <BarChart width={300 } height={300} data={data}>
      <CartesianGrid strokeDasharray="1 1" />
      <XAxis dataKey={item.nutri_name}/>
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="incredient" fill="#82ca9d"  />
    </BarChart>
      <div><p id="table-font">{item.detail_name}</p></div>
    </Col>
  )
}

export default CompareMaterial