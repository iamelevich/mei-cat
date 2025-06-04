import path from "node:path";
import { type Static, type TObject, Type } from "@sinclair/typebox";
import { Value } from "@sinclair/typebox/value";

function parseEnv<T extends TObject>(
	schema: T,
	env: Record<string, string | undefined>,
): Static<T> {
	const cleaned = Object.fromEntries(
		Object.entries(env).filter(([key]) =>
			Object.keys(schema.properties).includes(key),
		),
	);
	const converted = Value.Convert(schema, Value.Default(schema, cleaned));
	const isValid = Value.Check(schema, converted);
	if (!isValid) {
		const errors = Value.Errors(schema, converted);
		throw new Error(
			`Invalid environment variables: ${[...errors]
				.map((e) => `${e.path}: ${e.message}`)
				.join(", ")}`,
		);
	}

	return converted;
}

function transformEnv(value: Static<typeof EnvDTO>) {
	if (value.STORAGE_PATH.startsWith("./")) {
		value.STORAGE_PATH = path.join(__dirname, "..", "..", value.STORAGE_PATH);
	}
	return value;
}

const EnvDTO = Type.Object({
	NODE_ENV: Type.Enum(
		{
			development: "development",
			production: "production",
			test: "test",
		},
		{ default: "development" },
	),
	PORT: Type.Number({ default: 3000 }),
	HOSTNAME: Type.String({ default: "localhost" }),
	DATABASE_URL: Type.String({
		default: "postgres://mei-cat:mypassword@localhost:5432/mei-cat",
	}),
	DATABASE_AUTH_TOKEN: Type.Optional(Type.String()),
	STORAGE_TYPE: Type.Enum(
		{
			local: "local",
			s3: "s3",
		},
		{ default: "local" },
	),
	STORAGE_PATH: Type.String({ default: "./storage" }),
	MEI_FILE_DOWNLOAD_TIMEOUT: Type.Number({ default: 5000 }),
});

export const isProd = process.env.NODE_ENV === "production";
export const env = transformEnv(parseEnv(EnvDTO, process.env));
