import React, {useState} from "react";
import styled from "styled-components";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";

export const DeleteBookingButton = ({playAd, handleDelete }) => {

    console.log(handleDelete)
    console.log(playAd.playAdId)


    const [isLoading, setIsLoading] = useState(false);
    const [open, setOpen] = useState(false);


    async function handleConfirm() {

        console.log(playAd.playAdId)

        setIsLoading(true);

       // const proceed = window.confirm('Är säker du på att du vill tabort annonsen?');

        //if (proceed) {

            try {
                handleDelete(playAd.playAdId);
                console.log(playAd.playAdId)
            } catch (error) {
                console.log(error);
            }

        //}

        setIsLoading(false);
    }

    return (
        <>
        <StyledBtn onClick={() => setOpen(true)}>
            {isLoading ? 'Laddar...' : 'Ta bort speltid'}
        </StyledBtn>

            <Dialog open={open} onClose={() => setOpen(false)}>
                <DialogTitle>Är du säker?</DialogTitle>
                <DialogContent>
                    <DialogContentText>Är du säker på att du vill ta bort denna speltid?</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpen(false)}>Avbryt</Button>
                    <Button onClick={handleConfirm} variant="contained" color="secondary" autoFocus>
                        Ta bort
                    </Button>
                </DialogActions>
            </Dialog>


        </>
    );
}

const StyledBtn = styled.button`
  border: 0px;
  width: 100px;
  height: 30px;
  outline: none;
  background-color: #ef4444;
  :hover {
    opacity: 0.5;
  }
`;

