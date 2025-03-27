# Shopping-Cart
A shopping cart page is a React-based e-commerce cart system using React Context API for global state management. 
Shopping Cart Application

Overview

This is a React-based shopping cart application that allows users to browse products, add them to a cart, and manage their cart items. The application utilizes the React Context API for global state management and stores cart data in localStorage for persistence.

Features

✅ Product Display – Fetches product data from an API and displays it in a visually appealing format.
✅ Add to Cart – Users can add items to the cart, with quantity updates if an item already exists.
✅ Cart Management – Users can increase/decrease item quantity, remove items, or clear the entire cart.
✅ Persistent Storage – Cart data is stored in localStorage, ensuring it remains after page reloads.
✅ Total Calculation – The total price is calculated dynamically and displayed with two decimal precision.
✅ Modal Cart View – The cart is displayed in a modal that users can open/close.
✅ Order Placement – A simple order placement feature triggers an alert and clears the cart.

Installation

Clone this repository:

git clone https://github.com/your-repo/shopping-cart.git

Navigate to the project directory:

cd shopping-cart

Install dependencies:

npm install

Start the development server:

npm start

Project Structure

shopping-cart/
│── src/
│   ├── Components/
│   │   ├── Product/Product.jsx
│   │   ├── Cart/Cart.jsx
│   ├── Context/
│   │   ├── Cart/Cart.jsx
│   ├── App.js
│   ├── index.js
│── public/
│── package.json
│── README.md

Technologies Used

React.js

Bootstrap

Context API

LocalStorage API

Fetch API

Usage

View the list of products on the homepage.

Click ADD TO CART to add items to the cart.

Open the cart by clicking the CART (X) button.

Modify quantities or remove items from the cart.

Click Place Order to complete the process (shows an alert and clears the cart).

Future Improvements

Implement a backend for real order processing.

Add user authentication for personalized carts.

Integrate a payment gateway for real transactions.
