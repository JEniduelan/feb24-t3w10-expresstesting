// Keep the app start-up code in this file,
// so that app config hapopnes in server.js
// and any test files can control the server start/stop in their own test code

const {app} = require("./server.js");

const PORT = process.envPort || 3000;

app.listen(PORT, () => {
    console.log("server is running on port " + PORT);
});