import { type Static, Type } from "@sinclair/typebox";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrFacsimileSchema } from "../shared/attr/facsimile";
import { AttrLangSchema } from "../shared/attr/lang";
import { AttrXySchema } from "../shared/attr/xy";
import { CaptionSchema } from "../shared/caption";
import { TrSchema } from "./tr";

/**
 * Contains text displayed in tabular form.
 * @see https://music-encoding.org/guidelines/v5/elements/table.html
 */
export const TableSchema = Type.Intersect([
	StandardTagSchema,
	AttrCommonSchema,
	AttrFacsimileSchema,
	AttrLangSchema,
	AttrXySchema,
	Type.Object(
		{
			// Content model according to MEI spec:
			// - Optional caption at beginning
			// - One or more tr elements
			// - Optional caption at end

			/**
			 * Caption (optional, at beginning).
			 * @see https://music-encoding.org/guidelines/v5/elements/caption.html
			 */
			caption: Type.Optional(
				Type.Union([CaptionSchema, Type.Array(CaptionSchema)]),
			),

			/**
			 * Table row (one or more required).
			 * @see https://music-encoding.org/guidelines/v5/elements/tr.html
			 */
			tr: Type.Optional(Type.Union([TrSchema, Type.Array(TrSchema)])),
		},
		{ additionalProperties: false },
	),
]);

export type Table = Static<typeof TableSchema>;
