import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

import CloseIcon from "../assets/svg/CloseIcon";
import LogoIcon from "../assets/svg/Logo";
import {Form, useRouteLoaderData} from "react-router-dom";

const leftSidePagesNoAuth = [
    { id: 1, label: 'Home', path: '/' },
    { id: 2, label: 'Skapa konto', path: '/auth?mode=signup' },
    { id: 3, label: 'Logga in', path: '/auth?mode=login' }
];

const leftSidePagesAuth = [
    { id: 1, label: 'Home', path: '/' },
    { id: 2, label: 'Min profil', path: '/profile' },
    { id: 3, label: 'Bokningar', path: '/bookings' },
    { id: 4, label: 'Användare', path: '/users' },
    { id: 5, label: 'Skapa konto', path: '/auth?mode=signup' },
    { id: 6, label: 'Logga in', path: '/auth?mode=login' },
    { id: 6, label: 'Logga ut', path: '/logout' }
];


export default function SideBar({ sidebarOpen, toggleSidebar }) {

    const token = useRouteLoaderData('root');

    return (
        <Wrapper sidebarOpen={sidebarOpen}>
            <SidebarHeader>
                <div>
                    <LogoIcon />
                    <h1 style={{ marginLeft: "15px" }}>
                        Golf Mates
                    </h1>
                </div>
                <CloseBtn
                    onClick={() => toggleSidebar(!sidebarOpen)}
                >
                    <CloseIcon />
                </CloseBtn>
            </SidebarHeader>
            {!token && (
                <UlStyle >
                    {leftSidePagesNoAuth.map((page, id) => (
                        <StyledListItem key={id}>
                            <Link
                                onClick={() => toggleSidebar(!sidebarOpen)}
                                style={{ padding: "10px 15px" }}
                                to={page.path}
                                spy={true}
                                smooth={true}
                                offset={-60}
                            >
                                {page.label}
                            </Link>
                        </StyledListItem>
                    ))}
                </UlStyle>
            )}
            {token && (
                <UlStyle>
                    {leftSidePagesAuth.map((page, id) => (
                        <StyledListItem key={id}>
                            <Link
                                onClick={() => toggleSidebar(!sidebarOpen)}
                                style={{ padding: "10px 15px" }}
                                to={page.path}
                                spy={true}
                                smooth={true}
                                offset={-60}
                            >
                                {page.label}
                            </Link>
                        </StyledListItem>
                    ))}
                </UlStyle>
            )}
            {!token && (
                <UlStyle>
                    <StyledListItem>
                        <a
                            href='/auth?mode=login'
                            style={{ padding: "10px 30px 10px 0" }}
                        >
                            Logga in
                        </a>
                    </StyledListItem>
                    <StyledListItem>
                        <a
                            href='/auth?mode=signup'
                            style={{ padding: "10px 15px" }}
                        >
                            Skapa konto
                        </a>
                    </StyledListItem>
                </UlStyle>
            )}
            {token && (
                <UlStyle>
                    <StyledListItem>
                        <Form action="/logout" method="post">
                            <button>Logout</button>
                        </Form>
                    </StyledListItem>
                </UlStyle>
            )}
        </Wrapper>
    );
}

const Wrapper = styled.nav`
  width: 400px;
  height: 100vh;
  position: fixed;
  top: 0;
  padding: 0 30px;
  right: ${(props) => (props.sidebarOpen ? "0px" : "-400px")};
  z-index: 9999;
  transition: 0.3s ease;
  background-color: #0b093b;
  @media (max-width: 400px) {
    width: 100%;
  }
`;
const SidebarHeader = styled.div`
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const CloseBtn = styled.button`
  border: 0px;
  outline: none;
  background-color: transparent;
  padding: 10px;
  transition: 0.3s ease;
  cursor: pointer;
`;
const UlStyle = styled.ul`
  padding: 40px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const StyledListItem = styled.li`
  margin: 20px 0;
  text-decoration: none !important;
  color: #ffffff;
  font-weight: 600 !important;
  font-size: 0.938rem;
  cursor: pointer;
`
const StyledH1 = styled.h1`
  margin-left: 15px;
  color: #ffffff;
  font-size: 1.25rem;
`
