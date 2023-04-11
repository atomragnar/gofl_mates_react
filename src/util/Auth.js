import { redirect } from 'react-router-dom';
import jwt_decode from "jwt-decode";

export function getTokenDuration() {
    const storedExpirationDate = localStorage.getItem('expiration');
    const expirationDate = new Date(storedExpirationDate);
    const now = new Date();
    const duration = expirationDate.getTime() - now.getTime();
    return duration;
  /*  const token = localStorage.getItem('token');
    if (!token) {
        return -1;
    }
    const { exp } = jwt_decode(token);
    const now = Math.floor(Date.now() / 1000);
    const duration = exp - now;
    return duration;*/
}

export function getUserId() {
    const userId = localStorage.getItem('userId');
    return userId;
}

export function getUsername() {
    const username = localStorage.getItem('username');
    return username;
}

export function checkIfTokensExpired() {
    const token = localStorage.getItem('token');
    if (token) {
        const decodedToken = jwt_decode(token);
        const currentTime = Date.now() / 1000;
        if (decodedToken.exp > currentTime) {
            return true;
        }
    }
    return false;
}

export function getAuthToken() {
    const token = localStorage.getItem('token');

    if (!token) {
        return null;
    }

    const tokenDuration = getTokenDuration();

    if (tokenDuration < 0) {
        return 'EXPIRED';
    }

    return token;
}

export function tokenLoader() {
    const token = getAuthToken();
    return token;
}

export function checkAuthLoader() {
    const token = getAuthToken();

    if (!token) {
        return redirect('/auth');
    }
}
