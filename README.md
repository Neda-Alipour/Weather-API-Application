# Weather API Application

## Overview

This project is a capstone web application built with **Node.js**, **Express**, **Axios**, and **EJS**.
The application integrates a **public Weather API** to fetch real-time weather data and present it to users in a clear and user-friendly interface.

The goal of this project is to demonstrate how to integrate public APIs into a server-rendered web application, handle client–server communication, and display external data dynamically.

---

## Features

* Fetches real-time weather data using a public Weather API
* Allows users to search weather information by location
* Displays key weather details such as temperature and conditions
* Server-side rendering using EJS templates
* Error handling for failed API requests or invalid user input
* Clean project structure following Express best practices

---

## Technologies Used

* **Node.js** – Runtime environment
* **Express.js** – Web framework
* **Axios** – HTTP client for API requests
* **EJS** – Templating engine
* **HTML / CSS** – Frontend structure and styling
* **Public Weather API** – External data source

---

## Project Structure

```
project-root/
│
├── public/            # Static files (CSS, images, etc.)
├── views/             # EJS templates
│   ├── index.ejs
│   └── error.ejs
│
├── routes/            # Express routes (if applicable)
├── index.js           # Main server file
├── package.json
├── README.md
```

---

## API Integration

* The application uses **Axios** to make `GET` requests to a public Weather API.
* Weather data is retrieved based on user input (such as city name).
* The server processes the API response and passes relevant data to the EJS templates for rendering.

---

## Error Handling

* API request errors are caught and logged in the console
* User-friendly error messages are displayed when:

  * The API request fails
  * The user enters an invalid or unknown location

---

## Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/your-repository-name.git
cd your-repository-name
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Server

```bash
nodemon index.js
```

or, if nodemon is not installed:

```bash
node index.js
```

### 4. Open in Browser

```
http://localhost:3000
```

(Replace the port number if your project uses a different one.)

---

## Learning Outcomes

Through this project, I gained hands-on experience with:

* Integrating third-party APIs into a Node.js application
* Using Axios for server-side HTTP requests
* Rendering dynamic data with EJS
* Structuring an Express application professionally
* Handling errors gracefully in a real-world scenario

---

## Future Improvements

* Add weather forecasts for multiple days
* Improve UI/UX design
* Add loading states
* Support geolocation-based weather search
* Cache API responses to reduce unnecessary requests

---

## Author

**Neda Alipour**

Capstone Project – Web Development with Node.js & Express

---

If you want, I can also:

* Tailor this README exactly to **your existing folder structure**
* Rewrite it to match a **portfolio / job-ready style**
* Create a **short GitHub repo description** (1–2 lines) for you
