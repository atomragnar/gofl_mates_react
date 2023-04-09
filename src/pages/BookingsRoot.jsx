import {BookingsNavigation} from "../components/BookingsNavigation";
import {BookingContent} from "./BookingContent";
import {Outlet} from "react-router-dom";
import {Grid, Card} from "@mui/material";


export const BookingsRootLayout = () => {
    return (
        <BookingContent>
                 <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    style={{minHeight: '100vh'}}
                >
                    <Grid xs={12}>
                        <BookingsNavigation/>
                    </Grid>
                        <Grid
                            container
                            spacing={0}
                            direction="column"
                            alignItems="center"
                            justifyContent="center"
                            style={{minHeight: '100vh'}}
                        >
                        <Outlet/>
                        </Grid>
                </Grid>
        </BookingContent>

    )
}
