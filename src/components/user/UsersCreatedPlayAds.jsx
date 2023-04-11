import React, { useState, useEffect } from "react";
import {getAuthToken, getUserId} from "../../util/Auth";
import {PlayAdsCard} from "../booking/PlayAdsCard";
import {PlayAdsCardUserCreatedAd} from "../booking/PlayAdsCardUserCreatedAd";

function UsersCreatedPlayAds() {
    const [playAds, setPlayAds] = useState([]);

    const userId = getUserId();
    const token = getAuthToken();

    useEffect(() => {
        const fetchPlayAds = async () => {
            try {
                const response = await fetch(`http://localhost:8085/api/playad/created/${userId}`, {
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

    async function handleDelete(deletedId){

        console.log(deletedId)

        try {
            const response = await fetch(`http://localhost:8085/api/playad/${deletedId}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            });

            if (response.ok) {
                const updatedPlayAds = playAds.filter(ad => ad.playAdId !== deletedId);
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
                        <PlayAdsCardUserCreatedAd
                        playAd={playAd}
                        handleDelete={handleDelete}
                        />
                    </li>
                ))}
            </ul>
        </div>
            ) : (
                <h3 className="font20 extraBold">Hittade inga skapade speltider</h3>
            )}
        </>
    );
}

export default UsersCreatedPlayAds;


