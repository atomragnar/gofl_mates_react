import React, {useState} from "react";
import styled from "styled-components";
import {getAuthToken} from "../../util/Auth";
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";

export const BookingRequestCard = ({request, updateRequests}) => {

    const [open, setOpen] = useState(false);

    async function handleRequestAcceptResponse() {

        const path = `http://localhost:8085/api/playadrequest/accepted/${request.playAdRequestId}`;
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
            })
            .then(data => {
                console.log('Item updated:');
                updateRequests(request.playAdRequestId);
            })
            .catch(error => {
                console.error('Error updating item:');
            });

    }

    async function handleRequestDenyResponse() {

        const path = `http://localhost:8085/api/playadrequest/denied/${request.playAdRequestId}`;
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
            })
            .then(data => {
                console.log('Item updated:');
                updateRequests(request.playAdRequestId);
            })
            .catch(error => {
                console.error('Error updating item:');
            });

    }


    return (
        <>
        <WrapperBtn className="animate pointer" onClick={() => setOpen(true)}>
            <Wrapper className="whiteBg radius8 shadow">
                <h3 className="font20 extraBold">#{request.playAdId}</h3>
                <p className="font13" style={{ padding: "30px 0" }}>
                    {request.requester} ({request.requesterHandicap}) vill delta i din boll {request.playAdTime} på {request.playAdCourse}.
                </p>
                <p className="font13 extraBold">{request.status}</p>
                <div className="flex">
                    <p className="tag coralBg radius6 font13 extraBold">{request.requestCreatedTime}</p>
                </div>
            </Wrapper>
        </WrapperBtn>
            <Dialog open={open} onClose={() => setOpen(false)}>
                <DialogTitle>Är du säker?</DialogTitle>
                <DialogContent>
                    <DialogContentText>`Vill du acceptera {request.requester} i bollen?`</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleRequestAcceptResponse} variant="contained" color="secondary" autoFocus
                            style={{width: '200px',
                                height: '50px'}}>
                        Acceptera {request.requester}
                    </Button>
                    <Button onClick={handleRequestDenyResponse} variant="contained" color="secondary" autoFocus
                            style={{width: '200px',
                                height: '50px'}}>
                    >
                        Acceptera inte {request.requester}
                    </Button>
                    <Button onClick={() => setOpen(false)}>Avbryt</Button>
                </DialogActions>
            </Dialog>
        </>
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
