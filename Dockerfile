# Stage 1: Build React App
FROM node:20.9.0 as react-builder

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port on which the app will run
EXPOSE 3009

# Start the application
CMD ["npm", "start"]
