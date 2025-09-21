FROM oven/bun:latest AS base
# Multi-stage Dockerfile for MEI Cat application
# Build stage using latest Bun image
FROM base AS builder

# Set working directory
WORKDIR /app

# Copy package files for dependency installation (optimize layer caching)
COPY package.json bun.lock bunfig.toml turbo.json ./
COPY client/package.json ./client/
COPY server/package.json ./server/
COPY libs/mei-schema-valibot/package.json ./libs/mei-schema-valibot/
COPY libs/mei-transformer/package.json ./libs/mei-transformer/

RUN bun install

# Copy source code and configuration files
COPY client/ ./client/
COPY server/ ./server/
COPY libs/ ./libs/
COPY tsconfig.json ./

# Build the application using turbo
RUN bun run build

# Production stage using scratch Linux image
FROM base AS production

# Copy the built application from builder stage
COPY --from=builder /app/dist/ /app/

# Set working directory
WORKDIR /app

USER bun
EXPOSE 3000/tcp
ENTRYPOINT [ "bun", "run", "index.js" ]
