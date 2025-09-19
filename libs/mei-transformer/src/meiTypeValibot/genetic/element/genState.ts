import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrBiblSchema } from "../../shared/attr/bibl";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrDatableSchema } from "../../shared/attr/datable";
import { AttrDataPointingSchema } from "../../shared/attr/dataPointing";
import { AttrMetadataPointingSchema } from "../../shared/attr/metadataPointing";
import { AttrPointingSchema } from "../../shared/attr/pointing";
import { DescSchema } from "../../shared/element/desc";
import { RespStmtSchema } from "../../shared/element/respStmt";
import { ModelDateLikeSchema } from "../../shared/model/dateLike";

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
export const GenStateSchema = v.lazy(() =>
	v.intersect([
		GenStateBaseSchema,
		v.object({
			/**
			 * Reference to element desc
			 * @see https://music-encoding.org/guidelines/v5/elements/desc.html
			 */
			desc: v.optional(v.union([DescSchema, v.array(DescSchema)])),
			/**
			 * Reference to element respStmt
			 * @see https://music-encoding.org/guidelines/v5/elements/respStmt.html
			 */
			respStmt: v.optional(v.union([RespStmtSchema, v.array(RespStmtSchema)])),
		}),
		ModelDateLikeSchema,
	]),
);

export type GenStateData = v.InferOutput<typeof GenStateSchema>;
