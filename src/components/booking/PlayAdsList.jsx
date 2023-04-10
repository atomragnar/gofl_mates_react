import {useState} from "react";
import {Box, Input, List, ListItem, Pagination, Grid, Item, Divider, Card} from "@mui/material";
import {RemadePlayAdCard} from "./RemadePlayAdCard";

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
        <>
            <Grid xs={12} spacing={{ xs: 1, md: 2 }}>
            <Input
                placeholder="Search..."
                value={searchQuery}
                onChange={handleSearchQueryChange}
            />
            </Grid>
            <Divider/>
            <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}
                  justifyContent="center"
                  alignItems="center">
                {filteredPlayAds().map((playAd) => (
                    <Grid >
                        <RemadePlayAdCard playAd={playAd} key={playAd.playAdId}/>
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
