const lyricsFinder = require('lyrics-finder');

exports.getLyrics = async (req, res, next) => {
    const { track, artist } = req.query;
    const lyrics = await lyricsFinder(track, artist) || "no lyrics found";
    res.json({ lyrics })
}