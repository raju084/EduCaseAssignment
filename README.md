# PopX Auth App

A modern React + TypeScript authentication application built with:
- **React 19** + **TypeScript**
- **Vite** (build tool)
- **Tailwind CSS v3** (styling)
- **Redux Toolkit** (state management)
- **React Router v7** (routing)
- **Lucide React** (icons)

## 🚀 Live Demo
[https://cute-crumble-1f9e03.netlify.app/landing](https://cute-crumble-1f9e03.netlify.app/landing)

## Features

- 🔐 User Registration (Signup)
- 🔑 User Login with validation
- 👤 Account Settings / Profile page
- 🔒 Show/hide password toggle
- 💾 User data persisted in localStorage
- ⚡ Fully responsive mobile-first layout (375×812px)

## Getting Started

```bash
npm install
npm run dev
```

## Build for Production

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── assets/         # Static images
├── components/     # Reusable UI components
│   ├── Button.tsx
│   ├── FloatingLabelInput.tsx
│   └── RadioButton.tsx
├── pages/          # Page components
│   ├── LandingPage.tsx
│   ├── LoginPage.tsx
│   ├── SignupPage.tsx
│   └── ProfilePage.tsx
├── store/          # Redux store
│   ├── index.ts
│   └── userSlice.ts
├── App.tsx
├── main.tsx
└── index.css
```
