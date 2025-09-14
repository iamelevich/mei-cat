import { type Static, Type } from "@sinclair/typebox";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrFacsimileSchema } from "../shared/attr/facsimile";
import { AttrLangSchema } from "../shared/attr/lang";
import { AttrXySchema } from "../shared/attr/xy";
import { TdSchema } from "./td";
import { ThSchema } from "./th";

/**
 * A formatting element that contains one or more cells (intersection of a row and a column) in a table.
 * @see https://music-encoding.org/guidelines/v5/elements/tr.html
 */
export const TrSchema = Type.Intersect([
	StandardTagSchema,
	AttrCommonSchema,
	AttrFacsimileSchema,
	AttrLangSchema,
	AttrXySchema,
	Type.Object(
		{
			// Content model according to MEI spec:
			// Zero or more choice of td or th elements
			// <rng:zeroOrMore><rng:choice><rng:ref name="th"/><rng:ref name="td"/></rng:choice></rng:zeroOrMore>

			/**
			 * Table data cell.
			 * @see https://music-encoding.org/guidelines/v5/elements/td.html
			 */
			td: Type.Optional(Type.Union([TdSchema, Type.Array(TdSchema)])),

			/**
			 * Table header cell.
			 * @see https://music-encoding.org/guidelines/v5/elements/th.html
			 */
			th: Type.Optional(Type.Union([ThSchema, Type.Array(ThSchema)])),
		},
		{ additionalProperties: false },
	),
]);

export type Tr = Static<typeof TrSchema>;
