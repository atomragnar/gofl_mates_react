import myImage from "../../assets/img/large-open-air-course-with-golf-stick-and-ball-web-header.jpg";
import {Avatar} from "@mui/material";
import styled from "styled-components";
import React from "react";
import {DeleteBookingButton} from "./DeleteBookingButton";

export const PlayAdsCardUserCreatedAd = ({playAd, handleDelete}) => {
    return (
        <Wrapper2 className="whiteBg radius8 shadow">
                <ImageContainer2 >
                    <img src={myImage} alt='' height='75px' width='300px'
                         style={{borderRadius: '8px', opacity: '0.5'}}
                    />
                </ImageContainer2>
            <LowerContainer2>
                <h3 className="font20 extraBold">#{playAd.playAdId} - {playAd.time}</h3>
                <h3 className="font20 extraBold">{playAd.course}</h3>
                <p className="font13" style={{ padding: "10px 0" }}>
                    {playAd.golfClub}, {playAd.location}
                </p>
                <p className="font13" style={{ padding: "10px 0" }}>
                </p>
                <StyledList>
                    <li>
                        <Avatar
                            style={{width: '40px', height: '40px', backgroundColor: '#f59e0b'}}
                        >{playAd.creatorUsername.charAt(0)} </Avatar>
                    </li>
                    {playAd.bookedPlayers.map((player) =>
                        <li key={player.id} >

                            {player.username === 'empty' ? (
                                    <Avatar
                                        style={{width: '40px', height: '40px'}}
                                    > + </Avatar>
                                ) :
                                (
                                    <Avatar
                                        style={{width: '40px', height: '40px', backgroundColor: '#064e3b'}}
                                    >{player.username.charAt(0)} </Avatar>
                                )
                            }
                        </li>
                    )}
                   {/* <p className="tag coralBg radius6 font13 extraBold">Handicap: {userInfo.handicap}</p>*/}
                </StyledList>
                <div
                    style={{marginLeft: '20px', marginBottom: '30px', marginTop: '20px'}}
                >
                <DeleteBookingButton
                playadId={playAd.playAdId}
                handleDelete={handleDelete}
                />
                </div>
            </LowerContainer2>
        </Wrapper2>
    )
}


const LowerContainer2 = styled.div`
  height: 300px;
  background: white;
  text-align: center;
  padding: 20px 30px;
  margin: 10px;
`;


const Wrapper2 = styled.div`
  //width: 100%;
  width: 300px;
  height: 300px;
  text-align: left;
  margin: 35px;
  :hover {
    opacity: 0.7;
  }

`;


const ImageContainer2 = styled.div`
  background: white;
  width: 290px;
  height: 75px;
  border-radius: 50%;
  object-fit: cover;
`;


const StyledList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;


