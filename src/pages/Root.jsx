import {useEffect} from 'react';
import {Outlet, useLoaderData, useSubmit} from 'react-router-dom';

import {getTokenDuration} from '../util/Auth';
import TopNavbar from "../navigation/TopNavBar";
import Footer from "../sections/Footer";

function RootLayout() {
    const token = useLoaderData();
    const submit = useSubmit();
    useEffect(() => {
        if (!token) {
            return;
        }

        if (token === 'EXPIRED') {
            submit(null, {action: '/logout', method: 'post'});
            return;
        }

        const tokenDuration = getTokenDuration();
        console.log(tokenDuration);

        setTimeout(() => {
            submit(null, {action: '/logout', method: 'post'});
        }, tokenDuration);
    }, [token, submit]);

    return (
        <>
            <TopNavbar/>
            <main>
            <Outlet/>
            </main>
            <Footer/>
        </>
    );
}

export default RootLayout;

function Center(props){
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
            height: '100vh'
        }}>
            {props.children}
        </div>
    )
}
