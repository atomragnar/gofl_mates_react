import classes from './ProfileNavigation.module.css'
import {NavLink, useRouteLoaderData} from "react-router-dom";
import styled from "styled-components";

export const ProfileNavigation = () => {
    const token = useRouteLoaderData('root');

    return (
        <div className="container1 flexSpaceCenter1">
                <UlWrapper className="flexNullCenter1">
                    {token && (
                        <li className="semiBold font15 pointer1">
                            <NavLink
                                to="/profile"
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
                                Profil
                            </NavLink>
                        </li>
                    )}
                    {token && (
                        <li className="semiBold font15 pointer1">
                            <NavLink
                                to="/profile/bookings"
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
                                Bokningar
                            </NavLink>
                        </li>
                    )}
                    {token && (
                        <li className="semiBold font15 pointer1">
                            <NavLink
                                to="/profile/bookings/my-bookings"
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
                                Mina skapade speltider
                            </NavLink>
                        </li>
                    )}
                    {token && (
                        <li className="semiBold font15 pointer1">
                            <NavLink
                                to="/profile/bookings/requests"
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
                                Bokningsförfrågningar
                            </NavLink>
                        </li>
                    )}
                    {token && (
                        <li className="semiBold font15 pointer1">
                            <NavLink
                                to="/profile/bookings/my-requests"
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
                                Mina förfrågningar
                            </NavLink>
                        </li>
                    )}
                    {token && (
                        <li className="semiBold font15 pointer1">
                            <NavLink
                                to="/profile/edit"
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
                                Inställningar
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
