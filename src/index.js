const {app} = require("./server.js");

const PORT = process.envPort || 3000;

app.listen(PORT, () => {
    console.log("server is running on port " + PORT);
});