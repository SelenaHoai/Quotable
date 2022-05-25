const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8000;
const DB_NAME = 'quotable_db';

// --- MIDDLEWARE ---
app.use(cors(), express.json(), express.urlencoded({extended:true}))
// ------------------

// --- import the routes here (AFTER THE DB has connected)
// database connection
require ("./config/mongoose.config")(DB_NAME);

// connect the routes
require("./routes/quotable.route")(app);

// START THE SERVER
// ALWAYS AT THE END
app.listen(PORT, () => console.log(`>>> server up on port: ${PORT} <<<`))