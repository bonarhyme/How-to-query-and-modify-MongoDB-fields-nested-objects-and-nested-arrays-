const express = require("express");
const app = express();
require("dotenv/config");

const connectDB = require("./config/db");

connectDB();

app.use(express.json());

const musicRoutes = require("./routes/music");

app.use("/", musicRoutes);

const PORT = 4300;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
