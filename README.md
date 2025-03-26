# Project Name - Portfolio with Contact Form (OAuth 2.0)

## 📌 Project Overview
This project is a **Portfolio Website** with a backend **contact form** using **OAuth 2.0** for secure email sending via **Gmail SMTP**. It consists of:
- **Frontend**: A simple personal portfolio with full responsiveness.
- **Backend**: Handles form submissions and sends emails using Nodemailer with OAuth 2.0.

---

## 🏗️ Folder Structure
```
newproject/
    ├── public/         # Static assets
    ├── src/            # React frontend code
    ├── server/         # Backend (Node.js, Express, Nodemailer)
    ├── node_modules/   # Dependencies
    ├── .env            # Environment variables (backend)
    ├── package.json    # Project dependencies
    ├── README.md       # Documentation
```

---

## 🛠️ Tech Stack
### **Frontend**:
- React.js
- HTML, CSS, JavaScript
- React Router
- Tailwind CSS

### **Backend**:
- Node.js
- Express.js
- Nodemailer (OAuth 2.0 for email sending)

---

## 📩 How It Works
1. **Portfolio UI**: Users can view projects, experience, and details.
2. **Contact Form**: Users submit messages via the frontend form.
3. **Backend Processing**:
   - Express.js receives the request.
   - Nodemailer (using OAuth 2.0) sends the email securely.
4. **Email Sent**: User receives a confirmation email.

---

## 🔧 Installation & Setup
### **1️⃣ Clone the Repository**
```sh
 git clone https://github.com/your-username/your-repo.git
 cd your-repo
```

### **2️⃣ Setup Backend**
```sh
 cd server
 npm install
```
Create a `.env` file in `server/`:
```ini
EMAIL_SERVICE=gmail
EMAIL_CLIENT_ID=your-client-id
EMAIL_CLIENT_SECRET=your-client-secret
EMAIL_REFRESH_TOKEN=your-refresh-token
EMAIL_ACCESS_TOKEN=your-access-token
EMAIL_USER=your-email@gmail.com
```

### **3️⃣ Setup Frontend**
```sh
 cd ../
 npm install
```

### **4️⃣ Start the Application**
```sh
 npm start
```
This will start:
- Backend: `http://localhost:5000`
- Frontend: `http://localhost:3000`

---

## 🚀 Features
- Responsive Portfolio UI
- Secure Email Sending with OAuth 2.0
- Contact Form with Validation

---

## 📝 License
This project is open-source. Feel free to modify and enhance it.

---

## 🤝 Contributing
1. Fork the repository.
2. Create a new branch.
3. Make changes and commit.
4. Open a pull request.

