import {FilteredSelectComponent} from "../components/FilteredSelectComponent";
import {SelectComponent} from "../components/NonFilteredSelect";
import {getAuthToken, getUserId} from "../util/Auth";
import {useState} from "react";
import {Card, CardContent, Grid, FormControl, Button} from '@mui/material';
import { styled } from '@mui/material/styles';
import {purple} from "@mui/material/colors";
import WrapperCard from "../components/ui/WrapperCard";

export const NewPlayAd = () => {
    const [locationId, setLocationId] = useState("");
    const [golfClubId, setGolfClubId] = useState("");
    const [courseId, setCourseId] = useState("");
    const [selectedDate, setSelectedDate] = useState(new Date());

    const token = getAuthToken();
    const userId = getUserId();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch("http://localhost:8085/api/playad/", {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    userId: userId,
                    courseId: courseId,
                    golfClubId: golfClubId,
                    locationId: locationId
                }),
            });
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <WrapperCard>
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            alignSelf="center"
            style={{minHeight: '100vh', minWidth: '100vh', padding: '40px'}}
        >

        <form onSubmit={handleSubmit}>
            <Grid item xs={12}>
            <SelectComponent
                endpoint="http://localhost:8085/api/location/select/list"
                label="Location"
                onChange={setLocationId}
            />
            </Grid>
            <Grid item xs={12}>
            <FilteredSelectComponent
                endpoint="http://localhost:8085/api/golfclub/select/list"
                label="Golfclub"
                onChange={setGolfClubId}
            />
            </Grid>
            <Grid item xs={12}>
            <FilteredSelectComponent
                endpoint="http://localhost:8085/api/course/select/list"
                label="Course  "
                onChange={setCourseId}
            />
            </Grid>

            <ColorButton type="submit"
                         style={{minWidth: '30vh', margin: '10px'}}
            >Submit</ColorButton>
        </form>
        </Grid>
        </WrapperCard>
    )
};


const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
        backgroundColor: purple[700],
    },
}));

