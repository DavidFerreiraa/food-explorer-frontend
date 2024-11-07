# Dockerfile

# Use the official Node.js image as the base
FROM node:latest

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app code
COPY . .

# Expose port 3000
EXPOSE 5174

# Run npm run dev by default
CMD ["npm", "run", "dev", "--", "--host"]
