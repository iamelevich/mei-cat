import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrFacsimileSchema } from "../facsimile";
import { AttrCommonSchema, AttrMediumSchema } from "../shared";
import { AttrEditSchema } from "./attr/edit";

/**
 * Marks the beginning of a passage written in a new hand, or of a change in the scribe, writing style, ink or character of the document hand.
 * @see https://music-encoding.org/guidelines/v5/elements/handShift.html
 */
export const HandShiftSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrEditSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrMediumSchema.entries,

	/**
	 * Describes the character of the new hand.
	 * @see https://music-encoding.org/guidelines/v5/elements/handShift.html#character
	 */
	"@character": v.optional(v.string()),

	/**
	 * Identifies the new hand. The value must contain the ID of a hand element given elsewhere in the document.
	 * @see https://music-encoding.org/guidelines/v5/elements/handShift.html#new
	 */
	"@new": v.optional(v.string()),

	/**
	 * Identifies the old hand. The value must contain the ID of a hand element given elsewhere in the document.
	 * @see https://music-encoding.org/guidelines/v5/elements/handShift.html#old
	 */
	"@old": v.optional(v.string()),
});

export type HandShiftData = v.InferOutput<typeof HandShiftSchema>;
