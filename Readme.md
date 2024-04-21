# Dumsor Logger

Dumsor Logger is a web application that allows users to log the time when their lights go off and come back on again. This can be useful for tracking power outages and understanding patterns of electricity availability.

## Features

- User registration and authentication
- Logging the time when lights go off and come back on
- Displaying logged outage times

## Technologies Used

- **Backend**: Node.js, Express.js, MongoDB
- **Frontend**: React.js, React Router
- **Authentication**: JSON Web Tokens (JWT), Passport.js
- **Database**: MongoDB Atlas (cloud-hosted MongoDB database)

## Getting Started

To run this project locally, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the root directory and run `npm install` to install backend dependencies.
3. Create an `.env` file to fill in the necessary environment variables (e.g., MongoDB connection URI, JWT secret).
4. Start the backend server by running `node index.js`.
5. Navigate to the `dumsor-logger-client` directory and run `npm install` to install frontend dependencies.
6. Start the frontend development server by running `npm run start`.
7. Open your web browser and navigate to `http://localhost:3000` to access the application.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
