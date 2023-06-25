import { useState } from 'react'
import { Link } from 'react-router-dom'

const PopProduct = () => {

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
      **영양소 그래프**
      -글루타치온
      -<button onClick={choice}>유산균</button>
      -오메가3
      성별
      남 여
      연령대
      10대 <br/>
      { userChoice && <Link to='/productcontent'>루테인 제품 보러가기</Link> }
      
    </div>
  )
}

export default PopProduct