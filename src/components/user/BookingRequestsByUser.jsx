import { useState, useEffect } from "react";
import {getAuthToken, getUserId} from "../../util/auth";
import {BookingsCard} from "../booking/BookingsCard";
import RequestButton from "./RequestButton";

export default function BookingRequestsByUser() {
    const [playAdRequests, setplayAdRequests] = useState([]);

    const userId = getUserId();
    const token = getAuthToken();

    useEffect(() => {
        const fetchRequests = async () => {
            try {
                const response = await fetch(`http://localhost:8085/api/playadrequest/by/${userId}`, {
                    method: 'GET',
                    headers: {
                        'Authorization': 'Bearer ' + token
                    }
                });
                const data = await response.json();
                setplayAdRequests(data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchRequests();
    }, []);

    return (
        <div>
            <ul>
                {playAdRequests.map((request) => (
                    <li key={request.playAdRequestId}>
                        {request.requester} - {request.requesterHandicap} - {request.status} - {request.requestCreatedTime}
                    </li>
                ))}
            </ul>
        </div>
    );
}
