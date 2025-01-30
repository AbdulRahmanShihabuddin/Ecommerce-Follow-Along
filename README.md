# E-Commerce Application

## Project Overview

A comprehensive e-commerce platform built using the MERN stack (MongoDB, Express.js, React.js, Node.js). This project demonstrates full-stack development capabilities through progressive milestones, featuring user authentication, product management, and order processing.

## Tech Stack

- **Frontend:** React.js with Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB with Mongoose
- **Authentication:** JWT, bcrypt
- **Deployment:** GitHub Pages (frontend), Render/Heroku (backend)
- **Testing:** Postman

## Project Milestones

### Milestone 1: Project Planning
- Defined project scope and objectives
- Selected technology stack
- Established key features and requirements
- Planned development roadmap

### Milestone 2: User Interface Foundation
- Created responsive login page
- Implemented Tailwind CSS styling
- Added input validation
- Set up basic form handling

### Milestone 3: Server Setup
- Configured Express.js server
- Established MongoDB connection
- Set up initial routing structure
- Created base API endpoints

### Milestone 4: User Management & File Upload
- Created User model with MongoDB schema
- Implemented user controller for CRUD operations
- Integrated Multer for file uploads
- Added file storage system in uploads directory
- Tested functionality with Postman

### Milestone 5: Sign-Up Page Development
- Built responsive signup interface with:
  - Name, email, and password fields
  - Form validation
  - Error messaging
- Implemented React Router navigation
- Added landing page with login/signup options
- Enhanced UI/UX with improved styling

### Milestone 6: Backend Signup API
- Implemented password encryption with bcrypt
- Created secure user data storage
- Added CORS configuration
- Enhanced error handling
- Set up user data validation

### Milestone 7: User Authentication
- Developed user signup endpoint
- Created login system with JWT
- Implemented password comparison
- Added session management
- Enhanced security measures

Example signup request:
```json
{
  "name": "Admin",
  "email": "admin@gmail.com",
  "password": "heyguys"
}
```

### Milestone 8: Product Display Components
- Created reusable ProductCard component
- Implemented responsive grid layout:
  - Single column on mobile
  - Two columns on tablet
  - Four columns on desktop
- Added dynamic product rendering
- Enhanced visual design with Tailwind CSS

### Milestone 9: Product Management Interface
- Developed ProductForm component with fields for:
  - Product name
  - Description
  - Price
  - Category
  - Image upload
- Implemented form state management
- Added input validation
- Created responsive design

### Milestone 10: Product Backend Integration
- Created Product MongoDB schema
- Implemented file upload handling with Multer
- Added product creation endpoint
- Enhanced data validation
- Set up image storage system

## Key Features

- Secure user authentication with JWT
- Password encryption with bcrypt
- Product management with image upload
- Responsive design for all devices
- RESTful API architecture
- Comprehensive error handling
- Dynamic product display
- Form validation and user feedback

## Project Purpose

This project serves as a demonstration of full-stack development skills, incorporating:
- Frontend and backend development
- Database schema design
- Secure authentication implementation
- File upload handling
- Responsive UI design
- API development and testing

## Next Steps

- Implement shopping cart functionality
- Add order processing system
- Enhance user profile management
- Implement admin dashboard
- Add product search and filtering
- Integrate payment processing

[Installation instructions and contribution guidelines to be added]