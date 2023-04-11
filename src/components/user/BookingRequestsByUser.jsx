import React, { useState, useEffect } from "react";
import {getAuthToken, getUserId} from "../../util/Auth";
import styled from 'styled-components';
import { Card, CardContent, CardActions, Button, Typography, List, ListItem, ListItemText } from '@mui/material';
import {UsersOwnRequestsCard} from "./UsersOwnRequestsCard";

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
    }, [token, userId]);

    return (
<>
    {playAdRequests.length > 0 ? (
            <List>
                {playAdRequests.map((request) => (
                    <ListItem key={request.playAdRequestId}>
                        <UsersOwnRequestsCard
                        request={request}
                        />
                    </ListItem>
                ))}
            </List>
    ) : (
        <h3 className="font20 extraBold">Hittade inga bokningsförfrågningar</h3>
    )}
</>

    );
}


const CardWrapper = styled(Card)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1px;
`;

const CardContentWrapper = styled(CardContent)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const CardActionsWrapper = styled(CardActions)`
  align-self: flex-start;
  margin-left: 1px;
`;
