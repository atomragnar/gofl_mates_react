import styled from "styled-components";
import React from "react";

export const UsersOwnRequestsCard = ({request}) => {
    return (
        <WrapperBtn className="animate pointer" onClick={() => alert('TODO FIXA MODAL')}>
            <Wrapper className="whiteBg radius8 shadow">
                <h3 className="font20 extraBold">#{request.playAdId} {request.playAdTime} {request.playAdCourse}</h3>
                <p className="font13" style={{ padding: "30px 0" }}>
                    Förfrågan skapades: {request.requestCreatedTime}
                </p>
                <p className="font13 extraBold">{request.playAdRequestId}</p>
                <div className="flex">
                    <p className="tag coralBg radius6 font13 extraBold">Status: {request.status}</p>
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
