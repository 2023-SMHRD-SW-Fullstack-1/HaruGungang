import React from 'react'
import { Table } from 'reactstrap'
import ComparePrice from './ComparePrice'

const ProductDetailWish = () => {
  return (
    <div>
      <Table borderless>
  <thead>
    <tr>
      <th>
        
      </th>
      <th>
        제품1 사진
      </th>
      <th>
        제품2 사진
      </th>
      <th>
        제품3 사진
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">
        제품명
      </th>
      <td>
        exma
      </td>
      <td>
        Otto
      </td>
      <td>
        Otto
      </td>
    </tr>
    <tr>
      <th scope="row">
        제조사
      </th>
      <td>
        Jacob
      </td>
      <td>
        Thornton
      </td>
      <td>
        Thornton
      </td>
    </tr>
    <tr>
      <th scope="row">
        포장수량
      </th>
      <td>
        Larry
      </td>
      <td>
        the Bird
      </td>
      <td>
        the Bird
      </td>
    </tr>
    <tr>
      <th scope="row">
        기능성 원료
      </th>
      <td>
        Larry
      </td>
      <td>
        the Bird
      </td>
      <td>
        the Bird
      </td>
    </tr>
    <tr>
      <th scope="row">
        제형
      </th>
      <td>
        Larry
      </td>
      <td>
        the Bird
      </td>
      <td>
        the Bird
      </td>
    </tr>
    <tr>
      <th scope="row">
        판매가격
      </th>
      <td>
        Larry
      </td>
      <td>
        the Bird
      </td>
      <td>
        the Bird
      </td>
    </tr>
    <tr>
      <th scope="row">
        가격비교
      </th>
      <td>
        <ComparePrice/>
      </td>
      <td>
        <ComparePrice/>
      </td>
      <td>
        <ComparePrice/>
      </td>
    </tr>
  </tbody>
</Table>
</div>
  )
}

export default ProductDetailWish