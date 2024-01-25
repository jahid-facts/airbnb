# # Stage 1: Build React App
# FROM node:18.12.0 as react-builder

# # Set the working directory
# WORKDIR /usr/src/app

# # Copy package.json and package-lock.json to the working directory
# COPY package*.json ./

# # Install app dependencies
# RUN npm install

# # Copy the rest of the application code
# COPY . .

# # Copy the .env file
# COPY .env ./.env

# # Install dotenv
# RUN npm install dotenv

# # Build the app
# RUN npm run build

# # Stage 2: Serve the React App
# FROM node:18.12.0 as app-server

# # Set the working directory
# WORKDIR /usr/src/app

# # Install a lightweight web server (e.g., serve)
# RUN npm install -g serve

# # Copy the build output from the previous stage
# COPY --from=react-builder /usr/src/app/build ./build

# # Expose the port on which the app will run
# EXPOSE 3009

# # Start the application
# CMD ["serve", "-s", "build"]




# # Stage 1: Build React App
# FROM node:18.12.0 as react-builder

# # Set the working directory
# WORKDIR /usr/src/app

# # Copy package.json and package-lock.json to the working directory
# COPY package*.json ./

# # Install the 'dotenv' tool
# RUN npm install -g dotenv-cli

# # Copy the .env file
# COPY .env ./.env

# # Set environment variables from .env file
# ARG REACT_APP_BASE_URL
# ENV REACT_APP_BASE_URL=${REACT_APP_BASE_URL}

# ARG REACT_APP_AI_URL
# ENV REACT_APP_AI_URL=${REACT_APP_AI_URL}

# # Install app dependencies
# RUN npm install

# # Copy the rest of the application code
# COPY . .

# # Build the app
# RUN dotenv -e .env REACT_APP_BASE_URL=${REACT_APP_BASE_URL} REACT_APP_AI_URL=${REACT_APP_AI_URL} npm run build

# # Stage 2: Serve the React App
# FROM node:18.12.0 as app-server

# # Set the working directory
# WORKDIR /usr/src/app

# # Install a lightweight web server (e.g., serve)
# RUN npm install -g serve

# # Copy the build output from the previous stage
# COPY --from=react-builder /usr/src/app/build ./build

# # Expose the port on which the app will run
# EXPOSE 3009

# # Set the environment variable for the app (if needed)
# ENV REACT_APP_BASE_URL=${REACT_APP_BASE_URL}
# ENV REACT_APP_AI_URL=${REACT_APP_AI_URL}

# # Start the application
# CMD ["serve", "-s", "build"]




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
FROM node:18.12.0 as app-server

# Set the working directory
WORKDIR /usr/src/app

# Install a lightweight web server (e.g., serve)
RUN npm install -g serve

# Copy the build output from the previous stage
COPY --from=react-builder /usr/src/app/build ./build

# Expose the port on which the app will run
EXPOSE 80

# Start the application
CMD ["serve", "-s", "build"]
