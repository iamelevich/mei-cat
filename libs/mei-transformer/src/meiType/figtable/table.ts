import { Type } from "typebox";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrFacsimileSchema } from "../shared/attr/facsimile";
import { AttrLangSchema } from "../shared/attr/lang";
import { AttrXySchema } from "../shared/attr/xy";

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
				Type.Union([Type.Ref("caption"), Type.Array(Type.Ref("caption"))]),
			),

			/**
			 * Table row (one or more required).
			 * @see https://music-encoding.org/guidelines/v5/elements/tr.html
			 */
			tr: Type.Optional(
				Type.Union([Type.Ref("tr"), Type.Array(Type.Ref("tr"))]),
			),
		},
		{ additionalProperties: false },
	),
]);
