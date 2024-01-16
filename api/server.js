// .env config
require('dotenv').config()

// Imports
const express = require('express'); // Express
const cors = require('cors'); // CORS 
const { userRoutes } = require('./routes'); // Routes
const morgan = require('morgan'); // Morgan loggin

// Misc config
const app = express();
const port = process.env.PORT || 5000; //Fallback to 5000 if 'process.env.PORT' is not set


// Middleware 
app.use(express.json()); // Parse JSON request body
app.use(cors()); // Enable CORS for all routes
app.use(morgan('dev')); // Log request details

// Use routes
app.use('/api/users', userRoutes);

// Routes
app.post('/', (req, res) => {
    console.log(req.body.name)
    res.end();
});
app.get('/', (req, res) => {
    res.send(
        `
        <title>API</title>
        <h1>ShipMind API is operational</h1>
        `);
});

// Start Server
app.listen(port, () => {
console.log(`Server is listening at http://localhost:${port}`);
});