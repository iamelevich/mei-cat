import { type Static, Type } from "@sinclair/typebox";
import { StandardTagSchema } from "../common";
import { AttrBiblSchema } from "../shared/attr/bibl";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrDataPointingSchema } from "../shared/attr/dataPointing";
import { AttrLangSchema } from "../shared/attr/lang";
import { HeadSchema } from "../shared/head";
import { PSchema } from "../shared/p";

/**
 * Specifies the format used when standardized date or number values are supplied.
 * @see https://music-encoding.org/guidelines/v5/elements/stdVals.html
 */
export const StdValsSchema = Type.Intersect([
	StandardTagSchema,
	AttrCommonSchema,
	AttrBiblSchema,
	AttrDataPointingSchema,
	AttrLangSchema,
	Type.Object(
		{
			/**
			 * Contains any heading, for example, the title of a section of text, or the heading of a list.
			 * @see https://music-encoding.org/guidelines/v5/elements/head.html
			 */
			head: Type.Optional(Type.Union([HeadSchema, Type.Array(HeadSchema)])),
			/**
			 * One or more text phrases that form a logical prose passage.
			 * @see https://music-encoding.org/guidelines/v5/elements/p.html
			 */
			p: Type.Union([PSchema, Type.Array(PSchema)]),
		},
		{ additionalProperties: false },
	),
]);

export type StdVals = Static<typeof StdValsSchema>;
