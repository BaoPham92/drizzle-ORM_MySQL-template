import { relations } from "drizzle-orm";
import { mysqlTable, int, varchar, timestamp } from "drizzle-orm/mysql-core";
import { user } from "./user";

export const comment = mysqlTable("comment", {
  id: int("id").primaryKey(),
  reviewId: int("reviewId"),
  content: varchar("content", { length: 5000 }).notNull(),
  userId: int("userId").notNull(),
  createdAt: timestamp("created_at"),
  updatedAt: timestamp("updated_at"),
});

export const commentRelations = relations(comment, ({ one }) => ({
  author: one(user, {
    fields: [comment.userId],
    references: [user.id],
  }),
}));
