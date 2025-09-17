import { Type } from "typebox";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrFacsimileSchema } from "../shared/attr/facsimile";
import { AttrMediumSchema } from "../shared/attr/medium";
import { AttrEditSchema } from "./attr/edit";

/**
 * Marks the beginning of a passage written in a new hand, or of a change in the scribe, writing style, ink or character of the document hand.
 * @see https://music-encoding.org/guidelines/v5/elements/handShift.html
 */
export const HandShiftSchema = Type.Intersect([
	StandardTagSchema,
	AttrCommonSchema,
	AttrEditSchema,
	AttrFacsimileSchema,
	AttrMediumSchema,
	Type.Object(
		{
			/**
			 * Describes the character of the new hand.
			 * Value is plain text.
			 * @see https://music-encoding.org/guidelines/v5/elements/handShift.html#character
			 */
			"@character": Type.Optional(Type.String()),

			/**
			 * Identifies the new hand.
			 * The value must contain the ID of a hand element given elsewhere in the document.
			 * Value conforms to data.URI.
			 * @see https://music-encoding.org/guidelines/v5/elements/handShift.html#new
			 */
			"@new": Type.Optional(Type.String()),

			/**
			 * Identifies the old hand.
			 * The value must contain the ID of a hand element given elsewhere in the document.
			 * Value conforms to data.URI.
			 * @see https://music-encoding.org/guidelines/v5/elements/handShift.html#old
			 */
			"@old": Type.Optional(Type.String()),

			// Content model: empty
			// The handShift element may not have child elements according to MEI specification
		},
		{ additionalProperties: false },
	),
]);
