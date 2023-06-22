/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { Container, NavbarBrand, Navbar, Nav, NavItem, NavbarToggler, Collapse } from 'reactstrap';

import logo from '../../assets/images/logos/하루로고-removebg-preview.png';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    // 로그아웃 버튼 클릭
    const logoutClick = () => {
        console.log('로그아웃 버튼 클릭!');
        if(sessionStorage.getItem('id') != null) {
            sessionStorage.clear()
            alert('로그아웃, 세션 삭제 완료')
            setIsOpen(!isOpen)
        }
    }

    /*--------------------------------------------------------------------------------*/
    /*To open NAVBAR in MOBILE VIEW                                                   */
    /*--------------------------------------------------------------------------------*/

    return (
        <div className="topbar" id="top">
            <div className="header6">
                <Container className="po-relative">
                    <Navbar className="navbar-expand-lg h6-nav-bar">
{/* <<<<<<< HEAD */}
                        {/* <NavbarBrand><img Src={logo} alt="HARUGUNGANG"/></NavbarBrand>
                        <NavbarToggler onClick={toggle}><span className="ti-menu"></span></NavbarToggler>
                        <Collapse isOpen={isOpen} navbar className="hover-dropdown font-14 ml-auto" id="h6-info">
                            <Nav navbar className="ml-auto">
                                <NavItem>
                                    <Link className="nav-link" to={"/haru/login"}>
                                        LOGIN
										</Link>
                                </NavItem>
                                <NavItem>
                                    <Link className="nav-link" to={"/haru/join"}>
                                        JOIN
                                    	</Link>
                                </NavItem>
                            </Nav>
                        </Collapse> */}

                        <NavbarBrand><img src={logo} alt="HARUGUNGANG" /></NavbarBrand>                        
                        {
                            sessionStorage.getItem('id') == null ? (
                                <>
                                    <NavbarToggler onClick={toggle}><span className="ti-menu"></span></NavbarToggler>
                                    <Collapse isOpen={isOpen} navbar className="hover-dropdown font-14 ml-auto" id="h6-info">
                                        <Nav navbar className="ml-auto">
                                            <NavItem>
                                                <Link className="nav-link" to={"/haru/login"}>
                                                    LOGIN
                                                    </Link>
                                            </NavItem>
                                            <NavItem>
                                                <Link className="nav-link" to={"/haru/join"}>
                                                    JOIN
                                                    </Link>
                                            </NavItem>
                                        </Nav>
                                    </Collapse>
                                </>
                            ) :
                            (
                                <>
                                    <NavbarToggler onClick={toggle}><span className="ti-menu"></span></NavbarToggler>
                                    <Collapse isOpen={isOpen} navbar className="hover-dropdown font-14 ml-auto" id="h6-info">
                                        <Nav navbar className="ml-auto">
                                            <NavItem>
                                                <Link className="nav-link" to={"/haru/mypage"}>
                                                    MYPAGE
                                                    </Link>
                                            </NavItem>
                                            <NavItem>
                                                <Link className="nav-link" to={"/haru/wishlist"}>
                                                    WISHLIST
                                                    </Link>
                                            </NavItem>
                                            <NavItem>
                                                <Link onClick={logoutClick} className="nav-link" to={"/haru/preview"}>
                                                    LOGOUT
                                                    </Link>
                                            </NavItem>
                                        </Nav>
                                    </Collapse>
                                </>
                            )
                        }
{/* >>>>>>> ksy */}
                    </Navbar>
                </Container>
            </div>
        </div>
    );

}
export default Header;
