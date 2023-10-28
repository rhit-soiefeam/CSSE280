const express = require('express');
const app = express();
app.use(express.json());
// node app.js
port = 3000;
app.listen(port, () => {
    console.log("Server Listening on PORT: ", port);
});
app.get("/status", (request, response) => {
    const status = {
        "Status": "Running"
    };
    response.send(status);
})
// localhost:3000/status ** put in browser or postman **