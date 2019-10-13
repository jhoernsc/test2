FROM node:latest as build-stage-main
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY ./ .
RUN npm run build

FROM squidfunk/mkdocs-material as build-stage-eddocs
WORKDIR /ed-docs
COPY ./edition-docs /ed-docs
RUN mkdocs build --clean


FROM nginx as production-stage
RUN mkdir /app
COPY --from=build-stage-main /app/dist /app
RUN mkdir /edition-docs
COPY --from=build-stage-eddocs /ed-docs/site /edition-docs
COPY nginx.conf /etc/nginx/nginx.conf