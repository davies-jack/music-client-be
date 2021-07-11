require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

const authRouter = require('./routes/auth')

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.use('/auth', authRouter);
app.get('/lyrics', getLyrics);

const PORT = 8080;
app.listen(PORT, () => console.log(`listening on port ${PORT}`));