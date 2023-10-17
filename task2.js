console.clear();
const express = require('express'); // express js
const bodyParser = require('body-parser');
const axios = require('axios'); // for API call
const rateLimit = require('express-rate-limit'); // Import express-rate-limit
const app = express(); // express object

app.use(bodyParser.json());

const API_URL = 'https://udayteja.link/app/api/v1/evaluate';

// Create a rate limiter per user with a limit of 50 requests per second
const userRateLimiter = rateLimit({
    windowMs: 1000, // 1 second
    max: 50, // 50 requests  per user
    keyGenerator: (req) => req.headers['x-user-id'], //  'x-user-id' header as the key for rate limiting
    handler: (req, res) => {
        res.status(429).json({ error: `Rate limit exceeded. try after 1 seccond.` }); // is limit crossed.
    },
});

app.use(userRateLimiter); // Apply the rate limiter 

app.post('/api/v1/evaluate', async (req, res) => {
    const { expression } = req.body; // get expression from body

    // Handle the error
    if (!expression) {
        return res.status(400).json({ error: 'Expression not provided' });
    }

    if (!req.headers['x-user-id']) {
        return res.status(400).json({ error: 'x-user-id not provided in req headers' });
    }

    try {
        // Call API for evaluation
        const response = await axios.post(API_URL, {
            headers: { 'Content-Type': 'text/plain' }, data: expression
        });

        return res.status(200).json({
            "data": response.data
        });
    } catch (error) {
        return res.status(500).json({ error: 'Failed to evaluate expression' });
    }
});

app.listen(4000, () => {
    console.log('Server is running');
});