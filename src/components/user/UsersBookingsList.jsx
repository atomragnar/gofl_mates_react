import React, { useState, useEffect } from "react";
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


    async function handleRemoveBooking(removeId) {
        const userId = getUserId();

        console.log(removeId)

        try {
            const response = await fetch(`http://localhost:8085/api/playad/remove`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                    playAdId: removeId,
                    userId: parseInt(userId)
                })
            });

            if (response.ok) {
                const updatedPlayAds = playAds.filter(ad => ad.playAdId !== removeId);
                setPlayAds(updatedPlayAds);
            }
        } catch (error) {
            console.log(error);
        }
    };



    return (
        <>
            {playAds.length > 0 ? (
        <div>
            <ul>
                {playAds.map((playAd) => (
                    <li key={playAd.playAdId}>
                    <PlayAdCardUserBookedAd
                    playAd={playAd}
                    handleRemoveBooking={handleRemoveBooking}
                    />
                    </li>
                ))}
            </ul>
        </div>
            ) : (
            <h3 className="font20 extraBold">Hittade inga bokade speltider</h3>
            )}
        </>
    );
}

export default UsersBookingsList;


