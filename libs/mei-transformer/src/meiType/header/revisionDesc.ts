import { Type } from "typebox";
import { StandardTagSchema } from "../common";
import { AttrBiblSchema } from "../shared/attr/bibl";
import { AttrCommonSchema } from "../shared/attr/common";

/**
 * Container for information about alterations that have been made to an MEI file.
 * @see https://music-encoding.org/guidelines/v5/elements/revisionDesc.html
 */
export const RevisionDescSchema = Type.Intersect([
	StandardTagSchema,
	AttrCommonSchema,
	AttrBiblSchema,
	Type.Object(
		{
			/**
			 * Contains any heading, for example, the title of a section of text, or the heading of a list.
			 * @see https://music-encoding.org/guidelines/v5/elements/head.html
			 */
			head: Type.Optional(
				Type.Union([Type.Ref("head"), Type.Array(Type.Ref("head"))]),
			),
			/**
			 * Individual change within the revision description.
			 * @see https://music-encoding.org/guidelines/v5/elements/change.html
			 */
			change: Type.Union([Type.Ref("change"), Type.Array(Type.Ref("change"))]),
		},
		{ additionalProperties: false },
	),
]);
