import { type Static, Type } from "@sinclair/typebox";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";
import { HeadSchema } from "../shared/head";
import { SourceSchema } from "../shared/source";

/**
 * A container for the descriptions of the source(s) used in the creation of the electronic file.
 * @see https://music-encoding.org/guidelines/v5/elements/sourceDesc.html
 */
export const SourceDescSchema = Type.Intersect([
	StandardTagSchema,
	AttrCommonSchema,
	Type.Object(
		{
			/**
			 * Contains any heading, for example, the title of a section of text, or the heading of a list.
			 * @see https://music-encoding.org/guidelines/v5/elements/head.html
			 */
			head: Type.Optional(Type.Union([HeadSchema, Type.Array(HeadSchema)])),
			/**
			 * A bibliographic description of a source used in the creation of the electronic file.
			 * @see https://music-encoding.org/guidelines/v5/elements/source.html
			 */
			source: Type.Union([SourceSchema, Type.Array(SourceSchema)]),
		},
		{ additionalProperties: false },
	),
]);

export type SourceDesc = Static<typeof SourceDescSchema>;
