import { migrateDB } from "../src/db/migrate";

migrateDB()
	.then(() => {
		console.log("Migration successful");
		process.exit(0);
	})
	.catch((err) => {
		console.error(err);
		process.exit(1);
	});
