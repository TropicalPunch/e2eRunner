# FIXME: this Dockerfile is not even close to OK or anything
FROM aoflow.azurecr.io/node:16-alpine

RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY . .
RUN npm ci
RUN npm run build

RUN npm prune --production

EXPOSE 3000

ENV PORT 3000

CMD ["npm", "run", "start"]