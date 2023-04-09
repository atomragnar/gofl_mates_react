import React, { useEffect, useState } from "react";
import styled from "styled-components";

import {Form, Link as RouterLink, useRouteLoaderData} from 'react-router-dom'

import SideBar from "./SideBar";
import Backdrop from "./Backdrop";

import LogoIcon from "../assets/svg/Logo";
import BurgerIcon from "../assets/svg/BurgerIcon";


export default function TopNavbar(props) {
    const [y, setY] = useState(window.scrollY);
    const [sidebarOpen, toggleSidebar] = useState(false);

    const token = useRouteLoaderData('root');

    const leftSidePagesNoAuth = [
        { id: 2, label: 'Skapa konto', path: '/auth?mode=signup' },
        { id: 3, label: 'Logga in', path: '/auth?mode=login' }
    ];

    const leftSidePagesAuth = [
        { id: 2, label: 'Min profil', path: '/profile' },
        { id: 3, label: 'Bokningar', path: '/bookings' },
        { id: 4, label: 'Användare', path: '/users' },
    ];


    useEffect(() => {
        window.addEventListener("scroll", () => setY(window.scrollY));
        return () => {
            window.removeEventListener("scroll", () => setY(window.scrollY));
        };
    }, [y]);


    return (
        <>
            <SideBar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
            {sidebarOpen && <Backdrop toggleSidebar={toggleSidebar} />}
            <Wrapper className="flexCenter animate whiteBg"
                style={y > 100 ? { height: "60px" } : { height: "80px" }}>

                <NavInner className="container flexSpaceCenter">

                    <RouterLink to="/" smooth={true} className="pointer  flexNullCenter">
                        <LogoIcon />
                        <h1 style={{ marginLeft: "15px" }} className="font15 extraBold">
                            Golf Mates
                        </h1>
                    </RouterLink>


                    {!token && (
                        <UlWrapper className="flexNullCenter">
                            {leftSidePagesNoAuth.map((page, id) => (
                                <li key={id} className="semiBold font15 pointer">
                                    <StyledRouterLink
                                        activeClass="active"
                                        activeClassName="active"
                                        style={{ padding: "10px 15px" }}
                                        to={page.path}
                                        spy={true}
                                        smooth={true}
                                        offset={-80}
                                    >
                                        {page.label}
                                    </StyledRouterLink>
                                </li>
                            ))}
                        </UlWrapper>
                    )}

                    {token && (
                        <UlWrapper>
                            {leftSidePagesAuth.map((page, id) => (
                                <StyledListItems key={id}>
                                    <StyledRouterLink
                                        activeClassName="active"
                                        style={{ padding: "10px 15px" }}
                                        to={page.path}
                                        spy={true}
                                        smooth={true}
                                        offset={-80}
                                    >
                                        {page.label}
                                    </StyledRouterLink>
                                </StyledListItems>
                            ))}
                        </UlWrapper>
                    )}
                    {token && (
                        <UlWrapperRight className="flexNullCenter">
                            <Form action="/logout" method="post">
                            <button>Logout</button>
                        </Form></UlWrapperRight>
                    )}


                    <BurderWrapper onClick={() => toggleSidebar(!sidebarOpen)}>
                        <BurgerIcon />
                    </BurderWrapper>
                </NavInner>
            </Wrapper>
        </>
    );
}

const Wrapper = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
`;
const NavInner = styled.div`
  position: relative;
  height: 100%;
`;

const BurderWrapper = styled.button`
  outline: none;
  border: 0px;
  background-color: transparent;
  height: 100%;
  padding: 0 15px;
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;
const UlWrapper = styled.ul`
  display: flex;
  @media (max-width: 768px) {
    display: none;
  }
`;
const UlWrapperRight = styled.ul`
  display: flex;
  @media (max-width: 768px) {
    display: none;
  }
`;

const StyledListItems = styled.li`
  color: #0b093b;
  font-weight: 600 !important;
  font-size: 0.938rem;
  cursor: pointer;
`;

const StyledRouterLink = styled(RouterLink)`
  text-decoration: none !important;
  color: #0b093b;
  font-size: 0.9rem;
    :active {
    border-bottom: 2px solid var(--color-gray-500);
    color: var(--color-gray-500);
  }
`;
