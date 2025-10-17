FROM node:alpine3.18 as build

# Declare build time environment variables
ARG VITE_API_BASE_SERVER_URL
ARG VITE_REACT_APP_NODE_ENV

# Set default values for environment variables
ENV VITE_API_BASE_SERVER_URL=$VITE_API_BASE_SERVER_URL
ENV VITE_REACT_APP_NODE_ENV=$VITE_REACT_APP_NODE_ENV


# Build App
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

# Serve with Nginx
FROM nginx:1.23-alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf *
COPY --from=build /app/build .
EXPOSE 80
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]