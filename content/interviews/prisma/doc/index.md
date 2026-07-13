---
title: Prisma 
---

## Prisma JS 

Prisma is a modern, next generation ORM for Node.js and TypeScript. It replaces traditional ORMs like Sequelize or TypeORM by focussing on type safety, readability, performance and developer experience.

- `Prisma Schema`: The single source of truth (schema.prisma) where you define your database connection, generators, and data models.

- `Prisma Client`: An auto-generated, type-safe query builder that matches your schema exactly, ensuring compile-time errors if a query is malformed.

- `Prisma Migrate`: A declarative data modeling and migration system that maps your Prisma schema to your database tables.

- `Prisma Studio`: A visual GUI built into the toolkit to view, search, and edit data in your database.

### Starting point of a Prisma project

```aiignore
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Connect to the database and query data
  const allUsers = await prisma.user.findMany();
  console.log(allUsers);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
```

### Difference between Prisma and Traditional ORMs

| Feature | Prisma | Traditional ORMs |
| --- | --- | --- |
| Type Safety | Fully auto-generated from the schema; guaranteed type-safety. | Often relies on manual classes/decorators; prone to drift. |
| Query Definition | Uses plain JavaScript/TypeScript objects. | Uses custom OOP instances, repositories, or raw string SQL. |
| Schema Management | Defined in a single declarative `.prisma` file. | Defined across multiple model files using classes. |
| Performance | Offloaded to a fast execution engine written in Rust. | Handled completely in the JavaScript/Node.js event loop. |
| Relationship Loading | Explicit via `include` or `select` (no lazy loading bugs). | Lazy loading supported, which often causes N+1 query issues. |
| Learning Curve | Very low; feels like writing natural objects. | Moderate to high; requires learning complex ORM syntax. |


