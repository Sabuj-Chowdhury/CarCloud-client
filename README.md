# 🚗 Car Rental System

A feature-rich platform designed to revolutionize car rentals with seamless booking, efficient car management, and user-friendly navigation. This project combines cutting-edge frontend and backend technologies to deliver an optimal experience for users and administrators.

## 🌐 Live URL

[Visit the Car Rental System](#) *https://keen-semifreddo-9ced4d.netlify.app/*

---

## 📜 Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Key Pages & Functionalities](#key-pages--functionalities)
- [Updates](#updates)
- [Deployment](#deployment)

---

## 🎯 Project Overview

This Car Rental System allows users to:

- Add, update, delete, and manage cars listed for rental.
- Search, sort, and book cars based on availability and preferences.
- View bookings with detailed summaries and modify or cancel reservations.

The platform offers secure authentication, responsive design, and robust backend functionalities to enhance the car rental experience.

---

## ✨ Features

### User-Facing

- **Responsive Design:** Fully optimized for mobile, tablet, and desktop devices.
- **Search & Filter:** Search cars by model, brand, or location and sort by date or price.
- **Real-Time Availability:** View and book available cars seamlessly.
- **Interactive UI:** Includes animated sections for a visually appealing experience.

### Admin & Private Features

- **Car Management:** Add, update, or delete cars with essential details.
- **My Cars:** View, sort, and manage cars added by the user.
- **My Bookings:** View all bookings with options to modify or cancel them.

### Authentication

- Firebase Email/Password & Google Sign-In.
- Protected routes for private pages like "Add Car," "My Cars," and "My Bookings."

---

## 🛠️ Technologies Used

### Frontend

- **React.js**: Component-based architecture for a dynamic UI.
- **Tailwind CSS**: Modern styling with utility-first classes.
- **Recharts**: Visual representation of booking statistics.

### Backend

- **Node.js** & **Express.js**: Scalable server-side logic.
- **MongoDB**: NoSQL database for efficient data handling.
- **Firebase Authentication**: Secure user authentication.

### Additional Tools

- **JWT**: Ensures secure API communication.
- **Environment Variables**: Secure Firebase and database credentials.

---

## 🚀 Setup and Installation

### Prerequisites

- Node.js
- MongoDB
- Firebase Account

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/car-rental-system.git
   cd car-rental-system
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file with:

   ```plaintext
   REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

4. Start the development server:

   ```bash
   npm run start
   ```

5. Run the backend server:
   ```bash
   node server.js
   ```

---

## 🗂️ Key Pages & Functionalities

- **Home Page:**

  - Banner with a motivational heading and "View Available Cars" button.
  - Highlights like "Why Choose Us?" and "Special Offers."
  - Recent car listings with hover effects.

- **Available Cars:**

  - Grid and list views with search and sorting options.
  - "Book Now" buttons for each car card.

- **My Cars (Private):**

  - Manage added cars in a table with update and delete options.
  - Real-time updates on actions.

- **My Bookings (Private):**
  - View bookings in a responsive table with details like price, date, and status.
  - Modify or cancel bookings with confirmation modals.

---

## 🛠️ Updates

1. **Sorting**: Briefly defined sorting options on the "Available Cars" page.
2. **Recharts**: Integrated for visualizing daily rental price statistics on the "My Bookings" page.

---

## 📦 Deployment

- Deployed using **Netlify** for the client and **Render** for the backend.
- Secured environment variables and configurations.
- No errors like CORS, 404, or 504 on production.

---

## 🙌 Acknowledgments

This project was developed as part of an assignment for assessing technical and problem-solving skills. Special thanks to the reviewers for their guidance.

---

## 📄 License

This project is licensed under the MIT License.

---

Feel free to reach out with feedback or suggestions! 🚀
