# Use official Node.js runtime as base image
FROM node:18-alpine as build

# Set working directory in container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all source code
COPY . .

# Build the React app for production
RUN npm run build

# Use nginx to serve the built app
FROM nginx:alpine

# Copy the build output to NGINX's web root
COPY build/ /usr/share/nginx/html

# Copy fixed nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]