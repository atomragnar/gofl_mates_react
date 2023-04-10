import {getAuthToken} from "../../util/Auth";
import React from "react";
import styled from "styled-components";

function UnBookingAction(playAdId, userId) {

    const token = getAuthToken();

    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
            playAdId: playAdId,
            userId: parseInt(userId)
        })
    };

    fetch(`http://localhost:8085/api/playad/remove`, options)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log('booking was ok!', data);
        })
        .catch(error => {
            console.error('Fel vid bokning', error);
        });
}

export const UnBookSlotButton = ({playAdId, userId}) => {
    return (
        <StyledBtn onClick={() => UnBookingAction(playAdId, userId)}>Avboka</StyledBtn>
    );
}

const StyledBtn = styled.button`
  border: 0px;
  width: 150px;
  height: 30px;
  outline: none;
  background-color: #ef4444;
  :hover {
    opacity: 0.5;
  }
`;
