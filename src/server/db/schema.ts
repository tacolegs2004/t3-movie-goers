// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from "drizzle-orm";
import { index, pgTableCreator, timestamp, varchar } from "drizzle-orm/pg-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator((name) => `t3-movie-goers_${name}`);

export const commentSchema = createTable(
  "post",
  {
    name: varchar("name", { length: 256 }).notNull(),
    avatar: varchar("avatar", { length: 256 })
      .default(
        `https://avatars.dicebear.com/api/avataaars/identicon/?seed=${Math.random()}`,
      )
      .notNull(),
    body: varchar("body", { length: 1024 }).notNull(),
    key: varchar("key", { length: 256 }).notNull(),
    createdAt: timestamp("created_at", { withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updatedAt", { withTimezone: true }),
    userId: varchar("user_id", { length: 256 }).notNull(),
    movieId: varchar("movie_id", { length: 256 }).notNull(),
    commentId: varchar("comment_id", { length: 256 }).notNull(),
  },

  (example) => ({
    nameIndex: index("name_idx").on(example.name),
  }),
);
