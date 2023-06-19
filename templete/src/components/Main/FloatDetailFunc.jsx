import React from 'react'
import { Card, CardBody } from 'reactstrap';

const FloatDetailFunc = ({title, nutri, effect}) => {
  return (
    <div>
         <Card className="card-shadow">
            <CardBody>
                <div className="p-20">
                    <span className="label label-info label-rounded">{title}</span>
                    <h3 className="title">{nutri}</h3>
                    <p>{effect}</p>
                    <a className="btn btn-info-gradiant btn-md btn-arrow m-t-20" href="/haru/info/nutri"><span>상세 정보 및 제품 보러가기  <i className="ti-arrow-right"></i></span></a>
                </div>
            </CardBody>
        </Card>
    </div>
  )
}

export default FloatDetailFunc