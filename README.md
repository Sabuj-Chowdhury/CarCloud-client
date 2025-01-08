# 🚗 Car Rental System

A feature-rich platform designed to revolutionize car rentals with seamless booking, efficient car management, and user-friendly navigation. This project combines cutting-edge frontend and backend technologies to deliver an optimal experience for users and administrators.

## 🌐 Live URL

🔗 [Live Website URL](https://carcloud-7bc2a.web.app/)

---

## 🎯 Project Overview

This Car Rental System allows users to:

- Add, update, delete, and manage cars listed for rental.
- Search, sort, and book cars based on availability and preferences.
- View bookings with detailed summaries and modify or cancel reservations.

The platform offers secure authentication, responsive design, and robust backend functionalities to enhance the car rental experience.

---

## Screenshots

### Screenshot 1

![Screenshot 1](./src/assets/scernshots/Screenshot%202025-01-08%20at%2014.03.54.png)

### Screenshot 2

![Screenshot 2](./src/assets/scernshots/Screenshot%202025-01-08%20at%2014.04.16.png)

### Screenshot 3

![Screenshot 3](./src/assets/scernshots/Screenshot%202025-01-08%20at%2014.04.38.png)

## ✨ Features

- **Responsive Design:** Fully optimized for mobile, tablet, and desktop devices.
- **Search & Filter:** Search cars by model, brand, or location and sort by date or price.
- **Real-Time Availability:** View and book available cars seamlessly.
- **Interactive UI:** Includes animated sections for a visually appealing experience.

### Features

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

## Dependencies

````json
"dependencies": {
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


### Steps

1. Clone the repository:

2. Install dependencies:

   ```bash
   npm install
````

## Environment Variables

This project requires certain environment variables to be set in a `.env.local` file. Below is an example template for the `.env.local` file:

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

4. Start the development server:

   ```bash
   npm run start
   ```

5. Run the backend server:
   ```bash
   node index.js
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

- Deployed using **Netlify** for the client and **Vercel** for the backend.
- Secured environment variables and configurations.
- No errors like CORS, 404, or 504 on production.

---

## 🙌 Acknowledgments

This project was developed as part of an assignment for assessing technical and problem-solving skills. Special thanks to the reviewers for their guidance.

---

Feel free to reach out with feedback or suggestions! 🚀
