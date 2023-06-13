import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Preview = () => {

  const nav = useNavigate()

  return (
    <div className='preview-container'>
      영양제 언제 뭐랑 먹으면 더 좋을까? 
      <div className='item-container'>
        <div className='preview-item'>
        <Link to='/survey'>설문하고 추천받기</Link>         
        </div>
        <div className='preview-item'>
          영양제 정보보기
        </div>
      </div>
    </div>
  )
}

export default Preview