import { Type } from "typebox";
import { StandardTagSchema } from "../common";
import { AttrBiblSchema } from "../shared/attr/bibl";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrDataPointingSchema } from "../shared/attr/dataPointing";
import { AttrLangSchema } from "../shared/attr/lang";
import { AttrRegularMethodSchema } from "./attr/regularMethod";

/**
 * States how and under what circumstances corrections have been made in the text.
 * @see https://music-encoding.org/guidelines/v5/elements/correction.html
 */
export const CorrectionSchema = Type.Intersect([
	StandardTagSchema,
	AttrCommonSchema,
	AttrBiblSchema,
	AttrDataPointingSchema,
	AttrLangSchema,
	AttrRegularMethodSchema,
	Type.Object(
		{
			/**
			 * Indicates the degree of correction applied to the text.
			 * Allowed values are:
			 *   - `high` (The text has been thoroughly checked and proofread.),
			 *   - `medium` (The text has been checked at least once.),
			 *   - `low` (The text has not been checked.),
			 *   - `unknown` (The correction status of the text is unknown.)
			 * @see https://music-encoding.org/guidelines/v5/elements/correction.html#corrlevel
			 */
			"@corrlevel": Type.Optional(
				Type.Union([
					Type.Literal("high"),
					Type.Literal("medium"),
					Type.Literal("low"),
					Type.Literal("unknown"),
				]),
			),
			/**
			 * Contains any heading, for example, the title of a section of text, or the heading of a list.
			 * @see https://music-encoding.org/guidelines/v5/elements/head.html
			 */
			head: Type.Optional(
				Type.Union([Type.Ref("head"), Type.Array(Type.Ref("head"))]),
			),
			/**
			 * One or more text phrases that form a logical prose passage.
			 * @see https://music-encoding.org/guidelines/v5/elements/p.html
			 */
			p: Type.Union([Type.Ref("p"), Type.Array(Type.Ref("p"))]),
		},
		{ additionalProperties: false },
	),
]);
