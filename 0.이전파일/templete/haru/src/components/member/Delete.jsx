import React from 'react'
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';

const Delete = () => {
  return (
    <div>
<div className="spacer" id="forms-component">
    <Container>
        <Row className="justify-content-center">
            <Col md="7" className="text-center">
                <h1 className="title font-bold">회원탈퇴</h1>
            </Col>
        </Row>
    </Container>
</div>
<Container>
    <Row>
        <Col md="12">
            <Form className="row">
                <FormGroup className="col-md-6">
                    <Label htmlFor="id">ID</Label>
                    <Input type="text" className="form-control" id="id" placeholder="ID" disabled />
                </FormGroup>

                <FormGroup className="col-md-6">
                    <Label htmlFor="password">Password</Label>
                    <Input type="password" className="form-control" id="password" placeholder="Password" />
                </FormGroup>
                <FormGroup className="col-md-6">
                    <Label htmlFor="confirmpwd">Confirm Password</Label>
                    <Input type="password" className="form-control" id="confirmpwd" placeholder="Confirm Password" />
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

export default Delete