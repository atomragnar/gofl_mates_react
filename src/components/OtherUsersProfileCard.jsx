import styled from "styled-components";
import React from "react";
import {Avatar} from '@mui/material'

export const OtherUsersProfileCard = ({user}) => {
    return (
        <WrapperBtn className="animate pointer" onClick={() => alert('TODO FIXA MODAL')}>
            <Wrapper className="whiteBg radius8 shadow">
                <div
                    style={{marginLeft: '60px', marginBottom: '10px'}}
                >
                <Avatar>{user.username.charAt(0)} </Avatar>
                </div>
                <h3 className="font20 extraBold">{user.username}</h3>
                <p className="font13" style={{ padding: "10px 0" }}>
                    {user.golfClub}
                </p>
                <p className="font13" style={{ padding: "10px 0" }}>
                    {user.location}
                </p>
                <div className="flex">
                    <p className="tag coralBg radius6 font13 extraBold">Handicap: {user.handicap}</p>
                </div>
            </Wrapper>
        </WrapperBtn>
    )
}


const Wrapper = styled.div`
  width: 100%;
  text-align: left;
  padding: 20px 30px;
  margin-top: 30px;
`;
const WrapperBtn = styled.button`
  border: 0px;
  outline: none;
  background-color: transparent;
  :hover {
    opacity: 0.5;
  }
`;

