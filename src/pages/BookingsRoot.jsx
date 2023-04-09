import {BookingsNavigation} from "../components/BookingsNavigation";
import PageContent from "./PageContent";
import {Outlet} from "react-router-dom";

export const BookingsRootLayout = () => {
    return (
        <>
        <BookingsNavigation/>
                <Outlet/>
        </>
    )
}
