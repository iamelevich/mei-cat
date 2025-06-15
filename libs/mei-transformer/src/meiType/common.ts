import { Type } from "@sinclair/typebox";
import type { Static } from "@sinclair/typebox";

/**
 * StandardTag represents either an object with optional #text or a string.
 */
export const StandardTagSchema = Type.Object(
	{
		"#text": Type.Optional(Type.String()),
	},
	{ additionalProperties: false },
);

export type StandardTag = Static<typeof StandardTagSchema>;

/**
 * AnythingObject is a record of string keys to any value.
 */
export const AnythingObjectSchema = Type.Record(Type.String(), Type.Any());

export type AnythingObject = Static<typeof AnythingObjectSchema>;

/**
 * NotImplementedTag is either a StandardTag & AnythingObject, or an array of such.
 */
export const NotImplementedTagSchema = Type.Union([
	Type.Union([AnythingObjectSchema, Type.String()]),
	Type.Array(Type.Union([AnythingObjectSchema, Type.String()])),
]);

export type NotImplementedTag = Static<typeof NotImplementedTagSchema>;
