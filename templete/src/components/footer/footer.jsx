/* eslint-disable */
import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import cartIcon from '../../assets/images/bar/cart1.png';
import mypageIcon from '../../assets/images/bar/profile-picture1.png';
import mainIcon from '../../assets/images/bar/supplements1.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer4">
            <Container>
                <div className="f4-bottom-bar">
                    <Row>
                        <Col md="12">
                        <div className="footer-nav">
                        <div className="footer-nav-item">
                        <Link to="haru/mypage">
                            <img src={mypageIcon} alt="mypage" width="60px"/>
                            <p className="p-0">mypage</p>
                        </Link>
                        </div>
                        <div className="footer-nav-item">
                        <Link to="haru/main">
                            <img src={mainIcon} alt="mainpage" width="80px"/>
                            <p className="p-0">main</p>
                        </Link>
                        </div>
                        <div className="footer-nav-item">
                        <Link to="haru/wishlist">
                            <img src={cartIcon} alt="wishlist" width="50px" />
                            <p className="p-0">wish list</p>
                        </Link>
                        </div>
                        </div>
                            <div className="d-flex font-14">
                            <div className="links ml-auto m-t-10 m-b-10">     
                                </div>

                                {/* <div className="m-t-10 m-b-10 copyright">All Rights Reserved by WrapPixel.</div> */}
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
}
export default Footer;