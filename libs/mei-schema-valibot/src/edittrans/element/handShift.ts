import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrMediumSchema } from "../../shared/attr/medium";
import { AttrEditSchema } from "../attr/edit";

/**
 * Base schema with attribute, to simplify types for HandShiftSchema
 */
const HandShiftBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrEditSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrMediumSchema.entries,

	// Direct attributes
	/**
	 * Describes the character of the new hand.
	 */
	"@character": v.optional(v.string()),
	/**
	 * Identifies the new hand. The value must contain the ID of a hand element given elsewhere in the document.
	 */
	"@new": v.optional(v.string()),
	/**
	 * Identifies the old hand. The value must contain the ID of a hand element given elsewhere in the document.
	 */
	"@old": v.optional(v.string()),
});

/**
 * Marks the beginning of a passage written in a new hand, or of a change in the scribe, writing style, ink or character of the document hand.
 * @see https://music-encoding.org/guidelines/v5/elements/handShift.html
 */
export const HandShiftSchema = v.lazy(() => v.intersect([HandShiftBaseSchema]));

export type HandShiftData = v.InferOutput<typeof HandShiftSchema>;
