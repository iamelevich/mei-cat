import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrLangSchema } from "../../shared/attr/lang";
import { AttrXySchema } from "../../shared/attr/xy";
import { ModelCaptionLikeSchema } from "../../shared/model/captionLike";
import { TrSchema } from "./tr";

/**
 * Base schema with attribute, to simplify types for TableSchema
 */
const TableBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLangSchema.entries,
	...AttrXySchema.entries,
});

/**
 * Contains text displayed in tabular form.
 * @see https://music-encoding.org/guidelines/v5/elements/table.html
 */
export const TableSchema = v.lazy(() =>
	v.intersect([
		TableBaseSchema,
		v.object({
			/**
			 * Reference to element tr
			 * @see https://music-encoding.org/guidelines/v5/elements/tr.html
			 */
			tr: v.optional(v.union([v.array(TrSchema), TrSchema])),
		}),
		ModelCaptionLikeSchema,
	]),
);

export type TableData = v.InferOutput<typeof TableSchema>;
