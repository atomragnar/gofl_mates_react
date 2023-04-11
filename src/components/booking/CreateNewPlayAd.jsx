import React, {useRef, useState} from 'react';
import {Add as AddIcon} from '@mui/icons-material';
import {useNavigate} from 'react-router-dom'
import styled from "styled-components";
import {SelectComponent} from "../NonFilteredSelect";
import {FilteredSelectComponent} from "../FilteredSelectComponent";
import {getAuthToken, getUserId} from "../../util/Auth";
import {ProfileContainer} from "../containers/ProfileContainer";
import classes from './playadfrom.module.css'
import {Checkbox, FormControlLabel} from "@mui/material";

export default function CreateNewPlayAdForm() {

    const [teeTime, setTeeTime] = useState(null);
    const [locationId, setLocationId] = useState("");
    const [golfClubId, setGolfClubId] = useState("");
    const [courseId, setCourseId] = useState("");
    const [isChecked, setIsChecked] = useState(false);

    const token = getAuthToken();
    const userId = getUserId();

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        console.log(teeTime)

        try {
            const response = await fetch("http://localhost:8085/api/playad/", {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    userId: parseInt(userId),
                    courseId: courseId,
                    golfClubId: golfClubId,
                    locationId: locationId,
                    teeTime: teeTime.toISOString(),
                    hasCar: isChecked
                }),
            });
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error(error);
        }
        navigate("/bookings")
    };

    const handleTeeTimeChange = (event) => {
        const value = event.target.value;
        const date = new Date(value);
        setTeeTime(date);
    };

    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
    };


    return (
        <>
            <ProfileContainer>
            <StyledForm onSubmit={handleSubmit} method="post" className={classes.form}>
                <h1 className="font30 extraBold"
                    style={{ margin: "15px 0", marginBottom: "30px" }}
                >
                    Skapa ny speltid!
                    </h1>
                    <label className="font15">Tid:</label>
                    <input
                        type="datetime-local"
                        name="teeTime"
                        id="teeTime"
                        value={teeTime ? teeTime.toISOString().substring(0, 16) : ''}
                        onChange={handleTeeTimeChange}
                        required
                    />
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
                        filterKey='locationId'
                        filterValue={locationId}
                        required
                    />

                    <FilteredSelectComponent
                        endpoint="http://localhost:8085/api/course/select/list"
                        label="Course"
                        onChange={setCourseId}
                        filterKey='golfClubId'
                        filterValue={golfClubId}
                        required
                    />
                    <label>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={isChecked}
                                    onChange={handleCheckboxChange}
                                    name="hasCar"
                                    color="primary"
                                />
                            }
                            label="Har du bil?"
                        />
                </label>
                <div className={classes.actions}>
                <button type="submit">

                    Skapa bokning

                </button>
                </div>
            </StyledForm>
            </ProfileContainer>
        </>
    );
}

const StyledForm = styled.form`
  padding: 70px 0 30px 0;

  input,
  textarea {
    width: 100%;
    background-color: transparent;
    border: 0px;
    outline: none;
    box-shadow: none;
    border-bottom: 1px solid #707070;
    height: 30px;
    margin-bottom: 30px;
  }

  textarea {
    min-height: 100px;
  }

  @media (max-width: 860px) {
    padding: 30px 0;
  }
`;
