import React, {useState} from 'react';
import {getAuthToken} from "../../util/Auth";
import styled from "styled-components";
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";

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

function RequestButton({playAdId, userId}) {

    const [open, setOpen] = useState(false);

    return (
        <>
            <StyledButton onClick={() => setOpen(true)}>Boka</StyledButton>
            <Dialog open={open} onClose={() => setOpen(false)}>
                <DialogTitle>Är du säker?</DialogTitle>
                <DialogContent>
                    <DialogContentText>Vill du skicka en skicka en förfrågan?</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpen(false)}>Avbryt</Button>
                    <Button onClick={() => RequestToJoinButtonAction({playAdId, userId})} variant="contained" color="secondary" autoFocus>
                        Skicka förfrågan
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default RequestButton;


const StyledButton = styled.button`
  font: inherit;
  cursor: pointer;
  padding: 0.5rem 1.5rem;
  border-radius: 4px;
  background-color: #7620ff;
  color: #fff;
  border: none;

  :hover {
    opacity: 0.5;
  }
`
