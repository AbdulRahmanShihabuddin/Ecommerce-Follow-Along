# Project Title:

E-Commerce Application

## Project Overview

This project is a comprehensive e-commerce platform designed to provide a fully functional online shopping experience. It includes features like user authentication, product management, and order handling. The purpose is to build a robust and scalable application that demonstrates full-stack development skills using the MERN stack.

## Key Features

- _REST API Creation_ for user authentication, product management, and order handling.
- _Secure login and registration functionality_ using JWT and password hashing.
- _Structured MongoDB schemas_ for users, products, and orders.
- _Robust server-side logic_ with Node.js and Express.
- _Interactive and responsive user interface_ built with React.

## Tech Stack

- _Frontend_: React.js
- _Backend_: Node.js with Express
- _Database_: MongoDB (using Mongoose for schema design)
- _Deployment_: GitHub Pages (frontend) and Render/Heroku (backend)
- _Additional Tools_: Postman for API testing, JWT for authentication, and bcrypt for password hashing.

## Why This Project

I chose this project because it provides an opportunity to practice and demonstrate a wide range of development skills, including frontend and backend development, database schema design, and secure authentication. Building an e-commerce platform is both challenging and rewarding, as it allows me to explore real-world scenarios and enhance my ability to create scalable web applications.

## Milestone 2:

Implemented a user login page with username and password fields. Styled using Tailwind CSS for a clean, responsive design. Validates input and handles user authentication upon form submission.

## Milestone 3: Server Setup

Set up the server with express for HTTP requests and mongoose for MongoDB. Configured routing and database connections, providing endpoints for user authentication and other functionalities.

## Milestone 4: User Model, Controller, and File Upload

In this milestone, we added user management and file upload functionality:

### Key Points:

1. **User Model**: Created a `User` model for storing user data (name, email, password) in the database.
2. **User Controller**: Built a controller for handling user-related requests (adding and retrieving users).
3. **File Upload**: Integrated **Multer** to handle file uploads, allowing users to upload images to the `uploads/` directory.
4. **Server Updates**: Enhanced `server.js` to support user routes and file upload functionality.
5. **Testing**: Verified file upload using **Postman**, with successful uploads stored in the `uploads/` folder.

