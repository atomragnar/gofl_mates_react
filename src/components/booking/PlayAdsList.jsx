import {useState} from "react";
import {PlayAdsCard} from "./PlayAdsCard";
import {Box, Input, List, ListItem, Pagination, Grid, Item, Divider, Card} from "@mui/material";

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

    const playAdsPerPage = 9;
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
        <>
            <Grid xs={12} spacing={{ xs: 1, md: 2 }}>
            <Input
                placeholder="Search..."
                value={searchQuery}
                onChange={handleSearchQueryChange}
            />
            </Grid>
            <Divider/>
            <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {filteredPlayAds().map((playAd) => (
                    <Grid item xs={2} sm={4} md={4}>
                        <PlayAdsCard booking={playAd} key={playAd.playAdId}/>
                    </Grid>
                ))}
            </Grid>
            <Divider/>
            <Grid item xs={12}>
            <Pagination
                count={totalPages}
                page={currentPage}
                onChange={handlePageChange}
                color="secondary"
            />
            </Grid>
    </>
    );
}
