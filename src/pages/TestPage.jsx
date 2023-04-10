import React from 'react';
import TabsListComponent from '../navigation/ListWithTabs';

const data = [
    { id: 1, tab: 1, filter: 'filter1', title: 'Item 1', subtitle: 'Subtitle 1' },
    { id: 2, tab: 2, filter: 'filter2', title: 'Item 2', subtitle: 'Subtitle 2' },
    { id: 3, tab: 1, filter: 'filter3', title: 'Item 3', subtitle: 'Subtitle 3' },
    { id: 4, tab: 3, filter: 'filter1', title: 'Item 4', subtitle: 'Subtitle 4' },
    { id: 5, tab: 2, filter: 'filter2', title: 'Item 5', subtitle: 'Subtitle 5' },
];

function TestListWithTabs() {
    return (
        <div>
            <TabsListComponent data={data} />
        </div>
    );
}

export default TestListWithTabs;
