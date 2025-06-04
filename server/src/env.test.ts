import { describe, expect, it } from "bun:test";
import { env } from "./env";

describe("env", () => {
	it("should be defined", () => {
		expect(env).toBeDefined();
	});

	it("should use test environment variables", () => {
		expect(env.NODE_ENV).toBe("test");
		expect(env.DATABASE_URL).toBe(
			"postgres://mei-cat:mypassword@localhost:5432/mei-cat-test",
		);
	});
});
