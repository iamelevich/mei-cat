import { rimraf } from "rimraf";
import { migrateDB } from "../src/db/migrate";
import { env } from "../src/env";

// Migrate and reset the database before all tests
await migrateDB(true);

// Clean up storage before all tests
console.log(`Cleaning storage ${env.STORAGE_PATH}`);
await rimraf(env.STORAGE_PATH);
