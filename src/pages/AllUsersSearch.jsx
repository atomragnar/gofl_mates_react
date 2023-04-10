import {getAuthToken} from "../util/Auth";
import {useEffect, useState} from "react";
import styled from 'styled-components';
import {Box, Input, List, ListItem, Typography, Pagination, Card, CardContent, CardActions, Button} from "@mui/material";
import {OtherUsersProfileCard} from "../components/OtherUsersProfileCard";

export const AllUsersSearch = () => {

    const token = getAuthToken()

    const [users, setUsers] = useState([])

    useEffect(() => {
        async function fetchObjects() {
            const response = await fetch(`http://localhost:8085/users/list`, {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            });
            const data = await response.json();
            setUsers(data);
        }
        fetchObjects();
    }, []);


    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);

    function filterUser() {
        if (!searchQuery) {
            return users;
        }
        return users.filter((user) =>
            (user.username.toLowerCase().includes(searchQuery.toLowerCase()))
        );
    }

    const usersPerPage = 10;
    const totalPages = Math.ceil(filterUser().length / usersPerPage);

    function filteredUsers() {
        if (!searchQuery) {
            return users.slice(
                (currentPage - 1) * usersPerPage,
                currentPage * usersPerPage
            );
        }
        const filteredUsers = users.filter((user) =>
            (user.username.toLowerCase().includes(searchQuery.toLowerCase())));
        return filteredUsers.length > 0 ? filteredUsers.slice(
            (currentPage - 1) * usersPerPage,
            currentPage * usersPerPage
        ) : [];
    }

    function handleSearchQueryChange(event) {
        setSearchQuery(event.target.value);
        setCurrentPage(1);
    }

    function handlePageChange(event, value) {
        setCurrentPage(value);
    }


    return (
        <Box display="flex" flexDirection="column" alignItems="center" m={4}>
            <Box mb={4}>
                <Input
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={handleSearchQueryChange}
                />
            </Box>
            <List>
                {filteredUsers()
                    .slice((currentPage - 1) * usersPerPage, currentPage * usersPerPage)
                    .map((user) => (
                        <ListItem key={user.id}>
                            <OtherUsersProfileCard
                            user={user}
                            />
                            {/*<CardWrapper>
                            <CardContentWrapper>
                            <Typography variant="h5" component="h2">
                            {user.username}
                            </Typography>
                            <Typography color="textSecondary">
                            {user.location} - {user.golfClub} - {user.handicap}
                            </Typography>
                            </CardContentWrapper>
                            <CardActionsWrapper>
                            <Button size="small">Button</Button>
                            </CardActionsWrapper>
                            </CardWrapper>*/}
                        </ListItem>
                    ))}
            </List>
            <Box mt={4}>
                <Pagination
                    count={totalPages}
                    page={currentPage}
                    onChange={handlePageChange}
                    color="secondary"
                />
            </Box>
        </Box>
    );
};


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
