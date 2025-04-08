# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# 🛒 Shopping Cart App

A simple and responsive shopping cart application built with **React** using the **Context API** for state management. This project demonstrates core React concepts such as components, hooks, props, and localStorage persistence.

---

## 🚀 Features

- 🛍️ Fetches product data from an API (`https://dummyjson.com/products`)
- 🧠 Uses React Context API to manage cart state globally
- ➕ Add and ➖ remove items to/from the cart
- 🧹 Clear the cart with a single click
- 💰 Calculate and display the total price with proper formatting
- 💾 Cart data is saved in `localStorage` to persist between sessions
- 📱 Responsive design using Bootstrap
  
---

## 🧩 Tech Stack

- ⚛️ React
- 🧠 Context API
- 💅 Bootstrap
- 🧠 JavaScript (ES6+)
- 🌐 REST API (DummyJSON)

---


## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
