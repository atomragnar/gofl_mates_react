import React from "react";
import styled from "styled-components";
import {getAuthToken} from "../../util/Auth";

export const BookingRequestCard = ({request}) => {

    function handleRequestRespone() {

        const confirm = window.confirm(`Vill du acceptera ${request.requester} i bollen?`)

        let path = `http://localhost:8085/api/playadrequest/accepted/${request.playAdRequestId}`;

        if (confirm) {
            path = `http://localhost:8085/api/playadrequest/accepted/${request.playAdRequestId}`;
        } else {
            path = `http://localhost:8085/api/playadrequest/denied/${request.playAdRequestId}`;
        }

        const token = getAuthToken()

        const options = {
            method: 'PUT',
            headers: {
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify({/* ... */})
        };

        fetch(path, options)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                console.log('Item updated:', data);
            })
            .catch(error => {
                console.error('Error updating item:', error);
            });

    }


    return (
        <WrapperBtn className="animate pointer" onClick={() => handleRequestRespone()}>
            <Wrapper className="whiteBg radius8 shadow">
                <h3 className="font20 extraBold">#{request.playAdId}</h3>
                <p className="font13" style={{ padding: "30px 0" }}>
                    {request.requester} ({request.requesterHandicap}) vill delta i din boll {request.playAdTime}
                    på {request.playAdCourse}.
                </p>
                <p className="font13 extraBold">{request.status}</p>
                <div className="flex">
                    <p className="tag coralBg radius6 font13 extraBold">{request.requestCreatedTime}</p>
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
