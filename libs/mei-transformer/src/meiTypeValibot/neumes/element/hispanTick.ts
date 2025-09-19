import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrCommonSchema } from "../../shared";
import { AttrFacsimileSchema } from "../../facsimile";
import { AttrHispanTickAnlSchema } from "../../analytical";
import { AttrHispanTickGesSchema } from "../../gestural";
import { AttrHispanTickLogSchema } from "..";
import { AttrHispanTickVisSchema } from "../../visual";

/**
 * Base schema with attribute, to simplify types for HispanTickSchema
 */
const HispanTickBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrHispanTickAnlSchema.entries,
	...AttrHispanTickGesSchema.entries,
	...AttrHispanTickLogSchema.entries,
	...AttrHispanTickVisSchema.entries,
});

/**
 * Hispanic tick.
 * @see https://music-encoding.org/guidelines/v5/elements/hispanTick.html
 */
export const HispanTickSchema = v.intersect([HispanTickBaseSchema]);

export type HispanTickData = v.InferOutput<typeof HispanTickSchema>;
