import React, { useState } from 'react'
import ProductItem from './ProductItem'

const ProductContent = () => {

  const [userChoice, setUserChoice] = useState('false')
  
  const choice = () => {
    if(userChoice == false) {
      setUserChoice(true)
    } else {
      setUserChoice(false)
    }
  }

  return (
    <div>
      루테인 지아잔틴 <br/>
      효능 <br/>
      노화로 인해 ~ 도움을 줍니다. <br/>
      복용방법 1일권장섭취량 상호작용 <br/>
      
      <div>
        <button onClick={choice}>FAQ</button> <br/>
        { userChoice && (
          <div>
            눈 영양제로 어떤 제품을~좋을까요?<br/>
            1. 눈이 건조하고, 가렵다면?<br/>
            2. 눈이 많이 피곤하다면?<br/>
            3. 화면을 본 후에 시야가 흐릿하게 느껴진다면?<br/>
            흡연하는 사람이~ 괜찮나요?
          </div>
        )}
      </div>

      **맵함수** <ProductItem /> <br/>
      제품 더보기
    </div>
  )
}

export default ProductContent