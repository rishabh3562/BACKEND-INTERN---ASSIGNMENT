# BACKEND-INTERN---ASSIGNMENT



# Player Score Management System

This is a modular player score management system built with Node.js and Express. The system exposes RESTful API endpoints for fetching and modifying player data. It uses in-memory storage for simplicity.

## Table of Contents

- [Setup Instructions](#setup-instructions)
  - [Local Setup](#local-setup)
  - [Docker Setup](#docker-setup-optional)
- [API Endpoints](#api-endpoints)
- [Example Requests](#example-requests)
- [Repository](#repository)

## Setup Instructions

### Local Setup

1. *Clone the repository:*

   bash
   git clone https://github.com/your-username/player-score-management.git
   cd player-score-management
   

2. *Install dependencies:*

   bash
   npm install
   

3. *Run the application:*

   bash
   npm start
   

   The API server will start on http://localhost:3000.

### Docker Setup (Optional)

1. *Build the Docker image:*

   bash
   docker build -t player-score-management .
   

2. *Run the Docker container:*

   bash
   docker run -p 3000:3000 player-score-management
   

## API Endpoints

- *GET /players*: Get all players' scores.
- *GET /players/:id*: Get a specific player's score.
- *POST /players*: Add a new player.
  - Request Body: { "name": "PlayerName", "score": 100 }
- *PUT /players/:id*: Update a player's score.
  - Request Body: { "score": 150 }
- *DELETE /players/:id*: Delete a player.

## Example Requests

Assuming the server is running locally on port 3000.

- Get all players: GET http://localhost:3000/players
- Get player with ID 1: GET http://localhost:3000/players/1
- Add a new player: POST http://localhost:3000/players
  - Body: { "name": "John", "score": 200 }
- Update player with ID 1: PUT http://localhost:3000/players/1
  - Body: { "score": 250 }
- Delete player with ID 1: DELETE http://localhost:3000/players/1

## Repository

The code is available in the GitHub repository: [player-score-management](https://github.com/your-username/player-score-management)

Feel free to adapt and extend this example based on your specific requirements!
