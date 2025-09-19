import * as v from "valibot";
import { type TableData, TableSchema } from "../element/table";

/**
 * Groups table-like elements.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.tableLike.html
 */
export const ModelTableLikeSchema: v.GenericSchema<ModelTableLikeData> = v.lazy(
	() =>
		v.object({
			/**
			 * Contains text displayed in tabular form.
			 * @see https://music-encoding.org/guidelines/v5/elements/table.html
			 */
			table: v.optional(v.union([TableSchema, v.array(TableSchema)])),
		}),
);

export type ModelTableLikeData = {
	table?: TableData | TableData[];
};
