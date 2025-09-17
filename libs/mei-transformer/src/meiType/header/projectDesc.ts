import { Type } from "@sinclair/typebox";
import { StandardTagSchema } from "../common";
import { AttrBiblSchema } from "../shared/attr/bibl";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrDataPointingSchema } from "../shared/attr/dataPointing";
import { AttrLangSchema } from "../shared/attr/lang";

/**
 * Project-level meta-data describing the aim or purpose for which the electronic file was encoded, funding agencies, etc. together with any other relevant information concerning the process by which it was assembled or collected.
 * @see https://music-encoding.org/guidelines/v5/elements/projectDesc.html
 */
export const ProjectDescSchema = Type.Intersect([
	StandardTagSchema,
	AttrCommonSchema,
	AttrBiblSchema,
	AttrDataPointingSchema,
	AttrLangSchema,
	Type.Object(
		{
			// Zero or more model.headLike
			/**
			 * Contains any heading, for example, the title of a section of text, or the heading of a list.
			 * @see https://music-encoding.org/guidelines/v5/elements/head.html
			 */
			head: Type.Optional(
				Type.Union([Type.Ref("head"), Type.Array(Type.Ref("head"))]),
			),
			// One or more model.pLike
			/**
			 * One or more text phrases that form a logical prose passage.
			 * @see https://music-encoding.org/guidelines/v5/elements/p.html
			 */
			p: Type.Union([Type.Ref("p"), Type.Array(Type.Ref("p"))]),
		},
		{ additionalProperties: false },
	),
]);
