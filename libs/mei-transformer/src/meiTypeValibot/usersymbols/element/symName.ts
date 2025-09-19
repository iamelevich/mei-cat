import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrCommonSchema } from "../../shared";

/**
 * Base schema with attribute, to simplify types for SymNameSchema
 */
const SymNameBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
});

/**
 * Contains the name of a symbol, expressed following Unicode conventions.
 * @see https://music-encoding.org/guidelines/v5/elements/symName.html
 */
export const SymNameSchema = v.intersect([SymNameBaseSchema]);

export type SymNameData = v.InferOutput<typeof SymNameSchema>;
