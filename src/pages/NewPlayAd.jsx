import PlayAdForm from "../components/booking/PlayAdForm";
import {FilteredSelectComponent} from "../components/FilteredSelectComponent";
import {SelectComponent} from "../components/NonFilteredSelect";
import {getAuthToken, getUserId} from "../util/Auth";
import {useState} from "react";

export const NewPlayAd = () => {
    const [locationId, setLocationId] = useState("");
    const [golfClubId, setGolfClubId] = useState("");
    const [courseId, setCourseId] = useState("");

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
        <form onSubmit={handleSubmit}>
            <SelectComponent
                endpoint="http://localhost:8085/api/location/select/list"
                label="Location"
                onChange={setLocationId}
            />
            <FilteredSelectComponent
                endpoint="http://localhost:8085/api/golfclub/select/list"
                label="GolfClub"
                onChange={setGolfClubId}
            />
            <FilteredSelectComponent
                endpoint="http://localhost:8085/api/course/select/list"
                label="GolfCourse"
                onChange={setCourseId}
            />
            <button type="submit">Submit</button>
        </form>
    )
};
