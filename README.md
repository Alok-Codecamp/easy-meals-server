# Easy Meals Server Application

## Live server: https://easy-meals-server.vercel.app

# Overview

### The Easy Meals Server is a robust backend application built with Express.js and TypeScript, designed to support a comprehensive meal planning web application. It provides secure and scalable APIs with smooth authentication, authorization, and role-based access control. Users can place meal orders, make secure payments, and set dietary preferences, while meal providers can manage meal offerings and respond to orders efficiently.

# Key Features

## 🌟 Key Features – Meal Service App

The Meal Service App is a robust backend application designed for seamless meal ordering and provider management. Below is a breakdown of the core features implemented with scalability, security, and user experience in mind.

---

### ✅ Smooth Authentication & Authorization

- Secure login and signup system using JWT.
- Refresh token mechanism for seamless session continuity.
- Role-based route protection to safeguard sensitive operations.

---

### ✅ Two-layer Data Validation

- **Request-level validation** using Zod schemas ensures client-side data integrity.
- **Schema-level validation** with Mongoose enforces backend data structure consistency.

---

### ✅ Role-based Access Control

- Fine-grained authorization for different user types:
  - **Admin**
  - **Customer**
  - **Meal Provider**
- Protected endpoints based on roles using middleware validation.

---

### ✅ Order Management System

- Customers can place, track, and manage their orders.
- Meal providers can view and update order status.
- Real-time revenue calculation and summary for providers.

---

### ✅ Dietary Preference Integration

- Customers can define their dietary preferences.
- Personalized meal suggestions based on those preferences (filtering-ready system).

---

### ✅ Meal Provider Dashboard

- Providers can:
  - Create and manage meals.
  - View all placed orders.
  - Update order statuses and handle customer-specific orders.

---

### ✅ Modular Architecture

- Organized codebase using the **Modular Design Pattern**:
  - Each feature is encapsulated in modules (e.g., user, meal, order).
  - Modules include interface, model, route, controller, and service layers.

---

This backend is built with **TypeScript**, **Express.js**, **MongoDB**, and **Mongoose**, ensuring type safety, strong schema management, and high scalability.

