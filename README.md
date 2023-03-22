This is a sample implementation of a RESTful API for user authentication and authorization using Node.js, MongoDB, Mongoose, and Express. This API provides endpoints for user registration and login, and uses bcryptjs for securing the password for authentication and authorization.

# Prerequisites
 - Node.js (version 14 or higher)
 - MongoDB Atlas account (or a local MongoDB instance)
 - ThunderClient or a similar tool for testing the API endpoints
 
# Getting Started

## Installation
 - Clone the repository and install the dependencies:
 - Navigate to the project directory and install the dependencies by running the following command:

```bash
git clone https://github.com/<username>/<repository>.git
cd <repository>
npm install

```

## Configuration
Create a .env file and set the following environment variables:

```bash
MONGODB_URI=<your-mongodb-uri>
```
Replace <your-mongodb-uri> with the URI of your MongoDB instance

Next, start the development server using the following command.

```bash
npm start

```

## API endpoints
The API provides the following endpoints:

### POST /register
This endpoint registers a new user with the system.

```bash
{
  "username": "johndoe",
  "password": "password123",
  "address": "Delhi",
  "phone": "12345679"
}

```

### Response
 - Status code: 201 (Created)
 - Response body:

```bash
{
  "message": "User created successfully"
}

```

### POST /login
This endpoint authenticates a user and generates a JWT token for subsequent requests.

```bash
{
  "username": "johndoe",
  "password": "password123"
}

```

### Response
 - Status code: 200 (Ok)
 - Response body:

```bash
{
  "message": <user data>
}

```


## Technology Stack
This project uses the following technology stack:

 - Nodejs
 - Express
 - MongoDB
 - Mongoose
 
