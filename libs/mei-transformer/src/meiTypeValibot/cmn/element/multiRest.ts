import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrCommonSchema } from "../../shared";
import { AttrFacsimileSchema } from "../../facsimile";
import { AttrMultiRestAnlSchema } from "../../analytical";
import { AttrMultiRestGesSchema } from "../../gestural";
import { AttrMultiRestLogSchema } from "..";
import { AttrMultiRestVisSchema } from "../../visual";

/**
 * Base schema with attribute, to simplify types for MultiRestSchema
 */
const MultiRestBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrMultiRestAnlSchema.entries,
	...AttrMultiRestGesSchema.entries,
	...AttrMultiRestLogSchema.entries,
	...AttrMultiRestVisSchema.entries,
});

/**
 * Multiple full measure rests compressed into a single bar, frequently found in performer parts.
 * @see https://music-encoding.org/guidelines/v5/elements/multiRest.html
 */
export const MultiRestSchema = v.intersect([MultiRestBaseSchema]);

export type MultiRestData = v.InferOutput<typeof MultiRestSchema>;
