import React from 'react'
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts'


const CompareMaterial = () => {

  const data = [
    {
      "name": "Page A",
      "1": 4000,
      "2": 2400,
      "3": 1800
    },
    {
      "name": "Page B",
      "1": 4000,
      "2": 2400,
      "3": 1800
    },
    {
      "name": "Page C",
      "1": 4000,
      "2": 2400,
      "3": 1800
    },
    {
      "name": "Page D",
      "1": 4000,
      "2": 2400,
      "3": 1800
    },
    {
      "name": "Page E",
      "1": 4000,
      "2": 2400,
      "3": 1800
    },
    {
      "name": "Page F",
      "1": 4000,
      "2": 2400,
      "3": 1800
    },
    {
      "name": "Page G",
      "1": 4000,
      "2": 2400,
      "3": 1800
    }
  ]

  return (
    <div>
        <BarChart width={730} height={250} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="1" fill="#8884d8" />
        <Bar dataKey="2" fill="#82ca9d" />
        <Bar dataKey="3" fill="#84ce5d" />
      </BarChart>
    </div>
  )
}

export default CompareMaterial