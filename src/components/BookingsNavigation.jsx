import classes from './BookingsNavigation.module.css'
import {NavLink, useRouteLoaderData} from "react-router-dom";

export const BookingsNavigation = () => {
    const token = useRouteLoaderData('root');

    return (
        <header className={classes.header}>
            <nav>
                <ul className={classes.list}>
                    <li>
                        <NavLink
                            to="/bookings"
                            className={({ isActive }) =>
                                isActive ? classes.active : undefined
                            }
                            end
                        >
                            Alla bokningar
                        </NavLink>
                    </li>
                    {token && (
                        <li>
                            <NavLink
                                to="/bookings/new"
                                className={({ isActive }) =>
                                    isActive ? classes.active : undefined
                                }
                            >
                                Ny Bokning
                            </NavLink>
                        </li>
                    )}
                </ul>
            </nav>
        </header>
    );
}