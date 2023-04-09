import { useState, useEffect } from "react";
import {getAuthToken, getUserId} from "../../util/Auth";
import styled from 'styled-components';
import { Card, CardContent, CardActions, Button, Typography, List, ListItem, ListItemText } from '@mui/material';

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
  
            <List>
                {playAdRequests.map((request) => (
                    <ListItem key={request.playAdRequestId}>
                         <CardWrapper>
                        <CardContentWrapper>
                        <Typography variant="h5" component="h2">
                                Förfrågan på spelannons #{request.playAdId}
                            </Typography>
                            <Typography color="textSecondary">
                                Förfrågan skapades: {request.requestCreatedTime}
                            </Typography>
                            <Typography color="textSecondary">
                                Status på förfrågan: {request.status}
                            </Typography>
                        </CardContentWrapper>
                        </CardWrapper>
                    </ListItem>
                ))}
            </List>
    
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