import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrBiblSchema,
	AttrCommonSchema,
	AttrDatableSchema,
	ModelDateLikeSchema,
	RespStmtSchema,
} from "../../shared";
import { ChangeDescSchema } from ".";

/**
 * Base schema with attribute, to simplify types for ChangeSchema
 */
const ChangeBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrDatableSchema.entries,
});

/**
 * Individual change within the revision description.
 * @see https://music-encoding.org/guidelines/v5/elements/change.html
 */
export const ChangeSchema = v.intersect([
	ChangeBaseSchema,
	v.object({
		/**
		 * Reference to element changeDesc
		 * @see https://music-encoding.org/guidelines/v5/elements/changeDesc.html
		 */
		changeDesc: v.optional(v.lazy(() => ChangeDescSchema)),
		/**
		 * Reference to element respStmt
		 * @see https://music-encoding.org/guidelines/v5/elements/respStmt.html
		 */
		respStmt: v.optional(v.lazy(() => RespStmtSchema)),
	}),
	ModelDateLikeSchema,
]);

export type ChangeData = v.InferOutput<typeof ChangeSchema>;
