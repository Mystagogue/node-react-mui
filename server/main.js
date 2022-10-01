const path = require("path");
const express = require("express");
const config = require("./config.js");

const PORT = config.port || 2003;

const app = express();

if (config.environment === "production") {
  app.use(express.static(path.resolve(__dirname, "../client/build")));
}

/////////////////////////////////////
///////////// ROUTES
/////////////////////////////////////

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server 2!" });
});

/////////////////////////////////////
///////////// DEFAULT
/////////////////////////////////////

app.get("*", (req, res) => {
  if (config.environment === "production") {
    res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
  } else {
    res.json({ message: "Cannot find this resource" });
  }
});

/////////////////////////////////////
///////////// LISTEN
/////////////////////////////////////

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
