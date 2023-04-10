import styled from "styled-components";
import {Avatar} from "@mui/material";
import React, {useEffect, useState} from "react";
import {getAuthToken, getUserId} from "../../util/Auth";
import myImage from "../../assets/img/large-open-air-course-with-golf-stick-and-ball-web-header.jpg"

export const RemadeProfileCard = () => {

    const [userInfo, setUserInfo] = useState(null);

    const userId = getUserId();
    const token = getAuthToken();

    useEffect(() => {
        async function fetchUserInfo() {
            const response = await fetch(`http://localhost:8085/users/info/id/${userId}`, {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            });
            const data = await response.json();
            setUserInfo(data);
        }
        fetchUserInfo();
    }, []);

    if (!userInfo) {
        return <p>Loading...</p>;
    }




    return (
            <Wrapper2 className="whiteBg radius8 shadow">
                <UpperContainer2 classname="radius8 shadow">
                    <ImageContainer2 >
                        <img src={myImage} alt='' height='100px' width='300px'
                             style={{borderRadius: '8px', opacity: '0.5'}}
                        />
                    </ImageContainer2>
                </UpperContainer2>
                <LowerContainer2>
                <div
                    style={{marginLeft: '80px', marginBottom: '30px', marginTop: '5px'}}
                >
                    <Avatar
                        style={{width: '80px', height: '80px', backgroundColor: '#064e3b'}}
                    >{userInfo.username.charAt(0)} </Avatar>
                </div>
                <h3 className="font20 extraBold">{userInfo.username}</h3>
                <p className="font13" style={{ padding: "10px 0" }}>
                    Member since: {userInfo.createdAt}
                </p>
                <p className="font13" style={{ padding: "10px 0" }}>
                    Golfklubb: {userInfo.golfClub}, {userInfo.location}.
                </p>
                    <p className="font13" style={{ padding: "10px 0" }}>
                        Favoritbana:
                    </p>
                <div className="flex">
                    <p className="tag coralBg radius6 font13 extraBold">Handicap: {userInfo.handicap}</p>
                </div>
                </LowerContainer2>
            </Wrapper2>
    )
}


const LowerContainer2 = styled.div`
  margin-top: 60px;
  height: 300px;
  background: white;
  text-align: center;
  padding: 20px 30px;
  margin-top: 30px;
`;


const Wrapper2 = styled.div`
  //width: 100%;
  width: 300px;
  height: 480px;
  text-align: left;
  
`;

const UpperContainer2 = styled.div`
  height: 100px;
`;

const ImageContainer2 = styled.div`
  padding: 5px;
  background: white;
  width: 290px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
 `;


