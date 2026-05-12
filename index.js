// 1. Import the express library
const express = require('express');

// 2. Initialize the express application
const app = express();

// 3. Define the port number
const PORT = 3000;

// 4. Create your "GET" API endpoint
app.get('/', (req, res) => {
    res.send('Welcome to my backend');
});

// 5. Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});