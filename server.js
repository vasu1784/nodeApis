const express = require("express");
const app = express();
const dotenv = require("dotenv");
// const logger = require("./middleware/logger");
const morgan = require("morgan");


dotenv.config({path:"./config/config.js"});

const userRoute = require("./routes/user");
// load config variables

const PORT = process.env.PORT || 8000;
app.use(express.json());

console.log(`The server is running in ${process.env.NODE_ENV} mode at port ${PORT}`);

app.listen(PORT,console.log(`Its working ...`));
// app.use(logger);
app.use( morgan('dev') )

app.use('/v1/user',userRoute);