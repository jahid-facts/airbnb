# Stage 1: Build React App
FROM node:18.12.0 as react-builder

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the app
RUN npm run build

# Stage 2: Serve the React App
FROM node:20.9.0 as app-server

# Set the working directory
WORKDIR /usr/src/app

# Install a lightweight web server (e.g., serve)
RUN npm install -g serve

# Copy the build output from the previous stage
COPY --from=react-builder /usr/src/app/build ./build

# Expose the port on which the app will run
EXPOSE 3009

# Start the application
CMD ["serve", "-s", "build"]
