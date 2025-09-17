import { Type } from "typebox";
import { StandardTagSchema } from "../common";
import { AttrAuthorizedSchema } from "../shared/attr/authorized";
import { AttrBiblSchema } from "../shared/attr/bibl";
import { AttrCommonSchema } from "../shared/attr/common";

/**
 * Indicates the number and character of the performing forces used in a musical composition.
 * @see https://music-encoding.org/guidelines/v5/elements/perfMedium.html
 */
export const PerfMediumSchema = Type.Intersect([
	StandardTagSchema,
	AttrCommonSchema,
	AttrAuthorizedSchema,
	AttrBiblSchema,
	Type.Object(
		{
			// rng:zeroOrMore - model.headLike
			/**
			 * Contains any heading, for example, the title of a section of text, or the heading of a list.
			 * @see https://music-encoding.org/guidelines/v5/elements/head.html
			 */
			head: Type.Optional(
				Type.Union([Type.Ref("head"), Type.Array(Type.Ref("head"))]),
			),
			// rng:optional - castList
			/**
			 * Contains a single cast list or dramatis personae.
			 * @see https://music-encoding.org/guidelines/v5/elements/castList.html
			 */
			castList: Type.Optional(Type.Ref("castList")),
			// rng:optional - perfResList
			/**
			 * Several instrumental or vocal resources treated as a group.
			 * @see https://music-encoding.org/guidelines/v5/elements/perfResList.html
			 */
			perfResList: Type.Optional(Type.Ref("perfResList")),
			// rng:zeroOrMore - model.annotLike
			/**
			 * Provides a statement explaining the text or indicating the basis for an assertion.
			 * @see https://music-encoding.org/guidelines/v5/elements/annot.html
			 */
			annot: Type.Optional(
				Type.Union([Type.Ref("annot"), Type.Array(Type.Ref("annot"))]),
			),
		},
		{ additionalProperties: false },
	),
]);
