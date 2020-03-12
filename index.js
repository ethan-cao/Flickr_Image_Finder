const path = require("path");
const express = require("express"); 

const app = express();
const port = process.env.PORT || 8080;
const staticPath = path.join(__dirname);

app.listen(port, () => {
  console.log("Server listening at port " + port);
});
app.use(express.static(staticPath));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});