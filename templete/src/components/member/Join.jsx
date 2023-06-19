import React from 'react'
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, ButtonGroup } from 'reactstrap';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button, FormFeedback } from 'reactstrap';
const Join = () => {
  return (
    <div>
      <div className="spacer" id="forms-component">
    <Container>
        <Row className="justify-content-center">
            <Col md="7" className="text-center">
                <h1 className="title font-bold">회원가입</h1>
            </Col>
        </Row>
    </Container>
</div>
<Container>
    <Row>
        <Col md="12">
            <Form className="row">
                <FormGroup className="col-md-6">
                    <Label htmlFor="name">ID</Label>
                    <Input type="text" className="form-control" id="name" placeholder="ID" />
                </FormGroup>

                <FormGroup className="col-md-6">
                    <Label htmlFor="password">Password</Label>
                    <Input type="password" className="form-control" id="password" placeholder="Password" />
                </FormGroup>
                <FormGroup className="col-md-6">
                    <Label htmlFor="confirmpwd">Confirm Password</Label>
                    <Input invalid type="password" className="form-control" id="confirmpwd" placeholder="Confirm Password" />
                    {/* valid일 경우 */}
                    <FormFeedback valid>Sweet! that name is available</FormFeedback>
                    {/* iinvalid일 경우 */}
                    <FormFeedback invalid>Oh noes! that name is already taken</FormFeedback>
                </FormGroup>

                <div className="col-md-6">
                <FormGroup check >
                  <Input
                    name="gender"
                    type="radio"
                  />
                  {' '}
                  <Label check>
                    여성
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Input
                    name="gender"
                    type="radio"
                  />
                  {' '}
                  <Label check>
                    남성
                  </Label>
                </FormGroup>
                </div>

                <FormGroup className="col-md-6">
                  <Label for="birth-year-join">
                    연령대 선택
                  </Label>
                  <Input
                    id="birth-year-join"
                    name="birth-yaer"
                    type="select"
                  >
                    <option>
                      10대
                    </option>
                    <option>
                      20대
                    </option>
                    <option>
                      30대
                    </option>
                    <option>
                      40대
                    </option>
                    <option>
                      50대
                    </option>
                    <option>
                      60대 이상
                    </option>
                  </Input>
                </FormGroup>
                <FormGroup className="col-md-12 ml-3">
                    <Input id="checkbox1" type="checkbox" />
                    <Label htmlFor="checkbox1"> Remember me </Label>
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

export default Join