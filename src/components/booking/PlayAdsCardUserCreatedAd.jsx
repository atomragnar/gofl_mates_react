import myImage from "../../assets/img/large-open-air-course-with-golf-stick-and-ball-web-header.jpg";
import {Avatar} from "@mui/material";
import styled from "styled-components";
import React from "react";
import {DeleteBookingButton} from "./DeleteBookingButton";
import ToysIcon from '@mui/icons-material/Toys';
import { Tooltip } from '@mui/material'

export const PlayAdsCardUserCreatedAd = ({playAd, handleDelete}) => {

    console.log(handleDelete)

    return (
        <Wrapper2 className="whiteBg radius8 shadow">
                <ImageContainer2 >
                    <img src={myImage} alt='' height='75px' width='300px'
                         style={{borderRadius: '8px', opacity: '0.5'}}
                    />
                </ImageContainer2>
            <LowerContainer2>
                <Tooltip title={"Genomsnitts Handikapp " + playAd.averageHandicap.toFixed(1)}>
                    <h3 className="font20 extraBold">{playAd.hasCar && (
                        <div>
                            <ToysIcon/>
                        </div>
                    )} #{playAd.playAdId} - {playAd.course}</h3>
                </Tooltip>
                <p className="font13" style={{ padding: "10px 0" }}>
                    {playAd.teeTimeDate} - {playAd.teeTime}
                </p>
                <p className="font13" style={{ padding: "10px 0" }}>
                    {playAd.golfClub}, {playAd.location}
                </p>
                <p className="font13" style={{ padding: "10px 0" }}>
                </p>
                <StyledList>
                    <li>
                        <Tooltip title={playAd.creatorUsername + " " + playAd.creatorHandicap}>
                            <Avatar
                                style={{width: '40px', height: '40px', backgroundColor: '#064e3b'}}
                            >{playAd.creatorUsername.charAt(0)} </Avatar>
                        </Tooltip>
                    </li>
                    {playAd.bookedPlayers.map((player) =>
                        <li key={player.id} >

                            {player.username === 'empty' ? (
                                    <Tooltip title='ledig plats'>
                                        <Avatar
                                            style={{width: '40px', height: '40px'}}
                                        > + </Avatar>
                                    </Tooltip>
                                ) :
                                (
                                    <Tooltip title={player.username + " " + player.handicap}>
                                        <Avatar
                                            style={{width: '40px', height: '40px', backgroundColor: '#064e3b'}}
                                        >{player.username.charAt(0)} </Avatar>
                                    </Tooltip>
                                )
                            }
                        </li>
                    )}
                   {/* <p className="tag coralBg radius6 font13 extraBold">Handicap: {userInfo.handicap}</p>*/}
                </StyledList>
                <div
                    style={{marginLeft: '20px', marginBottom: '10px', marginTop: '10px'}}
                >
                <DeleteBookingButton
                playAd={playAd}
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


