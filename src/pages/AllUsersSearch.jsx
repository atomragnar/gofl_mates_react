import {getAuthToken} from "../util/Auth";
import {useEffect, useState} from "react";
import styled from 'styled-components';
import {
    Box,
    Input,
    List,
    ListItem,
    Typography,
    Pagination,
    Card,
    CardContent,
    CardActions,
    Button,
    Divider, Grid
} from "@mui/material";
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
    }, [token]);


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
        <>
        <Grid xs={12} spacing={{ xs: 1, md: 2 }}>
            <Box mb={4}>
                <Input
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={handleSearchQueryChange}
                />
            </Box>
        </Grid>
            <Divider/>
            <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}
                  justifyContent="center"
                  alignItems="center">
                {filteredUsers()
                    .slice((currentPage - 1) * usersPerPage, currentPage * usersPerPage)
                    .map((user) => (
                        <Grid >
                            <OtherUsersProfileCard
                            user={user}
                            key={user.id}
                            />
                        </Grid>
                    ))}
            </Grid>
    <Grid item xs={12}>
            <Box mt={4}>
                <Pagination
                    count={totalPages}
                    page={currentPage}
                    onChange={handlePageChange}
                    color="secondary"
                />
            </Box>
    </Grid>
</>
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
