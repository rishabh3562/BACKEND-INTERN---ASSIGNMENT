# Player Score Management System

This is a modular player score management system built with Node.js and Express. The system exposes RESTful API endpoints for fetching and modifying player data. It uses in-memory storage for simplicity.

## Setup Instructions 
### Docker Setup  

1. **Pull the Docker image:**

   ```bash
   docker pull dubeyrishabh108/backend:v1
   ```

2. **Run the Docker container:**

   ```bash
   docker run -p 3001:3001 -e MONGO_URI="Your-database-string" -e PORT=3001 -d --name server dubeyrishabh108/backend:v1
   ```
here change the "Your-database-string " to a MongoDB Atlas Connection string a sample connection string is give below\
 ```bash
  docker run -p 3001:3001 -e MONGO_URI="mongodb+srv://Test:Test01@cluster0.pr63z8v.mongodb.net/assignment?retryWrites=true&w=majority" -e PORT=3001 -d --name server dubeyrishabh108/backend:v1
   ```

3.**Stop the container:**
```bash
docker container stop
``` 

### Local Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/player-score-management.git](https://github.com/rishabh3562/BACKEND-INTERN---ASSIGNMENT.git
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the application:**

   ```bash
   nodemon index.js
   ```
   OR
   ```bash
   npm run start
   ```

   The API server will start on http://localhost:3001.
   

   ## Endpoint Descriptions
 
- **POST /players**
   - **URL:** `http://localhost:3001/players`
   - **Description:** Creates a new entry for a player. Use this endpoint to add a player with a specified name, country, and initial score.

- **PUT /players/:id**
   - **URL:** `http://localhost:3001/players/:id`
   - **Description:** Updates the player attributes. Only the player's name and score can be updated using this endpoint. Provide the player's ID in the URL.

- **DELETE /players/:id**
   - **URL:** `http://localhost:3001/players/:id`
   - **Description:** Deletes the player entry. Use this endpoint to remove a player from the system by specifying their ID in the URL.

- **GET /players**
   - **URL:** `http://localhost:3001/players`
   - **Description:** Displays the list of all players in descending order based on their scores. Use this endpoint to retrieve a comprehensive list of players.

- **GET /players/rank/:val**
   - **URL:** `http://localhost:3001/players/rank/:val`
   - **Description:** Fetches the player ranked at the specified position. Provide the rank value in the URL to get details about the player at that rank.

- **GET /players/random**
   - **URL:** `http://localhost:3001/players/random`
   - **Description:** Fetches details about a random player. Use this endpoint when you need information about a player chosen at random from the system.

