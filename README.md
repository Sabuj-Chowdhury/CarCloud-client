# 🚗 Car Rental System

A feature-rich platform designed to revolutionize car rentals with seamless booking, efficient car management, and user-friendly navigation. This project combines cutting-edge frontend and backend technologies to deliver an optimal experience for users and administrators.

---

## 🌐 Live URL

🔗 [Live Website](https://carcloud-7bc2a.web.app/)

---

## 🎯 Project Overview

This Car Rental System enables users to:

- Add, update, delete, and manage cars listed for rental.
- Search, sort, and book cars based on availability and preferences.
- View bookings with detailed summaries and modify or cancel reservations.

The platform offers secure authentication, responsive design, and robust backend functionalities to enhance the car rental experience.

---

## 📸 Screenshots

### Homepage

![Screenshot 1](./src/assets/scernshots/Screenshot%202025-01-08%20at%2014.03.54.png)

### Available Cars Page

![Screenshot 2](./src/assets/scernshots/Screenshot%202025-01-08%20at%2014.04.16.png)

### Listed Cars Page

![Screenshot 3](./src/assets/scernshots/Screenshot%202025-01-08%20at%2014.04.38.png)

---

## ✨ Features

### General Features

- **Responsive Design:** Fully optimized for mobile, tablet, and desktop devices.
- **Search & Filter:** Search cars by model, brand, or location and sort by date or price.
- **Real-Time Availability:** Seamlessly view and book available cars.
- **Interactive UI:** Includes animated sections for a visually appealing experience.

### User Functionalities

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

### Dependencies

```json
{
  "axios": "^1.7.9",
  "chart.js": "^4.4.7",
  "date-fns": "^4.1.0",
  "firebase": "^11.1.0",
  "framer-motion": "^11.15.0",
  "react": "^18.3.1",
  "react-chartjs-2": "^5.2.0",
  "react-datepicker": "^7.5.0",
  "react-dom": "^18.3.1",
  "react-hot-toast": "^2.4.1",
  "react-icons": "^5.4.0",
  "react-router-dom": "^7.1.1",
  "sweetalert2": "^11.15.3"
}
```

### Environment Variables

This project requires certain environment variables to be set in a `.env.local` file. Below is an example template:

```plaintext
# Firebase configuration
VITE_apiKey=YOUR_API_KEY
VITE_authDomain=YOUR_AUTH_DOMAIN
VITE_projectId=YOUR_PROJECT_ID
VITE_storageBucket=YOUR_STORAGE_BUCKET
VITE_messagingSenderId=YOUR_MESSAGING_SENDER_ID
VITE_appId=YOUR_APP_ID

VITE_URL=YOUR_APPLICATION_URL
```

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/YourUsername/CarCloud_Client.git
   cd CarCloud_Client
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Run the backend server:

   ```bash
   node index.js
   ```

---

## 🗂️ Server Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/Sabuj-Chowdhury/CarCloud_Server.git
cd CarCloud_Server
```

### 2. Install Dependencies

Install the required dependencies by running:

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root of the project and add the following variables:

```plaintext
DB_USER=YOUR_DB_USER
DB_PASS=YOUR_DB_PASS
ACCESS_TOKEN=YOUR_ACCESS_TOKEN
```

Replace `YOUR_DB_USER`, `YOUR_DB_PASS`, and `YOUR_ACCESS_TOKEN` with appropriate values.

### 4. Run the Server

Start the server by running:

```bash
npm start
```

---

## 🗂️ Key Pages & Functionalities

- **Home Page:**

  - Banner with motivational heading and "View Available Cars" button.
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

## 📦 Deployment

- **Firebase:** Deployed frontend for production.
- **Vercel:** Backend deployment for seamless API communication.
- **Security:** Secured environment variables and configurations.

---

## 🙌 Acknowledgments

This project was developed as part of an assignment to assess technical and problem-solving skills. Special thanks to reviewers for their guidance and feedback.

---

Feel free to reach out with feedback or suggestions! 🚀
