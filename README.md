# ParcelEase

## Overview

ParcelEase is a web-based parcel management system designed for educational institutions like GGV. It streamlines the process of tracking and managing parcels for students and faculty members, providing an efficient way to handle deliveries, notifications, and user feedback.

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MySQL
- **Frontend**: EJS (Embedded JavaScript Templates), HTML, CSS, JavaScript
- **Real-time Communication**: Socket.io
- **Email Services**: Nodemailer
- **Scheduling**: Node-cron
- **Other Libraries**: Body-parser, CORS, Dotenv

## Features

- **User Authentication**: Secure login system with role-based access (Admin, Student, Faculty)
- **Parcel Management**:
  - Add parcels for students and faculty
  - View parcel lists with status tracking
  - Update parcel delivery status
- **Complaint System**: Users can submit complaints about parcel services
- **Feedback System**: Users can provide ratings and comments
- **Return Requests**: Users can request returns for undelivered parcels
- **Automated Notifications**: Daily email reminders for pending parcels
- **Admin Dashboard**: Centralized management interface for all operations

## Folder Structure

```
project/
├── config/
│   └── db.js                 # Database connection configuration
├── controllers/
│   ├── authController.js     # Handles user authentication
│   ├── parcelController.js   # Manages parcel operations
│   ├── complaintController.js # Handles complaint submissions
│   ├── dashboardController.js # Dashboard logic
│   ├── feedbackController.js # Manages feedback
│   ├── notifyController.js   # Email notification controls
│   └── returnController.js   # Return request handling
├── models/
│   ├── userModel.js          # User data operations
│   ├── parcelModel.js        # Parcel data operations
│   ├── complaintModel.js     # Complaint data operations
│   ├── feedbackModel.js      # Feedback data operations
│   └── returnModel.js        # Return data operations
├── public/
│   ├── css/                  # Stylesheets
│   ├── images/               # Static images
│   └── js/                   # Client-side JavaScript
├── routes/
│   ├── authRoutes.js         # Authentication routes
│   ├── parcelRoutes.js       # Parcel-related routes
│   ├── adminRoutes.js        # Admin panel routes
│   ├── complaintRoutes.js    # Complaint routes
│   ├── dashboardRoutes.js    # Dashboard routes
│   ├── feedbackRoutes.js     # Feedback routes
│   ├── returnRoutes.js       # Return request routes
│   └── notifyRoutes.js       # Notification routes
├── utils/
│   ├── mailer.js             # Email sending utilities
│   └── scheduler.js          # Automated task scheduling
├── views/
│   └── pages/                # EJS templates for web pages
├── package.json              # Project dependencies and scripts
├── server.js                 # Main application entry point
└── .env                      # Environment variables
```

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/parceleasy.git
   cd parceleasy
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up the database**:
   - Create a MySQL database named `parcel_management_system`
   - Import the database schema (create tables for users, student_parcels, faculty_parcels, complaints, feedback, returns)

4. **Configure environment variables**:
   Create a `.env` file in the root directory with the following variables:
   ```
   DB_HOST=localhost
   DB_USER=your_mysql_username
   DB_PASS=your_mysql_password
   DB_NAME=parcel_management_system
   PORT=5000

   SMTP_EMAIL=your_email@gmail.com
   SMTP_PASS=your_app_password
   ```

## How to Run

1. **Start the server**:
   ```bash
   npm start
   ```

2. **Access the application**:
   Open your browser and navigate to `http://localhost:5000`

3. **Default login**:
   - Register new users or use existing database entries
   - Admin, Student, and Faculty roles are supported

## Screenshots

### Login Page
*Screenshot of the login interface*

### Admin Dashboard
*Screenshot of the admin control panel*

### Parcel Entry Form
*Screenshot of the parcel addition form*

### Student Parcel List
*Screenshot of student parcel tracking*

### Complaint Submission
*Screenshot of the complaint form*

## Future Improvements

- Implement real-time notifications using Socket.io for instant updates
- Add parcel tracking integration with courier APIs
- Enhance mobile responsiveness
- Implement user profile management
- Add analytics and reporting features for admin
- Integrate barcode scanning for parcel identification
- Add multi-language support</content>
<parameter name="filePath">d:\Project_parcel\Project\README.md