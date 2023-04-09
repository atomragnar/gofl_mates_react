import Player from "../../assets/svg/Services/player";
import styled from "styled-components";
import React from "react";
import {ProfileRootLayout} from "../../pages/ProfileRoot";
import {ProfileNavigation} from "../ProfileNavigation";
import {Grid} from "@mui/material";

export const ProfileContainer = ({children}) => {

    const getIcon = <Player/>

    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{minHeight: '100vh'}}
        >
        <Wrapper className="whiteBg radius8 shadow">
            <div>
                {getIcon}

            </div>

            {children}
            {/*<div style={{ maxWidth: "120px", margin: "30px auto 0 auto" }}>*/}
            {/*    <FullButton title="Köp" action={action} />*/}
            {/*</div>*/}
        </Wrapper>
        </Grid>
    );
}

const Wrapper = styled.div`
  width: 70%;
  height: 70%;
  text-align: left;
  padding: 20px 30px;
  margin-top: 30px;
`;

