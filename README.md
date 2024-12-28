# Task Manager

Task Manager is a web application for managing tasks, allowing users to add, update, delete, and filter tasks. The application is built with a React frontend and a backend API.

## 🚀 Deployed Application

The application is deployed on Netlify. You can access it using the following link:

[Task Manager on Netlify](https://german-task-manager.netlify.app/)

---

## 🛠️ Installation and Setup

Follow these steps to install and run the project locally:

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- A running backend API (ensure the backend is deployed or running locally)

### Steps

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/germanrogu/task-manager-frontend.git
   cd task-manager-frontend
   ```

2. **Install Dependencies**:
   Using npm:

   ```bash
   npm install
   ```

   Or using yarn:

   ```bash
   yarn install
   ```

3. **Set Up Environment Variables**:
   Create a `.env` file in the root directory and add the following variables:

   ```
   VITE_API_URL=http://localhost:5001/api
   ```

   Replace `VITE_API_URL` with the URL of your backend API (e.g., `http://localhost:5001/api` for local development).

4. **Run the Application**:
   Using npm:

   ```bash
   npm run dev
   ```

   Or using yarn:

   ```bash
   yarn dev
   ```

5. **Access the Application**:
   Open your browser and navigate to `http://localhost:5173` (or the port specified in the terminal).

---

## ⚙️ Configuration Details

### Environment Variables

The application requires the following environment variable to be set:

- `VITE_API_URL`: The base URL of the backend API. This is used to make API requests from the frontend.

### Example `.env` File

```env
VITE_API_URL=http://localhost:5001/api
```

---

## 📄 Additional Notes

- Ensure the backend API is running and accessible at the URL specified in `VITE_API_URL`.
- For production deployment, update the `VITE_API_URL` to point to the deployed backend API.

---
