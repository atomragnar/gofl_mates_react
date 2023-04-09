import {BookingsNavigation} from "../components/BookingsNavigation";
import PageContent from "./PageContent";
import {Outlet} from "react-router-dom";
import {Grid, Card} from "@mui/material";

export const BookingsRootLayout = () => {
    return (
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
            <Card sx={{minWidth: 275}} variant="outlined">
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
            </Card>
        </Grid>

    )
}
