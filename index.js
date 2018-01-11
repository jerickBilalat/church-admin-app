const express = require("express");
require('./services/passport');


const app = express();

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`starting app at port: ${PORT}`)
});