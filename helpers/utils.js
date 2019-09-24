export const getCookieFromReq = (req, cookie) => {
    const cookieServer = req.headers.cookie.split(';').find((c) => c.trim().startsWith(`${cookie}=`));
    if (!cookieServer) {
        return undefined;
    }
    return cookieServer.split('=')[1];
};