# Use the slim Node.js image as a base image
FROM node:slim

# Set the working directory inside the container
WORKDIR /app

# Copy only package.json and package-lock.json to leverage Docker cache
COPY package*.json ./

# Install all dependencies (including dev dependencies for development)
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port on which your app runs
EXPOSE 3001

# Environment variables
ENV MONGO_URI=mongodb://localhost:27017/your-database
ENV PORT=3001

# Command to run your application
CMD ["npm", "start"]
