import {ProfileNavigation} from "../components/ProfileNavigation";
import {Outlet} from "react-router-dom";
import styled from "styled-components";
import px2vw from "../util/px2vw";
import PageContent from "./PageContent";
import {ProfileContainer} from "../components/containers/ProfileContainer";

export const ProfileRootLayout = () => {
    return (
        <>
           <ProfileContainer>
           <div style={{
               position: 'absolute',
               left: '50%',
               top: '50%',
               transform: 'translate(-50%, -50%)'
           }}>
        <Outlet/>
           </div>
           </ProfileContainer>
        </>
    )
}
