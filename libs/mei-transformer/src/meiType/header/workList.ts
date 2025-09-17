import { Type } from "@sinclair/typebox";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";

/**
 * Grouping mechanism for information describing non-bibliographic aspects of a text.
 * @see https://music-encoding.org/guidelines/v5/elements/workList.html
 */
export const WorkListSchema = Type.Intersect([
	StandardTagSchema,
	AttrCommonSchema,
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
			 * Provides a detailed description of a work — a distinct intellectual or artistic creation — specifically its history, language use, and high-level musical attributes (e.g., key, tempo, meter, medium of performance, and intended duration).
			 * @see https://music-encoding.org/guidelines/v5/elements/work.html
			 */
			work: Type.Union([Type.Ref("work"), Type.Array(Type.Ref("work"))]),
		},
		{ additionalProperties: false },
	),
]);