> For more information on available endpoints, refer to the [🚀 API Endpoints – Meal Service App](#api-endpoints--meal-service-app) section.

This backend application provides RESTful APIs to manage users, authentication, meal providers, meals, and customer orders. Below is a comprehensive breakdown of available endpoints.

---

### 🔐 Auth Routes

**Base Route:** `/auth`

| Method | Endpoint           | Description                     | Access |
| ------ | ------------------ | ------------------------------- | ------ |
| POST   | `/login`           | Log in and receive access token | Public |
| POST   | `/refresh`         | Refresh authentication token    | Public |
| POST   | `/forget-password` | Initiate password reset         | Public |
| POST   | `/reset-password`  | Complete password reset         | Public |

---

### 👤 User Routes

**Base Route:** `/users`

| Method | Endpoint                  | Description               | Access                    |
| ------ | ------------------------- | ------------------------- | ------------------------- |
| POST   | `/register`               | Register a new user       | Public                    |
| GET    | `/users`                  | Get list of all users     | Public / Admin (optional) |
| GET    | `/my-profile/:userId`     | Get user profile by ID    | Customer / Meal Provider  |
| PUT    | `/update-profile/:userId` | Update user profile by ID | Customer / Meal Provider  |

---

### 🧑‍🍳 Meal Provider Routes

**Base Route:** `/providers`

| Method | Endpoint                           | Description                    | Access            |
| ------ | ---------------------------------- | ------------------------------ | ----------------- |
| POST   | `/create-mealProvider/:providerId` | Create a meal provider profile | MealProvider      |
| GET    | `/all-provider`                    | Get all meal providers         | Public            |
| GET    | `/my-profile/:mealProviderId`      | Get provider profile by ID     | Provider/Customer |
| PUT    | `/update-profile/:providerId`      | Update provider profile        | Meal Provider     |

---

### 🍽️ Meal Routes

**Base Route:** `/meals`

| Method | Endpoint               | Description             | Access        |
| ------ | ---------------------- | ----------------------- | ------------- |
| POST   | `/create-meal`         | Create a new meal       | Meal Provider |
| GET    | `/all-meals`           | Get all available meals | Public        |
| GET    | `/:mealId`             | Get specific meal by ID | Public        |
| PUT    | `/update-meal/:mealId` | Update a meal by ID     | Meal Provider |

---

### 🛒 Order Routes

**Base Route:** `/orders`

| Method | Endpoint                 | Description                                | Access            |
| ------ | ------------------------ | ------------------------------------------ | ----------------- |
| POST   | `/customers/order`       | Customer places a new order                | Customer          |
| GET    | `/providers/orders`      | Meal provider gets list of received orders | Meal Provider     |
| GET    | `/customers/orders`      | Customer gets list of their placed orders  | Customer          |
| PUT    | `/update-order/:orderId` | Update order status/details                | Provider/Customer |

---

### ✅ Notes

- All `POST`, `PUT`, and `DELETE` routes require appropriate request bodies and valid tokens where authentication is needed.
- Authenticated routes use role-based authorization (`customer`, `mealProvider`).
- Ensure headers include:
  ```http
  Content-Type: application/json
  Authorization: Bearer <token>
  ```

## 💻 Tech Stack – Easy Meals Server

The **Easy Meals Server** is a backend application designed for seamless meal ordering and provider management, utilizing modern technologies to ensure reliability, scalability, and security.

Below is an overview of the core technologies and libraries powering the application.

---

### 🛠️ **Core Technologies**

- **Node.js**: JavaScript runtime for building fast, scalable network applications.
- **TypeScript**: A superset of JavaScript that adds type safety to the codebase, improving developer experience and code quality.
- **Express.js**: A lightweight web application framework for Node.js, enabling quick and flexible backend API development.
- **MongoDB**: A NoSQL database used for storing and managing data, providing high flexibility and scalability for the application's needs.
- **Mongoose**: An ODM (Object Document Mapper) for MongoDB, which simplifies interaction with the database and offers built-in validation.

---

### 🧩 **Additional Key Libraries & Tools**

- **bcrypt**: A library to hash and verify passwords securely, ensuring user data protection.
- **jsonwebtoken**: A library for generating and verifying JSON Web Tokens (JWT), enabling secure authentication and session management.
- **cookie-parser**: A middleware to parse cookies, commonly used for handling session cookies in web applications.
- **cors**: A package that allows enabling Cross-Origin Resource Sharing (CORS) headers to manage cross-origin requests.
- **dotenv**: A zero-dependency module to load environment variables from a `.env` file, simplifying configuration management.
- **http-status**: A utility for working with HTTP status codes, helping ensure appropriate responses from the server.
- **nodemailer**: A module for sending emails, useful for functionalities like account activation or notifications.
- **zod**: A TypeScript-first schema declaration and validation library, ensuring strong data validation throughout the application.
- **ts-node-dev**: A tool that enables fast development server restarts with TypeScript, speeding up the development process.
- **typescript**: A superset of JavaScript, providing static types to improve maintainability and prevent runtime errors.

---

### 🧠 **Development Workflow**

- **Development**: `tsnd --respawn --transpile-only ./src/server.ts` – Starts the server with automatic transpiling and fast restarts during development.
- **Build**: `tsc` – Compiles the TypeScript code to JavaScript for production deployment.
- **Start**: `node dist/server.js` – Runs the compiled JavaScript code from the `/dist` directory in production.
- **Testing**: Placeholder for future tests, with a default command that currently exits with an error message.

---

This tech stack is carefully selected to deliver high performance, secure user data management, and ease of development, with clear scalability for future features.

# Easy Meals Server – Installation Guide

This guide will walk you through the process of installing and setting up the **Easy Meals Server** on your local machine for development or production use.

---

## 🔧 Prerequisites

Before you begin, ensure that you have the following installed on your machine:

- **Node.js** (v18 or later) – A JavaScript runtime for building server-side applications.
  - Download Node.js: [https://nodejs.org/](https://nodejs.org/)
- **Git** (optional, if cloning from a repository) – Version control system for managing code.
  - Download Git: [https://git-scm.com/](https://git-scm.com/)

---

## 📥 Installation Steps

### 1. Clone the Repository

Start by cloning the repository to your local machine:

```bash
git clone https://github.com/your-username/easy-meals-server.git
cd easy-meals-server
```
