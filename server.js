const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("*", (req, res, next) => {
  // Logger
  let time = new Date();
  console.log(`${req.method} to ${req.originalUrl} at ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`);
  next();
});
app.use(express.static("dist"));
app.listen(8545, () => console.log(`Listening on localhost:8545`));
