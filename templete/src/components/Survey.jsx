import React from 'react'
import { useNavigate } from 'react-router';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';

const Survey = () => {

    const nav = useNavigate();

  return (
    <div>
        <div className="spacer" id="forms-component">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="7" className="text-center">
                            <h1 className="title font-bold">설문조사</h1>
                            <h6 className="subtitle">아래 항목에 대해 설문해 주시면 그에 맞는 영양제를 추천해 드려요. </h6>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container>
                <Row>
                    <Col md="12">
                        <Form className="row" method="get" action="http://localhost:8085/haru/survey">
                            <FormGroup className="col-md-6">
                                <Label htmlFor="gender">성별</Label>
                                <div>
                                <Input type="radio" name="gender" value="m" />
                                <Label htmlFor="gender"> 남성 </Label>
                                </div>
                                <div>
                                <Input type="radio" name="gender" value="w" />
                                <Label htmlFor="gender"> 여성 </Label>
                                </div>
                            </FormGroup>
                            <FormGroup className="col-md-6">
                                <Label htmlFor="birth">출생연도</Label>
                                <select name="birthYear">
                                    <option value="1993">1993년</option>
                                    <option value="1993">1994년</option>
                                    <option value="1993">1995년</option>
                                    <option value="1993">1996년</option>
                                    <option value="1993">1997년</option>
                                    <option value="1993">1998년</option>
                                </select>
                                {/* <Input type="date" className="form-control" id="birth"/> */}
                            </FormGroup>
                            <FormGroup className="col-md-12 ml-3">
                                <h5>불편하거나 걱정되는 항목 3가지를 선택해 주세요.</h5>
                                <div>
                                <Input name="interest" value="8" type="checkbox" />
                                <Label htmlFor="checkbox1"> 혈관, 혈액 순환 </Label>
                                </div>
                                <div>
                                <Input name="interest" value="12" type="checkbox" />
                                <Label htmlFor="checkbox2"> 소화, 장 </Label>
                                </div>
                                <div>
                                <Input name="interest" value="13" type="checkbox" />
                                <Label htmlFor="checkbox3"> 눈 </Label>
                                </div>
                                <div>
                                <Input name="interest" value="21" type="checkbox" />
                                <Label htmlFor="checkbox4"> 간 </Label>
                                </div>
                                <div>
                                <Input name="interest" value="9" type="checkbox" />
                                <Label htmlFor="checkbox5"> 뼈, 관절 </Label>
                                </div>
                                <div>
                                <Input name="interest" value="15" type="checkbox" />
                                <Label htmlFor="checkbox6"> 항산화 </Label>
                                </div>
                            </FormGroup>
                            <Col md="12">
                                <Button type="submit" className="btn btn-success waves-effect waves-light m-r-10">Submit</Button>
                                <Button type="reset" className="btn btn-inverse waves-effect waves-light">Cancel</Button>
                            </Col>
                        </Form>
                    </Col>
                </Row>
            </Container>
    </div>
  )
}

export default Survey