// ==========================================
// Get Access Token
// ==========================================

export const getAccessToken = () => {
    return localStorage.getItem("accessToken");
};


// ==========================================
// Check Token Expiration
// ==========================================

export const isTokenExpired = (token) => {

    try {

        if (!token) {
            return true;
        }

        const parts = token.split(".");

        if (parts.length !== 3) {
            return true;
        }

        const payload = JSON.parse(
            atob(parts[1])
        );

        if (!payload.exp) {
            return true;
        }

        return payload.exp * 1000 <= Date.now();

    } catch (error) {

        console.error(
            "Token validation error:",
            error
        );

        return true;
    }
};


// ==========================================
// Check Authentication
// ==========================================

export const isAuthenticated = () => {

    const token = getAccessToken();

    // No token
    if (!token) {
        return false;
    }

    // Token expired or invalid
    if (isTokenExpired(token)) {

        localStorage.removeItem(
            "accessToken"
        );

        return false;
    }

    return true;
};