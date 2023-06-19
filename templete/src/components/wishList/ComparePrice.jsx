import React from 'react'
import { Progress } from 'reactstrap'

const ComparePrice = () => {
  return (
    <div>
      <Progress className="my-2" value={126} max={1000} style={{height: "30px"}}>126원</Progress>
    </div>
  )
}

export default ComparePrice