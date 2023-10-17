# OnlineSalesAssessment

## Table of Contents

- [About](#about)
- [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
- [Usage](#usage)
- [Rate Limiting with `express-rate-limit`](#rate-limiting-with-express-rate-limit)
- [Packages Used](#packages-used)
- [Remote API for Expression Evaluation](#remote-api-for-expression-evaluation)
- [API Documentation](#api-documentation)
- [License](#license)

## About

Assessment consists of API development, rate limiting, mathematical expression evaluation, and debugging.

## Getting Started

### Prerequisites

ensure you have the following prerequisites:

- [Node.js](https://nodejs.org/) installed
- [npm (Node Package Manager)](https://www.npmjs.com/) installed
- Basic knowledge of JavaScript

### Installation

To get the application up and running, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/uday510/OnlineSalesAssessment/

2. Install
   ```bash
       npm install
3. Run Files
   ```bash
    node task1.js or node task2.js or python3 task3.py
   
4. Rate Limiting with express-rate-limit
```javascript
const rateLimit = require('express-rate-limit');

// Create a rate limiter per user with a limit of 50 requests per second
const userRateLimiter = rateLimit({
    windowMs: 1000, // 1 second
    max: 50, // 50 requests per user per second
    keyGenerator: (req) => req.headers['x-user-id'], // 'x-user-id' header as the key for rate limiting
    handler: (req, res) => {
        res.status(429).json({ error: 'Rate limit exceeded.' });
    },
});

app.use(userRateLimiter); // Apply the rate limiter to your routes

## Packages Used

The following packages are used in Task 2 to implement rate limiting and evaluate multiple mathematical expressions:

1. **Express:** A minimal and flexible Node.js web application framework used to create the API and handle HTTP requests.

2. **Axios:** A popular Promise-based HTTP client for making API requests. It is used to send mathematical expressions to a remote API for evaluation.

3. **Express-Rate-Limit:** An Express.js middleware for rate limiting. It helps control the number of requests that can be made to the API within a specific time frame, preventing abuse and ensuring efficient use of resources.

4. **Body-Parser:** Middleware for parsing JSON requests. It is used to parse incoming JSON data from API requests.

These packages are crucial for implementing rate limiting and making API calls for mathematical expression evaluation.

## Remote API for Expression Evaluation

In Task 2, we use a remote API hosted on Vercel to evaluate mathematical expressions. This API allows us to send multiple expressions for evaluation and receive the results.

- **API URL:** [https://udayteja.link/app/api/v1/evaluate](https://udayteja.link/app/api/v1/evaluate)

This API is used to evaluate mathematical expressions in bulk. You can make POST requests to this URL with your mathematical expressions in the request body to get the results.

For example:

```http
POST https://udayteja.link/app/api/v1/evaluate
Content-Type: application/json

{
    "expression": ["2 * 4 * 4", "5 / (7 - 5)", "sqrt(5^2 - 4^2)", "sqrt(-3^2 - 4^2)"]
}
```
### API Documentation

Detailed API documentation can be found [here](https://lunar-astronaut-788342.postman.co/workspace/New-Team-Workspace~bc99495e-a6e5-4a07-a96a-db664aa475fb/collection/18252587-7e2d9b3a-539b-46a5-92f6-53b3d1fbb1d6?action=share&creator=18252587).

## License

This project is licensed under the GNU General Public License v3.0 - see the [LICENSE.md](LICENSE.md) file for details.

      
    



