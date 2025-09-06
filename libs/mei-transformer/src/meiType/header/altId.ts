import { type Static, Type } from "@sinclair/typebox";
import { NotImplementedTagSchema, StandardTagSchema } from "../common";
import { AttrBiblSchema } from "../shared/attr/bibl";
import { AttrCommonSchema } from "../shared/attr/common";

/**
 * May contain a bibliographic identifier that does not fit within the meiHead element's id attribute,
 * for example because the identifier does not fit the definition of an XML id or because multiple identifiers are needed.
 * @see https://music-encoding.org/guidelines/v5/elements/altId.html
 */
export const AltIdSchema = Type.Intersect([
	StandardTagSchema,
	AttrCommonSchema,
	AttrBiblSchema,
	Type.Object(
		{
			/**
			 * Contains a line beginning.
			 * @see https://music-encoding.org/guidelines/v5/elements/lb.html
			 */
			lb: Type.Optional(NotImplementedTagSchema),
			/**
			 * Contains a render element.
			 * @see https://music-encoding.org/guidelines/v5/elements/rend.html
			 */
			rend: Type.Optional(NotImplementedTagSchema),
			/**
			 * Contains stacked text.
			 * @see https://music-encoding.org/guidelines/v5/elements/stack.html
			 */
			stack: Type.Optional(NotImplementedTagSchema),
		},
		{ additionalProperties: false },
	),
]);

export type AltId = Static<typeof AltIdSchema>;
