import express from 'express';
const port = 4000;

const app = express(); // ähnlich wie: new Express();

// Server config


app.listen(port, () => {
    console.log('Server is running http://localhost:'+port);
});
