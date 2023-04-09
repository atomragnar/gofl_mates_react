import classes from './ProfileNavigation.module.css'
import {NavLink, useRouteLoaderData} from "react-router-dom";

export const ProfileNavigation = () => {
    const token = useRouteLoaderData('root');

    return (
        <header className={classes.header}>
            <nav>
                <ul className={classes.list}>
                    {token && (
                        <li>
                            <NavLink
                                to="/profile"
                                className={({ isActive }) =>
                                    isActive ? classes.active : undefined
                                }
                                end
                            >
                                Profil
                            </NavLink>
                        </li>
                    )}
                    {token && (
                        <li>
                            <NavLink
                                to="/profile/bookings"
                                className={({ isActive }) =>
                                    isActive ? classes.active : undefined
                                }
                            >
                                Bokningar
                            </NavLink>
                        </li>
                    )}
                    {token && (
                        <li>
                            <NavLink
                                to="/profile/bookings/my-bookings"
                                className={({ isActive }) =>
                                    isActive ? classes.active : undefined
                                }
                            >
                                Mina skapade speltider
                            </NavLink>
                        </li>
                    )}
                    {token && (
                        <li>
                            <NavLink
                                to="/profile/bookings/requests"
                                className={({ isActive }) =>
                                    isActive ? classes.active : undefined
                                }
                            >
                                Bokningsförfrågningar
                            </NavLink>
                        </li>
                    )}
                    {token && (
                        <li>
                            <NavLink
                                to="/profile/bookings/my-requests"
                                className={({ isActive }) =>
                                    isActive ? classes.active : undefined
                                }
                            >
                                Mina förfrågningar
                            </NavLink>
                        </li>
                    )}
                    {token && (
                        <li>
                            <NavLink
                                to="/profile/edit"
                                className={({ isActive }) =>
                                    isActive ? classes.active : undefined
                                }
                            >
                                Inställningar
                            </NavLink>
                        </li>
                    )}
                </ul>
            </nav>
        </header>
    );
}
