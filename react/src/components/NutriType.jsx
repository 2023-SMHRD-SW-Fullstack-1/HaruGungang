import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const NutriType = () => {

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
      <div>
        <button onClick={choice}>눈 건강 이미지</button> <br/>
        { userChoice && (
        <div>눈 건강에 대한 고민이 있으신가요?<br/>
        루테인<br/>
        -황반색소 유지<br/>
        -퇴화 예방<br/>
        <Link to='/productcontent'>루테인 제품 보러가기</Link></div>
        )}
      </div>
    </div>
  )
}

export default NutriType