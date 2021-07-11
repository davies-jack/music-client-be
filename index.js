const app = require('express');
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));


const PORT = 8080;
app.listen(PORT, () => console.log(`listening on port ${PORT}`));