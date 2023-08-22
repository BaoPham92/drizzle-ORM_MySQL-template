import {
  mysqlTable,
  int,
  text,
  varchar,
  timestamp,
} from "drizzle-orm/mysql-core";
import { relations } from "drizzle-orm";
import { comment } from "./comment";

// ? SCHEMA TO PERSIST EVEN IF USING AUTH PROVIDER SUCH AS CLERK
export const user = mysqlTable("user", {
  id: int("id").primaryKey(),
  account_type: text("account_type").notNull(),
  avatar_url: text("avatar_url"),
  bio: text("bio"),
  email: text("email").notNull(),
  first_name: text("first_name"),
  last_name: text("last_name"),
  phone: varchar("phone", { length: 25 }),
  qr: text("qr").notNull(),
  salt: text("salt"),
  status: text("status").notNull(),
  subscription: text("subscription"),
  subscriptionChange: text("subscriptionChange"),
  username: text("username").notNull(),
  createdAt: timestamp("created_at"),
  updatedAt: timestamp("updated_at"),
});

export const usersRelations = relations(user, ({ many }) => ({
    comments: many(comment),
  }));
