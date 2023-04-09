import {BookingContent} from "./BookingContent";
import {Grid} from "@mui/material";
import {Outlet} from "react-router-dom";

export const OtherUsersRoot = () => {
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
                    Alla användare
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
