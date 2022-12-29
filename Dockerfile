# FIXME: this Dockerfile is not even close to OK or anything
FROM aoflow.azurecr.io/node:16-alpine

RUN apk add --no-cache bash
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY . .
RUN npm ci
RUN npm run build

RUN npm prune --production

EXPOSE 1880

CMD ["npm", "run", "start", "--", "-p", "1880"]