import classes from './BookingsNavigation.module.css'
import {NavLink, useRouteLoaderData} from "react-router-dom";
import styled from "styled-components";
import {Add as AddIcon} from "@mui/icons-material";
import {Fab} from "@mui/material";
import React from "react";

export const BookingsNavigation = () => {
    const token = useRouteLoaderData('root');

    return (
        <div className="container1 flexSpaceCenter1">
                <UlWrapper className="flexNullCenter1">
                    {token && (
                    <li className="semiBold font15 pointer1">
                        <NavLink
                            to="/bookings"
                            className={({ isActive }) =>
                                isActive ? classes.active : undefined
                            }
                            activeClass="active"
                            activeClassName="active"
                            style={{ padding: "10px 15px" }}
                            spy={true}
                            smooth={true}
                            offset={-80}
                        >
                            Alla
                        </NavLink>
                    </li>
                    )}
                    {token && (
                        <li className="semiBold font15 pointer1">
                            <NavLink
                                to="/bookings/suggested"
                                className={({ isActive }) =>
                                    isActive ? classes.active : undefined
                                }
                                activeClass="active"
                                activeClassName="active"
                                style={{ padding: "10px 15px" }}
                                spy={true}
                                smooth={true}
                                offset={-80}
                            >
                                Se speltider för ditt handikapp
                            </NavLink>
                        </li>
                    )}
                    {token && (
                        <li className="semiBold font15 pointer1">
                            <NavLink
                                to="/bookings/locations"
                                className={({ isActive }) =>
                                    isActive ? classes.active : undefined
                                }
                                activeClass="active"
                                activeClassName="active"
                                style={{ padding: "10px 15px" }}
                                spy={true}
                                smooth={true}
                                offset={-80}
                            >
                                Bokningar i ditt område
                            </NavLink>
                        </li>
                    )}
                    {token && (
                        <li className="semiBold font15 pointer1">
                            <NavLink
                                to="/bookings/new"
                                className={({ isActive }) =>
                                    isActive ? classes.active : undefined
                                }
                                activeClass="active"
                                activeClassName="active"
                                style={{ padding: "10px 15px" }}
                                spy={true}
                                smooth={true}
                                offset={-80}
                            >
                                <Fab color="secondary" >
                                    <AddIcon/>
                                </Fab>
                            </NavLink>
                        </li>
                    )}
                </UlWrapper>
                </div>
    );
}


const UlWrapper = styled.ul`
  display: flex;
  @media (max-width: 768px) {
    display: none;
  }
`;
