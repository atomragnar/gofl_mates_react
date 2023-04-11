import React, {useState} from 'react';
import {getAuthToken} from "../../util/Auth";
import styled from "styled-components";
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";
import {Avatar, Tooltip} from "@mui/material";
import {Add} from "@mui/icons-material";
import { Check, Clear } from '@mui/icons-material';

function RequestButton({playAdId, userId}) {

    const [open, setOpen] = useState(false);


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
            })
            .finally(() => {
                setOpen(false);
            });

    }


    return (
        <>
            <Tooltip title='Skicka förfrågan'>
                <StyledButton onClick={() => setOpen(true)}>
                    <Avatar
                        sx={{ bgcolor: '#7620ff', width: 40, height: 40 }}
                    >
                        <Add />
                    </Avatar>
                </StyledButton>
            </Tooltip>
            <Dialog open={open} onClose={() => setOpen(false)}>
                <DialogTitle>Är du säker?</DialogTitle>
                <DialogContent>
                    <DialogContentText>Vill du skicka en skicka en förfrågan?</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <XButton onClick={() => setOpen(false)}>
                        <Clear style={{ marginRight: '5px' }} />
                        Avbryt
                    </XButton>
                    <CheckButton onClick={() => RequestToJoinButtonAction({playAdId, userId})} >
                        <Check style={{ marginRight: '5px' }} />
                        Skicka
                    </CheckButton>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default RequestButton;


const StyledButton = styled.button`
  font: inherit;
  cursor: pointer;
  padding: 0;
  background-color: transparent;
  border: none;

  :hover {
    opacity: 0.5;
  }
`


const CheckButton = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  
  &:hover {
    background-color: #388e3c;
  }
`;

const XButton = styled.button`
  background-color: #f44336;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  `;
