import { type Static, Type } from "@sinclair/typebox";
import { StandardTagSchema } from "../common";
import { AttrBiblSchema } from "../shared/attr/bibl";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrDataPointingSchema } from "../shared/attr/dataPointing";
import { AttrLangSchema } from "../shared/attr/lang";
import { AttrRegularMethodSchema } from "../shared/attr/regularMethod";
import { HeadSchema } from "../shared/head";
import { PSchema } from "../shared/p";

/**
 * Indicates the extent of normalization or regularization of the original source carried out in converting it to electronic form.
 * @see https://music-encoding.org/guidelines/v5/elements/normalization.html
 */
export const NormalizationSchema = Type.Intersect([
	StandardTagSchema,
	AttrCommonSchema,
	AttrBiblSchema,
	AttrDataPointingSchema,
	AttrLangSchema,
	AttrRegularMethodSchema,
	Type.Object(
		{
			// Zero or more model.headLike elements
			/**
			 * Contains any heading, for example, the title of a section of text, or the heading of a list.
			 * @see https://music-encoding.org/guidelines/v5/elements/head.html
			 */
			head: Type.Optional(Type.Union([HeadSchema, Type.Array(HeadSchema)])),
			// One or more model.pLike elements
			/**
			 * One or more text phrases that form a logical prose passage.
			 * @see https://music-encoding.org/guidelines/v5/elements/p.html
			 */
			p: Type.Union([PSchema, Type.Array(PSchema)]), // Required, not optional
		},
		{ additionalProperties: false },
	),
]);

export type Normalization = Static<typeof NormalizationSchema>;
