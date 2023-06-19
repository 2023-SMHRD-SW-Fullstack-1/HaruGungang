import React, { useState } from 'react'
import SurveyGender from './temp/SurveyGender'
import SurveyBirthYear from './temp/SurveyBirthYear'
import SurveyInterest from './temp/SurveyInterest'
import SurveyResult from './SurveyResult'

const SurveyNew = () => {

  const [gender, setGender] = useState("")
  const [ageRange, setAgeArange] = useState(0)
  const [interest, setInterest] = useState([])

  const selectGender = (e)=>{
    console.log('selectGender', e.target.value);
    setGender(e.target.value)
  }

  const selectAgeArange = (e)=>{
    console.log('selectAge', e.target.value);
    setAgeArange(e.target.value)
  }

  let tempList = []
  const selectInterest = (e)=>{
    console.log('selectInterest', e.target.value)
    tempList.push(e.target.value)
  }

  const [visibleGender, setVisibleGender] = useState(true)
  const [visibleAge, setVisibleAge] = useState(false)
  const [visibleInterest, setVisibleInterest] = useState(false)
  const [visibleResult, setVisibleResult] = useState(false)

  const submitGender = ()=>{
    console.log('completeSelect gender');
    setVisibleGender(false)
    setVisibleAge(true)
  }

  const submitAge = ()=>{
    console.log('completeSelect gender');
    setVisibleAge(false)
    setVisibleInterest(true)
  }

  const submitInterest = ()=>{
    console.log('completSelect Interest');
    setInterest(tempList)
    setVisibleInterest(false)
    setVisibleResult(true)
  }

  return (
    <div>
      {visibleGender && 
      <SurveyGender 
        selectGender={selectGender}
        submitGender={submitGender}/>}

      {visibleAge &&
      <SurveyBirthYear selectAgeArange={selectAgeArange} submitAge={submitAge}/>}

      {visibleInterest && 
      <SurveyInterest selectInterest={selectInterest} submitInterest={submitInterest}/>}

      {visibleResult && 
      <SurveyResult gender={gender} ageRange={ageRange} interest={interest}/> }
    </div>
  )
}

export default SurveyNew