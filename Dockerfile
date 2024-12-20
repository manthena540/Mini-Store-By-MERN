# Base image
FROM node:22-alpine

# Set working directory
WORKDIR /usr/src/app

# Copy and install backend dependencies
COPY package*.json ./
RUN npm install --silent

# Copy backend source code
COPY backend ./backend

# Copy the .env file
COPY .env ./

# Build the frontend
WORKDIR /usr/src/app/frontend
COPY frontend/package*.json ./
RUN npm install --silent
COPY frontend ./
RUN npm run build

# Move back to the root directory
WORKDIR /usr/src/app

# Expose the backend port
EXPOSE 5000

# Set the user
#RUN chown -R node /usr/src/app
#USER node

# Start the backend
CMD ["npm", "start"]