import {useState} from 'react';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle, InputLabel, MenuItem, Select,
} from '@mui/material';
import {SelectComponent} from './NonFilteredSelect';
import {FilteredSelectComponent} from './FilteredSelectComponent';
import {getAuthToken, getUserId} from "../util/Auth";
import styled from "styled-components";
import { Check, Clear } from '@mui/icons-material';

export default function PopupForm(props) {
    const {open, onClose} = props;
    const [locationId, setLocationId] = useState(null);
    const [golfClubId, setGolfClubId] = useState(null);
    const [handicap, setHandicap] = useState(0);

    const numbers = [];
    for (let i = 0; i <= 36; i++) {
        numbers.push(i);
    }

    function handleSubmit() {

        const token = getAuthToken()
        const userId = getUserId()

        const path = `http://localhost:8085/users/update`;

        const options = {
            method: 'PUT',
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                userId: parseInt(userId),
                locationId: locationId,
                golfClubId: golfClubId,
                handicap: handicap
            })
        };

        const data = {
            userId: parseInt(userId),
            locationId: locationId,
            golfClubId: golfClubId,
            handicap: handicap
        }

        fetch(path, options)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                } else {
                    props.onSubmit(data)
                }
            })
            .then(data => {
                console.log('Item updated:');
            })
            .catch(error => {
                console.error('Error updating item:');
            });


        onClose();
    }

    function handleHandicapChange(event) {
        const value = parseInt(event.target.value);
        setHandicap(value);
    }



    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Ställ in plats och golfklubb</DialogTitle>
            <DialogContent>
                <SelectComponent
                    endpoint="http://localhost:8085/api/location/select/list"
                    label="Location"
                    onChange={setLocationId}
                    required
                />
                <FilteredSelectComponent
                    endpoint="http://localhost:8085/api/golfclub/select/list"
                    label="Golfclub"
                    onChange={setGolfClubId}
                    filterKey="locationId"
                    filterValue={locationId}
                    required
                />
                <InputLabel
                    style={{
                    display: 'block',
                    font: 'inherit'}}
                    className="font15">
                    Select handicap:
                    <Select
                        onChange={handleHandicapChange}
                        required
                        style={{width: '100%',
                            display: 'block',
                            font: 'inherit'}}
                    >
                        {numbers.map((number) => (
                            <MenuItem key={number} value={number}>
                                {number}
                            </MenuItem>
                        ))}
                    </Select>
                </InputLabel>
            </DialogContent>
            <DialogActions>
                <XButton onClick={onClose}>Cancel</XButton>
                <CheckButton onClick={handleSubmit}>Submit</CheckButton>
            </DialogActions>
        </Dialog>
    );
}

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
  
  &:hover {
    background-color: #d32f2f;
  }
`;
