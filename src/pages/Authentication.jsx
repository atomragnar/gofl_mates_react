import { json, redirect } from 'react-router-dom';
import jwt_decode from "jwt-decode";

import AuthForm from '../components/AuthForm';

function AuthenticationPage() {
    return <AuthForm />;
}

export default AuthenticationPage;

export async function action({ request }) {
    const searchParams = new URL(request.url).searchParams;
    const mode = searchParams.get('mode') || 'login';

    if (mode !== 'login' && mode !== 'signup') {
        throw json({ message: 'Unsupported mode.' }, { status: 422 });
    }

    const data = await request.formData();
    const authData = mode === 'login' ? {
        username: data.get('username'),
        password: data.get('password'),
    } : {
        username: data.get('username'),
        email: data.get('email'),
        password: data.get('password'),
    };


    const response = await fetch('http://localhost:8085/' + mode, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(authData),
    });

    if (response.status === 422 || response.status === 401) {
        return response;
    }

    if (!response.ok) {
        throw json({ message: 'Could not authenticate user.' }, { status: 500 });
    }

    if (mode === 'login') {
        
        const resData = await response.json();
        const token = resData.token;
    
        const decodedToken = jwt_decode(token);
        console.log(decodedToken)
        const { sub: username, userId } = decodedToken;
    
        localStorage.setItem('token', token);
        localStorage.setItem('userId', userId);
        localStorage.setItem('username', username);
    
        const expiration = new Date();
        expiration.setHours(expiration.getHours() + 1);
        localStorage.setItem('expiration', expiration.toISOString());

    }

  

    return redirect('/');
}
