// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from "drizzle-orm";
import {
  date,
  decimal,
  index,
  integer,
  pgTableCreator,
  serial,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator((name) => `yrm_data_${name}`);

export const categories = createTable(
  "categories",
  {
    category_id: serial("category_id").primaryKey(),
    category: varchar("category", {length:256}).notNull()
  }
);

export const people = createTable(
  "people",
  {
    name_id: serial("name_id").primaryKey(),
    first_name: varchar("first_name", {length:256}).notNull(),
    last_name: varchar("last_name", {length:256}).notNull(),
    dob: date("dob"),
    rate: decimal("rate")
  }
);

export const roles = createTable(
  "roles",
  {
    role_id: serial("role_id").primaryKey(),
    role: varchar("role", {length:256}).notNull()
  }
);

export const activities = createTable(
  "activities",
  {
    activity_id: serial("activity_id").primaryKey(),
    activity: varchar("activity", {length:256}).notNull()
  }
);

export const dumps = createTable(
  "dump",
  {
    id: serial("id").primaryKey(),
    date: date("date"),
    name: varchar("name", {length:256}),
    category: varchar("category", {length:256}),
    notes: varchar("notes", {length:256}),
    hours: decimal("hours"),
    comments: varchar("comments", {length:256})
  }
);

export const records = createTable(
  "records",
  {
    record_id: serial("record_id").primaryKey(),
    date: date("date"),
    category_id: integer("category_id")
      .references(() => categories.category_id)
      .notNull(),
    name_id: integer("name_id")
      .references(() => people.name_id)
      .notNull(),
    role_id: integer("role_id")
      .references(() => roles.role_id)
      .notNull(),
    activity_id: integer("activity_id")
      .references(() => activities.activity_id)
      .notNull(),
    hours: decimal("hours"),
    money: decimal("money"),
    comments: varchar("comments", { length: 256 })
  },
  (example) => ({
    hoursIndex: index("hours_idx").on(example.hours),
  })
);
