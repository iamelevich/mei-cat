import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrBiblSchema,
	AttrCommonSchema,
	AttrDataPointingSchema,
	AttrDatableSchema,
	AttrMetadataPointingSchema,
	AttrPointingSchema,
	DescSchema,
	ModelDateLikeSchema,
	RespStmtSchema,
} from "../../shared";

/**
 * Base schema with attribute, to simplify types for GenStateSchema
 */
const GenStateBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrDataPointingSchema.entries,
	...AttrDatableSchema.entries,
	...AttrMetadataPointingSchema.entries,
	...AttrPointingSchema.entries,
});

/**
 * Describes a distinctive state in the textual development of a work.
 * @see https://music-encoding.org/guidelines/v5/elements/genState.html
 */
export const GenStateSchema = v.intersect([
	GenStateBaseSchema,
	v.object({
		/**
		 * Reference to element desc
		 * @see https://music-encoding.org/guidelines/v5/elements/desc.html
		 */
		desc: v.optional(
			v.union([v.lazy(() => DescSchema), v.array(v.lazy(() => DescSchema))]),
		),
		/**
		 * Reference to element respStmt
		 * @see https://music-encoding.org/guidelines/v5/elements/respStmt.html
		 */
		respStmt: v.optional(
			v.union([
				v.lazy(() => RespStmtSchema),
				v.array(v.lazy(() => RespStmtSchema)),
			]),
		),
	}),
	ModelDateLikeSchema,
]);

export type GenStateData = v.InferOutput<typeof GenStateSchema>;
