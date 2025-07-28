const express = require("express");
const app = express();

app.use("/", (req, res) => {
    res.send({ msg: "Hello world" });
});

app.listen(8080, () => {
    console.log("App is listening at port 8080");
});
