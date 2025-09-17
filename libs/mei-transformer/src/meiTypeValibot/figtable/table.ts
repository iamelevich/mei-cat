import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";

/**
 * Simplified schema for table element.
 * @see https://music-encoding.org/guidelines/v5/elements/table.html
 */
export const TableSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
});

export type TableData = v.InferOutput<typeof TableSchema>;
