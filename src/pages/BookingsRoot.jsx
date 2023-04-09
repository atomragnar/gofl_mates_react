import {BookingsNavigation} from "../components/BookingsNavigation";
import PageContent from "./PageContent";
import {Outlet} from "react-router-dom";
import {Grid, Card} from "@mui/material";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
   /*     <>
            <div style={{
                justifyContent: 'center',
                alignContent: 'center',
                height: '100vh'
            }}>
                <BookingsNavigation/>
                        <Outlet/>
            </div>
        </>*/

    )
}
