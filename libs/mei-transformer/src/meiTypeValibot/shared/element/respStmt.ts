import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { ModelNameLikeAgentSchema } from "../../namesdates/model/nameLike.agent";
import { AttrBiblSchema } from "../attr/bibl";
import { AttrCommonSchema } from "../attr/common";
import { NameSchema } from "../element/name";
import { RespSchema } from "../element/resp";
import { ModelHeadLikeSchema } from "../model/headLike";

/**
 * Base schema with attribute, to simplify types for RespStmtSchema
 */
const RespStmtBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
});

/**
 * Transcription of text that names one or more individuals, groups, or in rare cases, mechanical processes, responsible for creation, realization, production, funding, or distribution of the intellectual or artistic content.
 * @see https://music-encoding.org/guidelines/v5/elements/respStmt.html
 */
export const RespStmtSchema = v.lazy(() =>
	v.intersect([
		RespStmtBaseSchema,
		v.object({
			/**
			 * Reference to element name
			 * @see https://music-encoding.org/guidelines/v5/elements/name.html
			 */
			name: v.optional(v.union([NameSchema, v.array(NameSchema)])),
			/**
			 * Reference to element resp
			 * @see https://music-encoding.org/guidelines/v5/elements/resp.html
			 */
			resp: v.optional(v.union([RespSchema, v.array(RespSchema)])),
		}),
		ModelHeadLikeSchema,
		ModelNameLikeAgentSchema,
	]),
);

export type RespStmtData = v.InferOutput<typeof RespStmtSchema>;
