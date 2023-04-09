import {getAuthToken} from "../../util/auth";
import React from "react";

function DeleteBookingAction(playAdId) {

    const token = getAuthToken();

    const proceed = window.confirm('Are you sure?');

    if (proceed) {

        const header = {
            method: 'DELETE',
            headers: {
                'Authorization': 'Bearer ' + token
            }
        };

        fetch(`http://localhost:8085/api/playadrequest`, header)
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

}


export const DeleteBookingButton = (playAdId) => {

    return (
        <button onClick={() => DeleteBookingAction(playAdId)}>Tabort</button>
    );
}
