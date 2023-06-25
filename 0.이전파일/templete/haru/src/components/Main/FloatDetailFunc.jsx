import React from 'react'
import { Card, CardBody } from 'reactstrap';

const FloatDetailFunc = ({title, nutri, effect}) => {
  return (
    <div>
         <Card className="card-shadow">
            <CardBody>
                <div className="p-20">
                    <span className="title font-bold" class="badge text-bg-success">{title}</span>
                    
                    <h2 className="title font-bold">{nutri}</h2>
                    <h5 className="title font-bold">{effect}</h5>
                    <a className="btn btn-success btn-lg btn-arrow m-t-20" href="/haru/info/nutri"><span>상세 정보 및 제품 보러가기  <i className="ti-arrow-right"></i></span></a>
                </div>
            </CardBody>
        </Card>
    </div>
  )
}

export default FloatDetailFunc