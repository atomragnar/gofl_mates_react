import React from 'react';
import {getAuthToken} from "../../util/auth";

function RequestToJoinButtonAction({playAdId, userId}) {

    const token = getAuthToken();

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
            playAdId: playAdId,
            userId: parseInt(userId)
        })
    };

    fetch(`http://localhost:8085/api/playadrequest`, options)
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

function RequestButton(playAdId, userId) {
    return (
        <button onClick={() => RequestToJoinButtonAction(playAdId, userId)}>Boka</button>
    );
}

export default RequestButton;
