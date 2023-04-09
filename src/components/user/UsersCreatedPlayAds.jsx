import { useState, useEffect } from "react";
import {getAuthToken, getUserId} from "../../util/auth";
import {BookingsCard} from "../booking/BookingsCard";

function UsersCreatedPlayAds() {
    const [bookings, setBookings] = useState([]);

    const userId = getUserId();
    const token = getAuthToken();

    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const response = await fetch(`http://localhost:8085/api/playad/created/${userId}`, {
                    method: 'GET',
                    headers: {
                        'Authorization': 'Bearer ' + token
                    }
                });
                const data = await response.json();
                setBookings(data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchBookings();
    }, []);

    return (
        <div>
            <ul>
                {bookings.map((booking) => (
                    <li key={booking.playAdId}>
                        <BookingsCard booking={booking} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default UsersCreatedPlayAds;


