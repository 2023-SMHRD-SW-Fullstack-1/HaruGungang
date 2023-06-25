import React, { useEffect, useState } from 'react'
import { PieChart, Pie, Sector, Cell, LabelList, Tooltip } from "recharts";

const Chart = ({data}) => {

    useEffect(()=>{
        console.log('chart comp', data);
    },[data])

    const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
      const radius = innerRadius + (outerRadius - innerRadius) * 1.5;
      const x = cx + radius * Math.cos(-midAngle * RADIAN);
      const y = cy + radius * Math.sin(-midAngle * RADIAN);
    
      return (
        <text x={x} y={y} textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
          {`${(percent * 100).toFixed(0)}%`}
        </text>
      );
    };

  return (
    <div>
        <PieChart width={1000} height={500}>
        <Pie
        data={data}
        cx={120}
        cy={200}
        innerRadius={40}
        outerRadius={80}
        fill="#8884d8"
        paddingAngle={5}
        dataKey="value"
        label={renderCustomizedLabel}
        nameKey="nutriName"
      >

        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
        <LabelList dataKey="Nutriname" position="inside" />
        </Pie>
        </PieChart>
    </div>
  )
}

export default Chart
