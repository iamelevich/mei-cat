import { type Static, Type } from "@sinclair/typebox";
import { StandardTagSchema } from "../common";
import { AttrBiblSchema } from "../shared/attr/bibl";
import { AttrCommonSchema } from "../shared/attr/common";
import { LbSchema } from "../shared/lb";
import { RendSchema } from "../shared/rend";
import { StackSchema } from "../shared/stack";

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
			 * An empty formatting element that forces text to begin on a new line.
			 * @see https://music-encoding.org/guidelines/v5/elements/lb.html
			 */
			lb: Type.Optional(Type.Union([LbSchema, Type.Array(LbSchema)])),
			/**
			 * A formatting element indicating special visual rendering, e.g., bold or italicized, of a text word or phrase.
			 * @see https://music-encoding.org/guidelines/v5/elements/rend.html
			 */
			rend: Type.Optional(Type.Union([RendSchema, Type.Array(RendSchema)])),
			/**
			 * An inline table with a single column.
			 * @see https://music-encoding.org/guidelines/v5/elements/stack.html
			 */
			stack: Type.Optional(Type.Union([StackSchema, Type.Array(StackSchema)])),
		},
		{ additionalProperties: false },
	),
]);

export type AltId = Static<typeof AltIdSchema>;
