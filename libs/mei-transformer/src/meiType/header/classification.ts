import { type Static, Type } from "@sinclair/typebox";
import { StandardTagSchema } from "../common";
import { AttrBiblSchema } from "../shared/attr/bibl";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrDataPointingSchema } from "../shared/attr/dataPointing";
import { HeadSchema } from "../shared/head";
import { TermListSchema } from "../shared/termList";

/**
 * Groups information which describes the nature or topic of an entity.
 * @see https://music-encoding.org/guidelines/v5/elements/classification.html
 */
export const ClassificationSchema = Type.Intersect([
	StandardTagSchema,
	AttrCommonSchema,
	AttrBiblSchema,
	AttrDataPointingSchema,
	Type.Object(
		{
			// rng:zeroOrMore - model.headLike
			/**
			 * Contains any heading, for example, the title of a section of text, or the heading of a list.
			 * @see https://music-encoding.org/guidelines/v5/elements/head.html
			 */
			head: Type.Optional(Type.Union([HeadSchema, Type.Array(HeadSchema)])),
			// rng:oneOrMore - termList
			/**
			 * Collection of text phrases which describe a resource.
			 * @see https://music-encoding.org/guidelines/v5/elements/termList.html
			 */
			termList: Type.Union([TermListSchema, Type.Array(TermListSchema)]),
		},
		{ additionalProperties: false },
	),
]);

export type Classification = Static<typeof ClassificationSchema>;
