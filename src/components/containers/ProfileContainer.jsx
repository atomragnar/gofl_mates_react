import Player from "../../assets/svg/Services/player";
import styled from "styled-components";
import React from "react";
import {ProfileRootLayout} from "../../pages/ProfileRoot";
import {ProfileNavigation} from "../ProfileNavigation";

export const ProfileContainer = ({children}) => {

    const getIcon = <Player/>

    return (
        <Wrapper className="whiteBg radius8 shadow">
            <div className="flexSpaceCenter">
                {getIcon}

            </div>
            <div className="flexCenter">
                <ProfileNavigation/>
            </div>

            {children}
            {/*<div style={{ maxWidth: "120px", margin: "30px auto 0 auto" }}>*/}
            {/*    <FullButton title="Köp" action={action} />*/}
            {/*</div>*/}
        </Wrapper>
    );
}

const Wrapper = styled.div`
  width: 70%;
  height: 70%;
  text-align: left;
  padding: 20px 30px;
  margin-top: 30px;
`;

