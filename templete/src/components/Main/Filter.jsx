import React from 'react'
import { Button } from 'reactstrap';

const Filter = ({addGenderFilter, addAgeFilter, loadData}) => {
  return (
    <div>
        <div>
            <h5>성별</h5>
            <div>
            <Button outline color="secondary" value="m" onClick={addGenderFilter}>남</Button>
            <Button outline color="secondary" value="w" onClick={addGenderFilter}>여</Button>
            </div>
        </div>
        <div>
            <h5>연령대</h5>
            <div>
            <Button outline color="secondary" value="10" onClick={addAgeFilter}>10대</Button>
            <Button outline color="secondary" value="20" onClick={addAgeFilter}>20대</Button>
            <Button outline color="secondary" value="30" onClick={addAgeFilter}>30대</Button>
            <Button outline color="secondary" value="40" onClick={addAgeFilter}>40대</Button>
            <Button outline color="secondary" value="50" onClick={addAgeFilter}>50대</Button>
            <Button outline color="secondary" value="60" onClick={addAgeFilter}>60대</Button>
            </div>
            <Button color="success" onClick={loadData}>조회하기</Button>
        </div>
    </div>
  )
}

export default Filter