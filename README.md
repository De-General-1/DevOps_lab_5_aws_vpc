# Simple Web App

## Overview

This project is a simple web application designed to demonstrate the integration of Node.js with MongoDB, packaged and deployed using Docker. The application is built with scalability and cloud deployment in mind and will be hosted on AWS.

---

## Features

- **Backend**: Node.js with Express for server-side functionality.
- **Database**: MongoDB for data storage.
- **Containerization**: Dockerized setup for consistent environment across development and production.
- **Deployment**: Hosted on AWS using best practices for cloud deployment.

---

## Prerequisites

Before running the project locally or deploying it, ensure the following tools are installed:

- [Node.js](https://nodejs.org/) (v18.0.0 or higher)
- [Docker](https://www.docker.com/)
- [AWS CLI](https://aws.amazon.com/cli/)
- [Git](https://git-scm.com/)

---

## Installation and Usage

### Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/simple-webapp.git
   cd simple-webapp
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the application:
   ```bash
   npm start
   ```

The server will run on `http://localhost:3000`.

### Docker Setup

1. Build and run the Docker containers:
   ```bash
   docker-compose up --build
   ```
2. Access the application on `http://localhost:3000`.

---

## Deployment on AWS

### Steps for Deployment

1. **Push Code to GitHub**:
   Ensure your changes are committed and pushed to the GitHub repository.

   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Set Up AWS Environment**:

   - Create an EC2 instance with the latest Ubuntu AMI.
   - Open necessary ports (e.g., 3000 for the app, 22 for SSH).

3. **Install Docker on EC2**:
   SSH into the instance and run the following commands:

   ```bash
   sudo apt update
   sudo apt install -y docker.io
   sudo apt install -y docker-compose
   ```

4. **Clone Repository on EC2**:

   ```bash
   git clone https://github.com/yourusername/simple-webapp.git
   cd simple-webapp
   ```

5. **Start Application on EC2**:

   ```bash
   docker-compose up --build -d
   ```

6. **Verify Deployment**:
   Access the application via the EC2 instance's public IP address, e.g., `http://<ec2-public-ip>:3000`.

## Author

- **GitHub**: [De-General-1](https://github.com/De-General-1)
