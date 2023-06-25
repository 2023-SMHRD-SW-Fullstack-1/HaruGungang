import React from 'react'
import NutriType from './NutriType'
import PopProduct from './PopProduct'

const Main = () => {
  return (
    <div>
      <div>
        기능성으로 정보 찾기 <br/>
        **맵함수**<NutriType />
      </div>
      <hr/>
      <div>
        최근 3개월간 사람들이 많이 찾은 영양제는?
        <PopProduct />
      </div>
    </div>
  )
}

export default Main