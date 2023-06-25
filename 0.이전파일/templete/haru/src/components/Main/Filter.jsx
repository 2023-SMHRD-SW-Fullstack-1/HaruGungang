import React from 'react'
import { Button } from 'reactstrap';

const Filter = ({addGenderFilter, addAgeFilter, loadData}) => {
  return (
    <div>
        <div className='3month'>
        <div>
            <h4 className='title font-bold'>성별</h4>
            <div>
            <Button outline color="secondary" value="m" onClick={addGenderFilter}>남</Button> {"   "}
            <Button outline color="secondary" value="w" onClick={addGenderFilter}>여</Button>
            </div>
        </div>
        <div>
            <h4 className='title font-bold'>연령대</h4>
            <div>
            <Button outline color="secondary" value="10" onClick={addAgeFilter}>10대</Button> {"   "}
            <Button outline color="secondary" value="20" onClick={addAgeFilter}>20대</Button> {"   "}
            <Button outline color="secondary" value="30" onClick={addAgeFilter}>30대</Button> {"   "}
            <Button outline color="secondary" value="40" onClick={addAgeFilter}>40대</Button> {"   "}
            <Button outline color="secondary" value="50" onClick={addAgeFilter}>50대</Button> {"   "}
            <Button outline color="secondary" value="60" onClick={addAgeFilter}>60대</Button> {"   "}
            </div>
            <br/>
            <Button color="success" onClick={loadData}>조회하기</Button>
            
        </div>
        <br/>
        </div>
    </div>
  )
}

export default Filter