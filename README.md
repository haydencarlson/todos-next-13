This is a simple todo app built using Next 13 app router.

## Getting Started

First configure your .env

```
DATABASE_URL="<FULL_POSTGRES_DATABASE_URL>"
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="<CLERK_API_KEY>"
CLERK_SECRET_KEY="<CLERK_SECRET_KEY>"
```

Next run migrations

```
npx prisma db push 
```

Now start your development server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

