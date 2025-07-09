# 📝 Responsive Blog Website

This is a modern, responsive **Blog Website** built using **Next.js**, **Tailwind CSS**, and **Clerk** for authentication. It allows users to browse blog posts and offers a clean, user-friendly interface.

## 🌐 Live Demo

🔗 [View Live Website](https://next-blog-snowy-three.vercel.app/)  
🔗 [GitHub Repository](https://github.com/pritamchaudhary/next-blog)

---

## 🚀 Tech Stack

- **Next.js** – React-based framework for server-side rendering and routing.
- **Tailwind CSS** – Utility-first CSS framework for styling and responsiveness.
- **Clerk** – Authentication provider for sign-in/sign-up functionalities.
- **Vercel** – Hosting and deployment.

---

## 📌 Features

- ✅ Fully responsive blog layout
- ✅ User authentication with Clerk (Sign Up / Log In / Log Out)
- ✅ Blog card grid on homepage with titles and summaries
- ✅ Dynamic routing for individual blog post pages
- ✅ Clean UI built with Tailwind CSS
- ✅ Fast performance with server-side rendering

---

## 📁 Folder Structure

next-blog/
├── components/ # Reusable UI components
├── pages/ # Next.js page-based routing
│ ├── index.js # Homepage
│ ├── blog/ # Blog detail pages
├── public/ # Static assets
├── styles/ # Tailwind global styles
├── .env.local # Clerk environment variables
├── tailwind.config.js
├── next.config.js
└── README.md

For more information, please refer to the official documentation of the technologies used:

[`Clerk Documentation`](https://go.clerk.com/WSe7K8F)


---

## 📷 Screenshots

> _Add screenshots of your homepage and a blog detail page here for visual overview._

---

## 🛠️ Getting Started Locally

To run this project on your local machine:

### 1. Clone the Repository
```bash
git clone https://github.com/pritamchaudhary/next-blog.git
cd next-blog

2. Install Dependencies
  npm install

3. Setup Clerk Authentication
Create an account at Clerk.dev

Get your Clerk Frontend API and Publishable Key

Create a .env.local file in the root directory:
  NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
  CLERK_FRONTEND_API=your_clerk_frontend_api

4. Run the App
  npm run dev
Your app will run on http://localhost:3000

🙌 Acknowledgments
This project was developed as part of my Frontend Web Development Internship at Cloudcredits Technologies Pvt. Ltd., where I gained hands-on experience in building modern, responsive, and secure web applications.

📫 Connect with Me
🌐 Portfolio: https://pritam-portfolio-website.netlify.app

💼 LinkedIn: https://www.linkedin.com/in/pritam-chaudhary/

📧 Email: pritamchaudhary901@gmail.com

📃 License
This project is licensed under the MIT License.
