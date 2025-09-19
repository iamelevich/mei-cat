import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile";
import {
	AttrCommonSchema,
	AttrLangSchema,
	AttrXySchema,
	ModelCaptionLikeSchema,
} from "../../shared";
import { TrSchema } from ".";

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
export const TableSchema = v.intersect([
	TableBaseSchema,
	v.object({
		/**
		 * Reference to element tr
		 * @see https://music-encoding.org/guidelines/v5/elements/tr.html
		 */
		tr: v.union([v.lazy(() => TrSchema), v.array(v.lazy(() => TrSchema))]),
	}),
	ModelCaptionLikeSchema,
]);

export type TableData = v.InferOutput<typeof TableSchema>;
