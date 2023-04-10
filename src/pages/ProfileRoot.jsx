import {Outlet} from "react-router-dom";
import {ProfileNavigation} from "../components/ProfileNavigation";
import {Grid} from "@mui/material";
import PageContent from "./PageContent";


export const ProfileRootLayout = () => {
    return (
<PageContent>
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{minHeight: '60vh'}}
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
                style={{minHeight: '60vh'}}
            >
                <Outlet/>
            </Grid>
        </Grid>
</PageContent>
)
}
