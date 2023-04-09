import React from 'react';
import styled from 'styled-components';
import { Card, CardContent, CardActions, Button, Typography, List, ListItem, ListItemText } from '@mui/material';
import RequestButton from './RequestButton';
import {BookingRequestCard} from "./BookingRequestCard";

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

function ListComponent({ playAdRequests }) {
    return (
        <List>
            {playAdRequests.map((request) => (
                <ListItem key={request.playAdRequestId}>
                    <BookingRequestCard
                    request={request}
                    />
                    {/*<CardWrapper>
                        <CardContentWrapper>
                            <Typography variant="h5" component="h2">
                                {request.playAdRequestId}
                                </Typography>
                            <Typography color="textSecondary">
                                {request.requester} - {request.requesterHandicap}
                            </Typography>
                        </CardContentWrapper>
                        <CardActionsWrapper>
                        <RequestButton
                        path={`http://localhost:8085/api/playadrequest/accepted/${request.playAdRequestId}`}
                        buttonText="accept"
                        />
                        <RequestButton
                            path={`http://localhost:8085/api/playadrequest/denied/${request.playAdRequestId}`}
                            buttonText="deny"
                        />
                             <Button size="small">Button</Button>
                        </CardActionsWrapper>
                    </CardWrapper>*/}
                </ListItem>
            ))}
        </List>
    );
}

export default ListComponent;
