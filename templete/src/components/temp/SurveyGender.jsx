/* eslint-disable */
import React, { useContext, useEffect, useState } from 'react';
import { Button, Row, Col, Container } from 'reactstrap';
import axios from 'axios'

const SurveyGender = ({selectGender, submitGender}) => {

    return (
        <div className="wrapper">
            <div className="middle-spacer" id="card-component">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="7" className="text-center">
                            <h1 className="title font-bold">성별을 알려주세요.</h1>
                        </Col>
                    </Row>
                </Container>
            </div>
                <div id="gender-select">
                    <Button className="gender-btn" color="success" name="gender" value="m" onClick={selectGender}>남성</Button>
                    <Button className="gender-btn" color="success" name="gender" value="w" onClick={selectGender}>여성</Button>
                </div>
                <Button color="success" size='lg' onClick={submitGender}>다음</Button>
        </div>
    );
}

export default SurveyGender;
