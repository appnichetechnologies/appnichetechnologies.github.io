# Stage 1
FROM node:22 as build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# Stage 2 
FROM node:22-alpine
WORKDIR /app
COPY --from=build /app ./
EXPOSE 3000
CMD ["npm", "run", "dev"]

