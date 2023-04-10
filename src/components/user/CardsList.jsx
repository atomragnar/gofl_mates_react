import React from 'react';
import { Card, CardContent, CardActions, Button, Typography, List, ListItem, ListItemText } from '@mui/material';
import RequestButton from './RequestButton';
import {BookingRequestCard} from "./BookingRequestCard";


function ListComponent({ playAdRequests, updateRequests }) {
    return (
        <List>
            {playAdRequests.map((request) => (
                <ListItem key={request.playAdRequestId}>
                    <BookingRequestCard
                    request={request}
                    updateRequests={updateRequests}
                    />
                </ListItem>
            ))}
        </List>
    );
}

export default ListComponent;
