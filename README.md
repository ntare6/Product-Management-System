
# 📦 Product Management System

Welcome to the **Product Management System** – a hands-on backend project designed to help you build real-world skills with **Node.js**, **Express**, and **PostgreSQL**.

This project simulates a simple Product system where you can manage products, track stock levels, and search through your catalog efficiently. It's an excellent opportunity to deepen your understanding of RESTful API design, data persistence, and server-side logic.

---

## Project Objectives

You'll build a backend system that allows:

-  **Product Management**: Create, read, update, and delete (CRUD) product entries.
-  **Product Tracking**: Monitor product stock levels and quantities.
-  **Search & Filtering**: Find products using query-based search and filters.

---

##  Tech Stack

- **Node.js** – JavaScript runtime for building scalable server-side applications.
- **Express.js** – Lightweight web framework for handling API requests and routing.
- **PostgreSQL** – Powerful, open-source relational database.
---

##  Getting Started

Follow the steps below to set up the project locally.

### 1. Clone the repository

```bash
git clone https://github.com/ntare6/Product-Management-System.git
```
 

### 2. Install dependencies

```bash
npm install
```





### 3. Start the server

```bash
npm start
```

Your API should now be live on `http://localhost:3000`.

---

## Project Structure

```bash
.
├── config/
│   └── db.js                 
├── controllers/
│   └── products/
│       ├── create.js
│       ├── find.js
│       ├── update.js
│       └── delete.js
├── models/
│   ├── index.js              
│   └── products/
│       ├── product.js         
│       ├── create.js          
│       ├── find.js            
│       ├── update.js          
│       └── delete.js          
├── routes/
│   ├── index.js               
│   └── products.js            
├── middleware/
│   └── errorHandler.js      
├── utils/
│   └── validators.js          
├── .env                       
├── .gitignore
├── app.js                    
├── package.json
└── README.md
```

---

##  Sample Endpoints

* `GET /products` – List all products
* `POST /products` – Add a new product
* `PUT /products/:id` – Update a product
* `DELETE /products/:id` – Remove a product
* `GET /products/search?name=widget&inStock=true` – Search & filter

---



## Contribution Guidelines

Feel free to branch out and work on any of the following:

* Building controllers for products and Product
* Creating database schema and models
* Writing search and filter logic
* Adding validations and error handling

We'll sync regularly to merge progress and review learnings as a team 🚀

---
