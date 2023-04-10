import React, {useState} from "react";
import styled from "styled-components";
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";

export const UnBookSlotButton = ({playAd, handleRemoveBooking}) => {

    const [isLoading, setIsLoading] = useState(false);
    const [open, setOpen] = useState(false);

    async function handleConfirm() {
        setIsLoading(true);

        try {
            handleRemoveBooking(playAd.playAdId);
            console.log(playAd.playAdId)
        } catch (error) {
            console.log(error);
        }


        setIsLoading(false);

    }


    return (
        <>
            <StyledBtn onClick={() => setOpen(true)}>
                {isLoading ? 'Laddar...' : 'Avboka från speltid'}
            </StyledBtn>
            <Dialog open={open} onClose={() => setOpen(false)}>
                <DialogTitle>Är du säker?</DialogTitle>
                <DialogContent>
                    <DialogContentText>Är du säker på att du vill avboka din plats för denna speltid?</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpen(false)}>Avbryt</Button>
                    <Button onClick={handleConfirm} variant="contained" color="secondary" autoFocus>
                        Avboka platsen
                    </Button>
                </DialogActions>
            </Dialog>
        </>
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
