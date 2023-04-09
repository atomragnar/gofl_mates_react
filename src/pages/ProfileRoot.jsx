import {Outlet} from "react-router-dom";
import {ProfileNavigation} from "../components/ProfileNavigation";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Grid} from "@mui/material";
import {BookingsNavigation} from "../components/BookingsNavigation";


export const ProfileRootLayout = () => {
    return (
        /*        <ProfileContainer>
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
               </ProfileContainer> */

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

  /*      <Container>
            <Row>
                <Col>1 of 3</Col>
                <Col xs={6}>

                    <ProfileNavigation/>
                    <Outlet/>

                </Col>
                <Col>3 of 3</Col>
            </Row>
        </Container>*/

)
}
