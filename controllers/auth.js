const SpotifyWebApi = require("spotify-web-api-node");

exports.login = (req, res, next) => {
    const { code } = req.body;
    const spotifyApi = new SpotifyWebApi({
        redirectUri: process.env.REDIRECT_URI,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
    });

    spotifyApi
        .authorizationCodeGrant(code)
        .then(
            ({
                body: {
                    access_token: accessToken,
                    refresh_token: refreshToken,
                    expires_in: expiresIn,
                },
            }) => {
                res.json({
                    accessToken,
                    refreshToken,
                    expiresIn
                })
            }
        ).catch(err => res.json({ err }));
};

exports.refresh = (req, res, next) => {
    const { refreshToken } = req.body;
    const spotifyApi = new SpotifyWebApi({
        redirectUri: process.env.REDIRECT_URI,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken
    });

    spotifyApi
        .refreshAccessToken()
        .then(({ body: { access_token: accessToken, expires_in: expiresIn } }) => {
            res.json({
                accessToken,
                expiresIn
            })
        })
        .catch(err => res.json({ err }))
};