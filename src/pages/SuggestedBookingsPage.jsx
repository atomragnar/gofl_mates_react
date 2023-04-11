import {Await, defer, json, useLoaderData} from "react-router-dom";
import {Suspense} from "react";
import {getAuthToken, getUserId} from "../util/Auth";
import {PlayAdsList} from "../components/booking/PlayAdsList";

export const SuggestedBookingsPage = () => {
    const { playAds } = useLoaderData();

    console.log(playAds)

    return (
        <Suspense fallback={<p style={{textAlign: 'center'}}>Loading...</p>}>
            <Await resolve={playAds}>
                {(loadedPlayAds) => <PlayAdsList playAds={loadedPlayAds}/>}
            </Await>
        </Suspense>
    );
}


async function loadAllSuggestedBookings() {

    const token = getAuthToken()
    const userId = getUserId();

    const response = await fetch(`http://localhost:8085/api/playad/suggestions/handicap/${userId}`, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + token
        }
    });

    if (!response.ok) {
        throw json(
            { message: 'Could not fetch bookings.' },
            {
                status: 500,
            }
        );
    } else {
        const data = await response.json();
        console.log(data)
        return data;
    }
}

export function loader() {
    return defer({
        playAds: loadAllSuggestedBookings(),
    });
}


