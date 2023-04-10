import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from './pages/Error';
import {HomePage} from './pages/Home';
import RootLayout from './pages/Root';
import AuthenticationPage, {
  action as authAction,
} from './pages/Authentication';
import { action as logoutAction } from './pages/Logout';
import { tokenLoader } from './util/Auth';


import {SearchBookingsPage, loader as allPlayAdsLoader} from "./pages/SearchBookingsPage";
import {NewPlayAd} from "./pages/NewPlayAd";
import {ProfileRootLayout} from "./pages/ProfileRoot";
import {BookingsRootLayout} from "./pages/BookingsRoot";
import {AllUsersSearch} from "./pages/AllUsersSearch";
import UsersRequestsToList from './components/user/UsersRequestsToList';
import BookingRequestsByUser from './components/user/BookingRequestsByUser';
import UsersCreatedPlayAds from './components/user/UsersCreatedPlayAds';
import UsersBookingsList from './components/user/UsersBookingsList';
import {OtherUsersRoot} from "./pages/OtherUsersRoot";
import TestPage from "./pages/TestPage";
import {RemadeProfileCard} from "./components/user/RemadeProfileCard";
import CreateNewPlayAdForm from "./components/booking/CreateNewPlayAd";

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    id: 'root',
    loader: tokenLoader,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'profile',
        element: <ProfileRootLayout/>,
        children: [
          {
            index: true,
            element: <RemadeProfileCard/>,
          },
          {
            path: 'bookings',
            id: 'user-bookings',
            children: [
              {
                index: true,
                element: <UsersBookingsList/>
              },
              {
                path: 'my-bookings',
                element: <UsersCreatedPlayAds/>
              },
              {
                path: 'requests',
                element: <UsersRequestsToList/>,
              },
              {
                path: 'my-requests',
                element: <BookingRequestsByUser/>,
              },
              {
                path: 'edit',
              },
            ],
          },
        ],
      },
      {
        path: 'bookings',
        element: <BookingsRootLayout />,
        children: [
          {
            index: true,
            element: <SearchBookingsPage/>,
            loader: allPlayAdsLoader,
          },
          {
            path: 'new',
            element: <CreateNewPlayAdForm/>,
          },
        ],
      },
      {
        path: 'users',
        element: <OtherUsersRoot/>,
        children: [
          {
            index: true,
            element: <AllUsersSearch/>
          },
          {
            path: 'test',
            element: <TestPage/>,
          },
        ],
      },
      {
        path: 'auth',
        element: <AuthenticationPage />,
        action: authAction,
      },
      {
        path: 'logout',
        action: logoutAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
