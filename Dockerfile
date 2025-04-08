FROM node:14-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

# Ensure the dist directory is created before this step
COPY . .

# If dist is generated, ensure to run the build command before this COPY
# RUN npm run build


CMD ["npm", "run", "start:dev"]