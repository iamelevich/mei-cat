import { Type } from "typebox";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrFacsimileSchema } from "../shared/attr/facsimile";
import { AttrLangSchema } from "../shared/attr/lang";

/**
 * Contains one or more alternative encodings for the same point in a text.
 * @see https://music-encoding.org/guidelines/v5/elements/app.html
 */
export const AppSchema = Type.Intersect([
	StandardTagSchema,
	AttrCommonSchema,
	AttrFacsimileSchema,
	AttrLangSchema,
	Type.Object(
		{
			// Content model according to MEI spec:
			// rng:zeroOrMore - model.lemLike
			// rng:zeroOrMore - model.rdgLike
			// Note: The content model allows for multiple lemmas and readings

			/**
			 * Contains the lemma, or base text, of a textual variation.
			 * @see https://music-encoding.org/guidelines/v5/elements/lem.html
			 */
			lem: Type.Optional(
				Type.Union([Type.Ref("lem"), Type.Array(Type.Ref("lem"))]),
			),

			/**
			 * Contains a single reading within a textual variation.
			 * @see https://music-encoding.org/guidelines/v5/elements/rdg.html
			 */
			rdg: Type.Optional(
				Type.Union([Type.Ref("rdg"), Type.Array(Type.Ref("rdg"))]),
			),
		},
		{ additionalProperties: false },
	),
]);
