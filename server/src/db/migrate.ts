import { join } from "node:path";
import { migrate } from "drizzle-orm/bun-sql/migrator";
import { reset } from "drizzle-seed";
import config from "../../drizzle.config";
import { db } from "./index";
import * as schema from "./schema";

export async function migrateDB(resetDb: boolean = false) {
	// biome-ignore lint/style/noNonNullAssertion: Typing error, will be always defined
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
