FROM docker.io/library/node:20 AS deps

WORKDIR /app

COPY package*.json ./

RUN npm install --frozen-lockfile


FROM docker.io/library/node:20 AS builder

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules

# Copy the rest of the application code
COPY . .

# Set environment variables for build
ENV NODE_ENV=production

# Run the Next.js build command
RUN npm run build


# --- Stage 3: Runner (Run the Next.js app in production) ---
# FROM docker.io/library/node:20 AS runner

# # Set the working directory
# WORKDIR /app

# # Set environment variables for production (optional, configure as needed)
# ENV NODE_ENV production

# # Copy only the necessary files from the builder stage
# COPY --from=builder /app/public ./public
# COPY --from=builder /app/.next ./.next
# COPY --from=builder /app/node_modules ./node_modules
# COPY --from=builder /app/package*.json ./

# # Expose the port Next.js runs on (default is 3000)
# EXPOSE 3000

# # Start the Next.js application in production mode
# CMD ["npm", "start"]

FROM ghcr.io/alwatr/nginx-ws:3.3.5 AS runner

COPY nginx/etc/nginx/ /etc/nginx/

COPY --from=builder /app/dist .

EXPOSE 80

