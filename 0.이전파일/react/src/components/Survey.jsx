import React from 'react'
import SurveyList from './SurveyList'
import SurveyResult from './SurveyResult'
import { Link } from 'react-router-dom'

const Survey = () => {
  return (
    <div>
      맵함수<SurveyList />
      <Link to='surveyresult'>결과 확인</Link>
    </div>
  )
}

export default Survey