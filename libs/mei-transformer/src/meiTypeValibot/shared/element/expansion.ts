import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrCommonSchema,
	AttrPlistSchema,
	AttrSourceSchema,
	AttrTargetEvalSchema,
} from "..";

/**
 * Base schema with attribute, to simplify types for ExpansionSchema
 */
const ExpansionBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrPlistSchema.entries,
	...AttrSourceSchema.entries,
	...AttrTargetEvalSchema.entries,
});

/**
 * Indicates how a section may be programmatically expanded into its 'through-composed' form.
 * @see https://music-encoding.org/guidelines/v5/elements/expansion.html
 */
export const ExpansionSchema = v.intersect([ExpansionBaseSchema]);

export type ExpansionData = v.InferOutput<typeof ExpansionSchema>;
