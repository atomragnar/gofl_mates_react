import {useState} from "react";
import {PlayAdsCard} from "./PlayAdsCard";
import {Box, Input, List, ListItem, Pagination} from "@mui/material";

export const PlayAdsList = ({playAds}) => {

    console.log(playAds)

    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);

    function filterPlayAds() {
        if (!searchQuery) {
            return playAds;
        }
        return playAds.filter((playAd) =>
            (playAd.golfClub.toLowerCase().includes(searchQuery.toLowerCase()) ||
                playAd.course.toLowerCase().includes(searchQuery.toLowerCase()))
        );
    }

    const playAdsPerPage = 10;
    const totalPages = Math.ceil(filterPlayAds().length / playAdsPerPage);

    function filteredPlayAds() {
        if (!searchQuery) {
            return playAds.slice(
                (currentPage - 1) * playAdsPerPage,
                currentPage * playAdsPerPage
            );
        }
        const filteredPlayAds = playAds.filter((playAd) =>
            (playAd.golfClub.toLowerCase().includes(searchQuery.toLowerCase()) ||
                playAd.course.toLowerCase().includes(searchQuery.toLowerCase()))
        );
        return filteredPlayAds.slice(
            (currentPage - 1) * playAdsPerPage,
            currentPage * playAdsPerPage
        );
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
                {filteredPlayAds().map((playAd) => (
                    <ListItem key={playAd.playAdId}>
                        <PlayAdsCard booking={playAd}/>
                    </ListItem>
                ))}
            </List>
            <Pagination
                count={totalPages}
                page={currentPage}
                onChange={handlePageChange}
                color="secondary"
            />
        </Box>
    );
}
