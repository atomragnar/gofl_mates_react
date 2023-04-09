import {Outlet} from "react-router-dom";
import {ProfileContainer} from "../components/containers/ProfileContainer";
import {Card, Grid} from "@mui/material";
import {BookingsNavigation} from "../components/BookingsNavigation";
import {ProfileNavigation} from "../components/ProfileNavigation";

export const ProfileRootLayout = () => {
    return (
        <ProfileContainer>
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{minHeight: '100vh'}}
        >
            <Grid xs={12}>
                <ProfileNavigation/>
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
        </ProfileContainer>

    )
}
