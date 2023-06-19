import React, { useEffect } from 'react'
import ResultBySurvey from './temp/ResultBySurvey';
import ResultByBasic from './temp/ResultByBasic';

const SurveyResult = ({gender, ageRange, interest}) => {

  return (
    <div>
      <ResultBySurvey interest={interest}/>
      <ResultByBasic gender={gender} ageRange={ageRange}/>     
    </div>
  )
}

export default SurveyResult