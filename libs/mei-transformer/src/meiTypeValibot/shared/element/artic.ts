import * as v from "valibot";
import { AttrArticAnlSchema } from "../../analytical";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile";
import { AttrArticGesSchema } from "../../gestural";
import { AttrArticVisSchema } from "../../visual";
import { AttrArticLogSchema, AttrCommonSchema } from "..";

/**
 * Base schema with attribute, to simplify types for ArticSchema
 */
const ArticBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrArticAnlSchema.entries,
	...AttrArticGesSchema.entries,
	...AttrArticLogSchema.entries,
	...AttrArticVisSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
});

/**
 * An indication of how to play a note or chord.
 * @see https://music-encoding.org/guidelines/v5/elements/artic.html
 */
export const ArticSchema = v.intersect([ArticBaseSchema]);

export type ArticData = v.InferOutput<typeof ArticSchema>;
