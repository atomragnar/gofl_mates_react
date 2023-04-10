import { useState, useEffect } from "react";
import {getAuthToken, getUserId} from "../../util/Auth";
import {PlayAdsCard} from "../booking/PlayAdsCard";
import {PlayAdCardUserBookedAd} from "../booking/PlayAdCardUserBookedAd";

function UsersBookingsList() {
    const [playAds, setPlayAds] = useState([]);

    const userId = getUserId();
    const token = getAuthToken();

    useEffect(() => {
        const fetchPlayAds = async () => {
            try {
                const response = await fetch(`http://localhost:8085/api/playad/booked/${userId}`, {
                    method: 'GET',
                    headers: {
                        'Authorization': 'Bearer ' + token
                    }
                });
                const data = await response.json();
                setPlayAds(data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchPlayAds();
    }, [token, userId]);

    return (
        <div>
            <ul>
                {playAds.map((playAd) => (
                    <li key={playAd.playAdId}>
                    <PlayAdCardUserBookedAd
                    playAd={playAd}
                    />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default UsersBookingsList;


