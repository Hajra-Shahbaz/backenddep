// 1. Import the express library
const express = require('express');

// 2. Initialize the express application
const app = express();

// 3. Define the port number
const PORT = 3000;

// 4. Create your "GET" API endpoint
app.get('/', (req, res) => {
    res.send('Dekhain kr liya mn n, ho yeh phely he gya tha 😏');
});

// 5. Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});