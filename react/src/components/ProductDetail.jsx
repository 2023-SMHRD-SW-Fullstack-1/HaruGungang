import React, { useState } from 'react'

const ProductDetail = () => {

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
      제품이미지
      아이클리어 루테인 지아잔틴 30정
      19500원 | 30개 분량 3통
      루테인 18.182mg
      (주)종근당건강 <br/>
      가격
      하루에 217원
      1일권장섭취량
      10~20mg
      상호작용
      오메가3 마그네슘 칼슘 <br/>
      섭취방법
      하루1회 1캡슐 아침 식후 <br/>
      섭취 주의사항
      과다 섭취 시 일시적으로 피부가 황색으로 변할 수 있음 <br/>
      <button>상품 URL 연결</button> <br/>
      <button>찜하기에 제품 추가하기</button> <br/>
      <button onClick={choice}>제품 정보 더보기</button> <br/>
        { userChoice && (
          <div>
            유통기한 | 개봉 후 36개월<br/>
            기능성 내용 | 노화로 인해 ~ 도움을 줌<br/>
            기능성 원료 | 베타카로틴<br/>
            기타 원료 | 레시틴~ 판토텐산칼슘<br/>
          </div>
        )}
    </div>
  )
}

export default ProductDetail