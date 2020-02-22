const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const route = require('./routes/router.js');

app.use(express.json());
app.use(route);

const port = 3000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});