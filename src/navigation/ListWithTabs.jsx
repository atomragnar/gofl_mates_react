import React, { useState } from 'react';
import { AppBar, Tabs, Tab, Select, MenuItem, List, ListItem, ListItemText } from '@mui/material';

function TabsListComponent({ data }) {
    const [selectedTab, setSelectedTab] = useState(0);
    const [selectedFilter, setSelectedFilter] = useState('');

    const handleChangeTab = (event, newValue) => {
        setSelectedTab(newValue);
    };

    const handleChangeFilter = (event) => {
        setSelectedFilter(event.target.value);
    };

    const filteredData = selectedFilter
        ? data.filter((item) => item.filter === selectedFilter)
        : data;

    return (
        <div>
            <Select value={selectedFilter} onChange={handleChangeFilter} displayEmpty>
                <MenuItem value="">All</MenuItem>
                <MenuItem value="filter1">Filter 1</MenuItem>
                <MenuItem value="filter2">Filter 2</MenuItem>
                <MenuItem value="filter3">Filter 3</MenuItem>
            </Select>
            <AppBar position="static">
                <Tabs value={selectedTab} onChange={handleChangeTab} variant="fullWidth">
                    <Tab label="Tab 1" />
                    <Tab label="Tab 2" />
                    <Tab label="Tab 3" />
                </Tabs>
            </AppBar>
            <List>
                {filteredData
                    .filter((item) => item.tab === selectedTab + 1)
                    .map((item) => (
                        <ListItem key={item.id}>
                            <ListItemText primary={item.title} secondary={item.subtitle} />
                        </ListItem>
                    ))}
            </List>
        </div>
    );
}

export default TabsListComponent;
