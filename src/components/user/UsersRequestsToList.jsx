import { useState, useEffect } from "react";
import {getAuthToken, getUserId} from "../../util/Auth";
import RequestButton from "./RequestButton";
import ListComponent from "./CardsList";

export default function UsersRequestsToList() {
    const [playAdRequests, setPlayAdRequests] = useState([]);

    const userId = getUserId();
    const token = getAuthToken();

    useEffect(() => {
        const fetchRequests = async () => {
            try {
                const response = await fetch(`http://localhost:8085/api/playadrequest/pending/to/${userId}`, {
                    method: 'GET',
                    headers: {
                        'Authorization': 'Bearer ' + token
                    }
                });
                const data = await response.json();
                setPlayAdRequests(data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchRequests();
    }, []);

    return <ListComponent playAdRequests={playAdRequests} /> /* (
        <div>
            <ul>
                {playAdRequests.map((request) => (
                    <li key={request.playAdRequestId}>
                        {request.requester} - {request.requesterHandicap} -
                        <RequestButton
                        path={`http://localhost:8085/api/playadrequest/accepted/${request.playAdRequestId}`}
                        buttonText="accept"
                        />
                        <RequestButton
                            path={`http://localhost:8085/api/playadrequest/denied/${request.playAdRequestId}`}
                            buttonText="deny"
                        />
                    </li>
                ))}
            </ul>
        </div>
    ); */
}
