import {Outlet} from "react-router-dom";
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
