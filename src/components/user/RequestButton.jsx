import React from 'react';
import {getAuthToken} from "../../util/Auth";

function RequestButtonAction(path) {

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

function RequestButton({ path, buttonText }) {
    return (
        <button onClick={() => RequestButtonAction(path)}>{buttonText}</button>
    );
}

export default RequestButton;
