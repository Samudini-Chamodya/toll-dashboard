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

# Copy built app from build stage to nginx
COPY --from=build /app/build /usr/share/nginx/html

# Copy custom nginx configuration (optional)
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]