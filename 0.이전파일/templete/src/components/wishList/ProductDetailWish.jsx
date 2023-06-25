import React from 'react'
import { Table } from 'reactstrap'
import ComparePrice from './ComparePrice'


const ProductDetailWish = ({result}) => {

  console.log(result);

  return (
    <div>
      <Table borderless>
  <thead>
    <tr>
      <th></th>
      {result.map((item)=>(
        <th>
        <img src={item.img} width="150px"></img>
      </th>))}
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">
        제품명
      </th>
      {result.map((item)=>(
                <td>
                {item.detail_name}
              </td>
      ))}
    </tr>
    <tr>
      <th scope="row">
        제조사
      </th>
      {result.map((item)=>(
              <td>
              {item.manufacturer}
            </td>
      ))}
    </tr>
    <tr>
      <th scope="row">
        포장수량
      </th>
      {result.map((item)=>(
              <td>
              {item.pack_unit}{" "}{item.shape}
            </td>
      ))}
    </tr>
    <tr>
      <th scope="row">
        기능성 원료
      </th>
      {result.map((item)=>(
              <td>
              {item.func_material.replace('|', ', ')}
            </td>
      ))}
    </tr>
    <tr>
      <th scope="row">
        제형
      </th>
      {result.map((item)=>(
              <td>
              {item.shape}
            </td>
      ))}
    </tr>
    <tr>
      <th scope="row">
        판매가격
      </th>
      {result.map((item)=>(
              <td>
              {item.detail_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원
            </td>
      ))}
    </tr>
    <tr>
      <th scope="row">
        가격비교
      </th>
      {result.map((item)=>(
              <td>
              <ComparePrice day_price={item.day_price} />
            </td>
      ))}
    </tr>
  </tbody>
</Table>
</div>
  )
}

export default ProductDetailWish