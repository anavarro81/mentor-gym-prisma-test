# Mentor Gym — Auth API (Prisma + Express + JWT)

API for login and registration using Prisma, Express, JWT and TypeScript.

## One-line description

API for login and registration with Prisma + Express + JWT (TypeScript).

## Stack

- Node.js
- TypeScript
- Express
- Prisma (Postgres / SQLite / MySQL — check `prisma/schema.prisma`)
- JWT (`jsonwebtoken`)
- Bcrypt (`bcrypt`)
- Nodemon (dev)

## Folder structure (high level)

- `src/`
  - `config/` - DB, CORS and environment-related helpers
  - `controllers/` - HTTP request handlers
  - `services/` - Business logic (auth, user management, etc.)
  - `routes/` - Express route declarations
  - `dtos/` - Request/response shapes and validations
  - `utils/` - JWT helpers, validators, and small utilities
  - `types/` - Shared TypeScript types
- `prisma/` - Prisma schema and migrations
- `generated/` - Generated Prisma client and runtime files
- `package.json`, `tsconfig.json` etc. at project root


## Environment variables (example)

Set these in a `.env` file or your environment:

- `DATABASE_URL` — Prisma connection string
- `JWT_SECRET` — secret used to sign tokens
- `BCRYPT_SALT_ROUNDS` — number of salt rounds for bcrypt (e.g. `10`)
- `PORT` — application port (default `3000`)

## How to start (local development)

Install dependencies (pnpm is recommended because workspace includes a pnpm lock):

```powershell
pnpm install
```

Generate Prisma client (if you change schema):

```powershell
npx prisma generate
```

Run database migrations (if needed):

```powershell
npx prisma migrate dev
```

Start the app in development:

```powershell
pnpm dev
# or with npm: npm run dev
```

Build and run production (compile TypeScript first):

```powershell
pnpm run build
node dist/index.js
```

## Points to review

Below are focused areas to inspect and improve. Use these as a checklist when auditing or preparing the app for production.

### 1) Code security


### 2) How could this be optimized?


### 3) How to start writing unit or integration tests?


### 4) How to document the API professionally


### 5) Share code changes and commits when you modify things


### 6) Future improvements (roadmap ideas)


