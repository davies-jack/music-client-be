const SpotifyWebApi = require('spotify-web-api-node');

exports.login = (req, res, next) => {
    const { code } = req.body;
    const spotifyApi = new SpotifyWebApi({
        redirectUri: process.env.REDIRECT_URI,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET
    });

    res.json({
        hi: 'hi'
    })
};

exports.refresh = (req, res, next) => {

};