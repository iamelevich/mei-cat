import { Type } from "typebox";
import { StandardTagSchema } from "../common";
import { AttrBiblSchema } from "../shared/attr/bibl";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrInternetMediaSchema } from "../shared/attr/internetMedia";
import { AttrLangSchema } from "../shared/attr/lang";
import { AttrPointingSchema } from "../shared/attr/pointing";

/**
 * Opening words of a musical composition.
 * @see https://music-encoding.org/guidelines/v5/elements/incipText.html
 */
export const IncipTextSchema = Type.Intersect([
	StandardTagSchema,
	AttrCommonSchema,
	AttrBiblSchema,
	AttrLangSchema,
	AttrPointingSchema,
	AttrInternetMediaSchema,
	Type.Object(
		{
			// Zero or more model.headLike elements
			/**
			 * Contains any heading, for example, the title of a section of text, or the heading of a list.
			 * @see https://music-encoding.org/guidelines/v5/elements/head.html
			 */
			head: Type.Optional(
				Type.Union([Type.Ref("head"), Type.Array(Type.Ref("head"))]),
			),
			// Zero or more choice of model.pLike or model.lgLike elements
			/**
			 * One or more text phrases that form a logical prose passage.
			 * @see https://music-encoding.org/guidelines/v5/elements/p.html
			 */
			p: Type.Optional(Type.Union([Type.Ref("p"), Type.Array(Type.Ref("p"))])),
			/**
			 * May be used for any section of text that is organized as a group of lines; however, it is most often used for a group of verse lines functioning as a formal unit, e.g., a stanza, refrain, verse paragraph, etc.
			 * @see https://music-encoding.org/guidelines/v5/elements/lg.html
			 */
			lg: Type.Optional(
				Type.Union([Type.Ref("lg"), Type.Array(Type.Ref("lg"))]),
			),
		},
		{ additionalProperties: false },
	),
]);
