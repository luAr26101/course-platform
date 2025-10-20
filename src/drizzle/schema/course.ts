import { createdAt, id, updatedAt } from "@/drizzle/schemaHelpers";
import { relations } from "drizzle-orm";
import { pgTable, text } from "drizzle-orm/pg-core";
import { CourseProductTable } from "./courseProduct";

export const CourseTable = pgTable("courses", {
  id,
  name: text().notNull(),
  description: text().notNull(),
  createdAt,
  updatedAt,
});

export const CourseRelationships = relations(CourseTable, ({ many }) => ({
  courseProducts: many(CourseProductTable),
}));

// Am ramas: https://youtu.be/OAyQ3Wyyzfg?si=9RmXLpvDewwnqs67&t=1373
