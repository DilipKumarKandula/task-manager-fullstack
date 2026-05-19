# Task Manager Full Stack Application

A production-oriented full-stack application built using modern industry-standard architecture and deployment practices.

This project demonstrates real-world implementation of:

- Full-stack application architecture
- Secure authentication systems
- JWT & Cookie-based authentication
- Google OAuth integration
- Protected APIs & routes
- Frontend ↔ Backend communication
- Middleware architecture
- Environment-based configuration
- Cloud deployment workflow
- Infrastructure separation
- Container-ready application structure

---

# Live Application

## Frontend

```txt id="a1jlwm"
https://task-manager-fullstack-ruddy.vercel.app
```

## Backend API

```txt id="b1jlwm"
https://task-manager-fullstack-1-xcu4.onrender.com
```

---

# System Architecture

```txt id="c1jlwm"
Frontend (Next.js / Vercel)
        ↓
Backend API (Node.js / Express / Render)
        ↓
Authentication Middleware
        ↓
PostgreSQL Database (Neon)
```

---

# Infrastructure & Production-Level Practices

This project follows modern software engineering and deployment practices commonly used in scalable production applications.

## Implemented Concepts

- Frontend & Backend separation
- Secure authentication architecture
- JWT token lifecycle
- HTTP-only secure cookies
- OAuth authentication flow
- Middleware-based route protection
- Environment variable management
- Cross-origin communication (CORS)
- Database abstraction layer
- Production deployment workflow
- Container-ready architecture
- Scalable backend structure

---

# Authentication Architecture

```txt id="d1jlwm"
User Login
    ↓
Frontend redirects to backend
    ↓
Google OAuth Authentication
    ↓
Backend callback handling
    ↓
JWT token generation
    ↓
Secure cookie storage
    ↓
Frontend requests authenticated user
    ↓
Backend verifies token
    ↓
Protected resources accessible
```

---

# Tech Stack

## Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS

## Backend

- Node.js
- Express.js
- Passport.js
- JWT Authentication

## Database

- PostgreSQL

## Cloud & Deployment

- Vercel
- Render
- Neon PostgreSQL

## Infrastructure Concepts

- Docker-ready architecture
- Environment-based configuration
- Service separation
- Cross-service communication

---

# Docker & Containerization Concept

The project structure is designed to support containerized deployment architecture.

```txt id="e1jlwm"
Frontend Container
        ↓
Backend Container
        ↓
Database Container
```

Containerization helps in:

- Environment consistency
- Simplified deployment
- Team collaboration
- Infrastructure scalability
- CI/CD integration
- Service isolation

---

# Folder Structure

```txt id="f1jlwm"
task-manager-fullstack
│
├── frontend
│   ├── app
│   ├── components
│   ├── context
│   └── styles
│
├── backend
│   ├── config
│   ├── middleware
│   ├── routes
│   ├── database
│   └── server.js
│
├── docker-compose.yml
├── Dockerfile
│
└── README.md
```

---

# Environment Configuration

## Frontend Environment

```env id="g1jlwm"
NEXT_PUBLIC_API_URL=http://localhost:5000
```

---

## Backend Environment

```env id="h1jlwm"
DATABASE_URL=

JWT_SECRET=

GOOGLE_CLIENT_ID=

GOOGLE_CLIENT_SECRET=

FRONTEND_URL=
```

---

# API Architecture

## Authentication Routes

```txt id="i1jlwm"
GET    /auth/google
GET    /auth/google/callback
GET    /auth/me
POST   /auth/logout
```

---

## Task Routes

```txt id="j1jlwm"
GET      /tasks
POST     /tasks
PATCH    /tasks/:id
DELETE   /tasks/:id
```

---

# Security Practices

- HTTP-only cookies
- JWT verification middleware
- OAuth authentication
- Secure cross-origin communication
- Protected route handling
- Environment variable isolation

---

# Production Deployment

## Frontend Deployment

- Vercel

## Backend Deployment

- Render

## Database Hosting

- Neon PostgreSQL

---

# Key Engineering Concepts Demonstrated

- Full-stack system design
- Authentication lifecycle
- API architecture
- Middleware implementation
- State management
- Secure authentication handling
- Infrastructure separation
- Production debugging workflow
- Cloud deployment architecture

---

# Learning Outcomes

This project helped in understanding:

- Authentication system implementation
- OAuth integration
- JWT lifecycle
- Cookie-based authentication
- Frontend ↔ Backend communication
- Production debugging
- Cloud deployment architecture
- Infrastructure concepts
- Scalable project structure

---

# Local Development Setup

## Clone Repository

```bash id="k1jlwm"
git clone https://github.com/your-username/task-manager-fullstack.git
```

---

## Frontend Setup

```bash id="l1jlwm"
cd frontend

npm install

npm run dev
```

---

## Backend Setup

```bash id="m1jlwm"
cd backend

npm install

npm run dev
```

---

# Google OAuth Setup

Create OAuth credentials inside Google Cloud Console.

## Authorized Redirect URI

### Local Development

```txt id="n1jlwm"
http://localhost:5000/auth/google/callback
```

### Production

```txt id="o1jlwm"
https://task-manager-fullstack-1-xcu4.onrender.com/auth/google/callback
```

---

# Notes

Google OAuth may currently run in testing mode and require authorized test users.

---

# Author

Dilip Kumar
