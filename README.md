# DiffiScore
# DiffiScore-Trial-2

🚀 **DiffiScore(CSIS HACKATHON 2025)**

**Authors:**  
Arnav, Tanay, Anish, Athish  

**Date:** 3/10/2025  

**Link to the video demonstration:**  
[Watch Here](https://drive.google.com/file/d/1hWx_WvTkvIpeKIa7PS-7jWUYRLmyi13n/view?usp=drive_link)

---

## 📝 Introduction
Welcome to **Diffiscore**, a powerful platform for uploading, storing, and searching questions efficiently. Whether you're a student, teacher, or researcher, Diffiscore makes it easy to manage question banks.

---

## 🌟 Key Features

### **Uploading Questions:**
- Users can add multiple images with the same tag at once, making it easy for a professor to create an exam on a specific topic.
- Users can delete images after selection if an incorrect image is uploaded.

### **Searching and Accessing Questions:**
- Retrieve saved questions by clicking **"Search Questions"**, entering the tag, and specifying the number of questions.
- View questions in an organized manner with an expandable view.
- Access questions uploaded by others for a collaborative experience.
- Download images directly to your local device.

---

## 🛠️ Tech Stack

- 🚀 **FastAPI** - Backend framework
- 🔍 **FAISS** - Image embeddings and similarity search
- 🤗 **Hugging Face** - Text and image embeddings
- 🖼️ **PIL (Pillow)** - Image processing
- 🌐 **Uvicorn** - FastAPI server
- ⚛️ **React.js** - Frontend framework
- 📡 **Axios** - API communication
- 🎨 **Tailwind CSS** - Modern UI styling
- ⚡ **Vite** - Optimized frontend development
- 🗄️ **FAISS Vector Store** - Embedding storage
- 💾 **Local Storage** - Image storage

---

## ⚙️ Installation & Setup

### 📌 Prerequisites
- 🐍 **Python 3.13+**
- 📂 **FAISS Index** for efficient similarity search
- 🤗 **Hugging Face Transformers** for text processing
- 💻 **React.js** for frontend
- ⚡ **FastAPI** as the backend framework

### 📥 Installation Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ArnavGupta-codes/DiffiScore_Trial1.git
   ```
2. **Create and activate a virtual environment:**
   ```bash
   python -m venv .venv
   source .venv/bin/activate  # On Windows: .venv\Scripts\activate
   ```
3. **Install dependencies:(Same as the one in the previous link)**
   ```bash
   pip install -r requirements.txt
   ```
4. **Run the backend server:**
   ```bash
   cd diffi
   uvicorn main:app --reload
   ```
5. **Start the frontend application:(In case of frontend error: Module not found: Error: Can't resolve 'framer-motion', then npm install framer-motion and same method for other components)**
   ```bash
   npm start
   ```
6. **Open the website and start using DiffiScore!**

---


## 📚 References

- 📘 **[FastAPI Documentation](https://fastapi.tiangolo.com/)**
- ⚛️ **[React Documentation](https://react.dev/learn)**
