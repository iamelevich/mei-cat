import * as v from "valibot";

/**
 * StandardTag represents either an object with optional #text or a string.
 */
export const StandardTagSchema = v.object({
	"#text": v.optional(v.string()),
});

export type StandardTagData = v.InferOutput<typeof StandardTagSchema>;

/**
 * AnythingObject is a record of string keys to any value.
 */
export const AnythingObjectSchema = v.record(v.string(), v.unknown());

export type AnythingObjectData = v.InferOutput<typeof AnythingObjectSchema>;

/**
 * NotImplementedTag is either a StandardTag & AnythingObject, or an array of such.
 */
export const NotImplementedTagSchema = v.union([
	v.union([AnythingObjectSchema, v.string()]),
	v.array(v.union([AnythingObjectSchema, v.string()])),
]);

export type NotImplementedTagData = v.InferOutput<
	typeof NotImplementedTagSchema
>;
