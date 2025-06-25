# 🌿 Botanico – Plant Care Tracker

**Botanico** is a full-stack, mobile-responsive web application that helps users manage and monitor the care of their indoor and outdoor plants. Designed for plant lovers, Botanico allows users to track watering schedules, plant health, and more with a clean, user-friendly interface.

---

## 🔗 Live Site

👉 [Visit Botanico Live](https://botanico-8fbe0.web.app)

---

## ✨ Features

* 🔐 Secure user authentication (Email + Google/GitHub login)
* 🌱 Add, edit, and delete personal plant records
* 🗕️ Track watering, fertilizing, and health updates
* 🌙 Light/Dark theme toggle
* 📊 Sort plants by care level or watering schedule
* 📆 Responsive design for mobile, tablet, and desktop
* 🎨 Category-based creative theming (e.g., succulents, bonsai)
* 🛡️ Private routes with persistent login state
* 🔔 Toast-based styled success/error messages

---

## ⚙️ Tech Stack

* **Frontend**: React, Tailwind CSS, DaisyUI, Vite
* **Backend**: Firebase Auth, Firestore
* **Routing**: React Router v7
* **State Management**: React Hooks
* **Animations**: Lottie React
* **Utilities**: SweetAlert2, Date-fns, React Tooltip, Axios

---

## 📁 Installation & Setup Instructions

### ✅ Prerequisites

Make sure you have the following installed:

* Node.js (v18 or higher)
* npm

### 🔄 Steps

1. **Clone the repository**:

   ```bash
   git clone https://github.com/kawser-ahmed-nihad/Botanico-.git
   cd plant-care
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up environment variables**:

   Create a `.env` file in the root directory and add:

   ```env
   VITE_API_KEY=your_firebase_api_key
   VITE_AUTH_DOMAIN=your_auth_domain
   VITE_PROJECT_ID=your_project_id
   VITE_STORAGE_BUCKET=your_storage_bucket
   VITE_MESSAGING_SENDER_ID=your_msg_sender_id
   VITE_APP_ID=your_app_id
   ```

4. **Run the application locally**:

   ```bash
   npm run dev
   ```

5. **Build for production** (optional):

   ```bash
   npm run build
   ```

---

## 📆 Project Structure

```bash
/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── hooks/
│   ├── routes/
│   └── App.jsx
├── .env
├── tailwind.config.js
├── vite.config.js
└── README.md
```

---

## 📆 Pages Overview

* **Home Page**: Banner slider, featured plants, tips section
* **Add Plant**: Private route to submit detailed plant care info
* **All Plants**: View all plants with sort/filter + detail buttons
* **My Plants**: Logged-in user's plant list with update/delete
* **View Details**: Full plant profile page
* **Update Page**: Editable form with pre-filled data
* **Login/Register**: Secure auth with validation & OAuth
* **404 Page**: Creative not-found design

---

## 📅 Features Breakdown

* Plant Form includes:

  * Image, Name, Category (select)
  * Care Level (select), Watering Frequency
  * Last Watered Date, Next Watering Date (datepicker)
  * Health Status, User Info

* Functionalities:

  * SweetAlert success messages
  * Toast notifications for feedback
  * Modal confirmation on delete
  * Responsive design on all devices
  * Conditional rendering in Navbar
  * Private route redirect memory

---

## 🚀 Challenges Implemented

* ✅ Private route persistence on reload
* ✅ Sorting by Next Watering Date or Care Level
* ✅ Dark/Light theme toggle
* ✅ Lottie animations
* ✅ React Tooltip integration
* ✅ Modal for delete confirmation
* ✅ Custom 404 Page
* ✅ Styled success & error messages (no alert)

---

## 📦 Key Dependencies

```json
"dependencies": {
  "@tailwindcss/vite": "^4.1.10",
  "axios": "^1.10.0",
  "firebase": "^11.9.1",
  "lottie-react": "^2.4.1",
  "lucide-react": "^0.515.0",
  "react": "^19.1.0",
  "react-datepicker": "^8.4.0",
  "react-dom": "^19.1.0",
  "react-helmet": "^6.1.0",
  "react-router": "^7.6.2",
  "react-tooltip": "^5.29.1",
  "sweetalert2": "^11.22.0",
  "tailwindcss": "^4.1.10"
},
"devDependencies": {
  "@eslint/js": "^9.25.0",
  "@types/react": "^19.1.2",
  "@types/react-dom": "^19.1.2",
  "@vitejs/plugin-react": "^4.4.1",
  "daisyui": "^5.0.43",
  "eslint": "^9.25.0",
  "eslint-plugin-react-hooks": "^5.2.0",
  "eslint-plugin-react-refresh": "^0.4.19",
  "globals": "^16.0.0",
  "vite": "^6.3.5"
}
```

---

## 🧑‍💻 Author

Built with ❤️ by Kawser Ahmed Nihad

---

## 📜 License

This project is licensed under the MIT License.
