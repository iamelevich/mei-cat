import * as v from "valibot";
import { AttrHispanTickAnlSchema } from "../../analytical";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile";
import { AttrHispanTickGesSchema } from "../../gestural";
import { AttrCommonSchema } from "../../shared";
import { AttrHispanTickVisSchema } from "../../visual";
import { AttrHispanTickLogSchema } from "..";

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
