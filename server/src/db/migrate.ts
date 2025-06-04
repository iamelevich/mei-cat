import { migrate } from "drizzle-orm/bun-sql/migrator";

import config from "../../drizzle.config";
import { db } from "./index";
import * as schema from "./schema";

import { join } from "node:path";
import { reset } from "drizzle-seed";
import { env } from "../env";

export async function migrateDB(resetDb: boolean = false) {
	const migrationsFolder = join(__dirname, "..", "..", config.out!);
	console.log(`Migrating database from ${migrationsFolder}`);
	await migrate(db, { migrationsFolder });
	console.log("Migration successful");

	if (resetDb) {
		console.log(`Resetting database`);
		await reset(db, schema);
		console.log("Database reset successful");
	}
}
