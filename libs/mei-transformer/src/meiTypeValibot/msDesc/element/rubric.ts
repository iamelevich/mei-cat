import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrBiblSchema,
	AttrCommonSchema,
	AttrLangSchema,
	MacroStrucUnstrucContentSchema,
} from "../../shared";
import { AttrFacsimileSchema } from "../../facsimile";

/**
 * Base schema with attribute, to simplify types for RubricSchema
 */
const RubricBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLangSchema.entries,

	// Direct attributes
	/**
	 * Signals beginning of a text division.
	 */
	"@func": v.optional(v.string()),
});

/**
 * Contains a string of words through which a manuscript signals the beginning or end of a text division, often with an assertion as to its author and title, which is in some way set off from the text itself, usually in red ink, or by use of different size or type of script, or some other such visual device.
 * @see https://music-encoding.org/guidelines/v5/elements/rubric.html
 */
export const RubricSchema = v.intersect([
	RubricBaseSchema,
	MacroStrucUnstrucContentSchema,
]);

export type RubricData = v.InferOutput<typeof RubricSchema>;
