import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const users = pgTable('users', {
    id: serial('id').primaryKey(),
    name: text('name'),
    phone: varchar('phone', { length: 256 }),
    email:text('email'),
    address:text("address")
  });