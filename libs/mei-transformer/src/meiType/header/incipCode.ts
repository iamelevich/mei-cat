import { Type } from "@sinclair/typebox";
import { StandardTagSchema } from "../common";
import { AttrBiblSchema } from "../shared/attr/bibl";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrInternetMediaSchema } from "../shared/attr/internetMedia";
import { AttrPointingSchema } from "../shared/attr/pointing";
import { AttrWhitespaceSchema } from "../shared/attr/whitespace";

/**
 * Incipit coded in a non-XML, plain text format, such as Plaine & Easie Code.
 * @see https://music-encoding.org/guidelines/v5/elements/incipCode.html
 */
export const IncipCodeSchema = Type.Intersect([
	StandardTagSchema,
	AttrCommonSchema,
	AttrBiblSchema,
	AttrInternetMediaSchema,
	AttrPointingSchema,
	AttrWhitespaceSchema,
	Type.Object(
		{
			/**
			 * Form of the encoded incipit.
			 * Suggested values are:
			 *   - `plaineAndEasie` (Plaine & Easie Code.)
			 *   - `humdrumKern` (**kern representation of the Humdrum format.)
			 *   - `parsons` (Parsons code.)
			 * @see https://music-encoding.org/guidelines/v5/elements/incipCode.html#form
			 */
			"@form": Type.Optional(
				Type.Union([
					Type.Literal("plaineAndEasie"),
					Type.Literal("humdrumKern"),
					Type.Literal("parsons"),
					Type.String(),
				]),
			),
		},
		{ additionalProperties: false },
	),
]);
