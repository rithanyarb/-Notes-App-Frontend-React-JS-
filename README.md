# 📝 Notes App Frontend (React)

This is the **frontend** of the full-stack Notes application built with **React**. It communicates with a **FastAPI backend** and uses **JWT authentication**. The UI is responsive and styled with **Bootstrap**.

---

## 🚀 Getting Started

### 🔧 Prerequisites

Make sure the following are installed:

- [Node.js](https://nodejs.org/) 
  Nodejs - v18.17.0
- `npm` (comes with Node.js)

---

### 📦 Installation

```bash
# Navigate to the frontend directory
cd react_fastapi/react/myapp

# Install dependencies
npm install
```

---

### ▶️ Run the App

```bash
# Start the development server
npm start
```

🔗 Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🧰 Tech Stack

- **React**
- **Bootstrap**
- **Axios** (for making API calls)

---

## 📂 Project Structure

```
📁 myapp/
├── 📂src/
│   ├── 📂components/
│   │   ├── Login.js
│   │   ├── NoteForm.js
│   │   ├── NoteItem.js
│   │   ├── Notes.js
│   │   └── Register.js
│   └── ...
├── App.js           # Main React component
├── api.js           # Axios configuration
└── ...

```

---

## 🔐 Features

- User Authentication – includes user login, registration, and secure access using JWT
- Notes Management – users can view, add, edit, and delete their personal notes
- Protected Routes – only authenticated users can access note-related pages
- JWT Token Storage – token is stored in local storage for persistent sessions
- Responsive UI – clean and intuitive interface built with React and Bootstrap

---

## 👥 Sample Users

| Username     | Password |
| ------------ | -------- |
| `rbrithanya` | `12345`  |
| `vidarshana` | `pass7`  |

---

## 📸 Screenshots

**Login Page**  
<img src="https://github.com/user-attachments/assets/b4ac8eac-fd54-408f-8af8-3a6d227b1411" width="600">

**Register Page**  
<img src="https://github.com/user-attachments/assets/b4bf6b86-df5a-4eed-9bca-6bc2d6a3ce18" width="600">

**Note Taking Page**  
<img src="https://github.com/user-attachments/assets/28c612e6-d6a3-45a7-b3f9-79a5ab6c411a" width="600">

---

## ✍️ Author

Made with ❤️ by **RB Rithanya**

---

## 📜 License

Free to use for personal and educational purposes.

---
