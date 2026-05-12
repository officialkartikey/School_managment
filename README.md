
# School Management API

A professional backend API built using Node.js, Express.js, and MySQL for managing school data.

The project allows users to:
- Add new schools
- Fetch schools sorted by geographical proximity

---

# Live API

## Base URL

```text
https://school-managment-0ec5.onrender.com
```

---

# Features

- Add School API
- List Schools API
- Distance-based sorting using Haversine Formula
- MySQL Database Integration
- Input Validation
- Professional MVC + Service Architecture
- RESTful APIs
- Hosted Backend

---

# Tech Stack

- Node.js
- Express.js
- MySQL
- mysql2
- express-validator
- dotenv
- Render
- Railway MySQL

---

# Project Structure

```text
school-management-api/
│
├── config/
├── controllers/
├── middleware/
├── models/
├── routes/
├── services/
├── utils/
├── validators/
│
├── .env
├── app.js
├── package.json
└── README.md
```

---

# Database Schema

```sql
CREATE TABLE schools (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    latitude FLOAT NOT NULL,
    longitude FLOAT NOT NULL
);
```

---

# Installation & Setup

## 1. Clone Repository

```bash
git clone https://github.com/officialkartikey/School_managment.git
```

---

## 2. Move into Project

```bash
cd School_managment
```

---

## 3. Install Dependencies

```bash
npm install
```

---

## 4. Create .env File

```env
PORT=3000

DB_HOST=YOUR_HOST
DB_USER=YOUR_USER
DB_PASSWORD=YOUR_PASSWORD
DB_NAME=YOUR_DATABASE
DB_PORT=YOUR_PORT
```

---

## 5. Run Server

```bash
npm run dev
```

or

```bash
node app.js
```

---

# API Endpoints

# 1. Add School API

## Endpoint

```text
POST /api/addSchool
```

## Example URL

```text
https://school-managment-0ec5.onrender.com/api/addSchool
```

## Request Body

```json
{
  "name": "Delhi Public School",
  "address": "Ghaziabad",
  "latitude": 28.6692,
  "longitude": 77.4520
}
```

## Success Response

```json
{
  "success": true,
  "message": "School added successfully"
}
```

---

# 2. List Schools API

## Endpoint

```text
GET /api/listSchools
```

## Query Parameters

| Parameter | Type |
|---|---|
| latitude | Float |
| longitude | Float |

## Example URL

```text
https://school-managment-0ec5.onrender.com/api/listSchools?latitude=28.7041&longitude=77.1025
```

## Success Response

```json
{
  "success": true,
  "count": 2,
  "data": [
    {
      "id": 1,
      "name": "Delhi Public School",
      "address": "Ghaziabad",
      "latitude": 28.6692,
      "longitude": 77.452,
      "distance": "34.31"
    }
  ]
}
```

---

# Distance Calculation

The API uses the Haversine Formula to calculate the geographical distance between:
- user coordinates
- school coordinates

Distance is returned in kilometers (km).

---

# Deployment

## Backend Hosting
- Render

## Database Hosting
- Railway MySQL

---

# API Testing

Tested using Postman.

---

# API Screenshots

## Add School API

<img width="1437" height="817" alt="Screenshot 2026-05-12 115245" src="https://github.com/user-attachments/assets/5e72bd72-97fc-4d42-bf14-dfb8b6d9d4f2" />

---

## List Schools API

<img width="1440" height="860" alt="image" src="https://github.com/user-attachments/assets/9c1ead48-4739-4c7a-a2d9-d7e9f260a3b2" />

---

# Author

Kartikey Mishra

GitHub:
https://github.com/officialkartikey

