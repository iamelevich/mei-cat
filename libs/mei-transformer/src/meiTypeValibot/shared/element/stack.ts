import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile";
import {
	AttrCommonSchema,
	AttrLangSchema,
	ModelTextPhraseLikeLimitedSchema,
} from "..";

/**
 * Base schema with attribute, to simplify types for StackSchema
 */
const StackBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLangSchema.entries,

	// Direct attributes
	/**
	 * Specifies how the stacked text components should be aligned.
	 */
	"@align": v.optional(v.string()),
	/**
	 * Indicates the delimiter used to mark the portions of text that are to be stacked.
	 */
	"@delim": v.optional(v.string()),
});

/**
 * An inline table with a single column.
 * @see https://music-encoding.org/guidelines/v5/elements/stack.html
 */
export const StackSchema = v.intersect([
	StackBaseSchema,
	ModelTextPhraseLikeLimitedSchema,
]);

export type StackData = v.InferOutput<typeof StackSchema>;
