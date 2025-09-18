import * as v from "valibot";
import { StandardTagSchema } from "../common";
import {
	AttrBiblSchema,
	HeadLikeSchema,
	RespLikeSchema,
	TitleLikeSchema,
} from "../shared";
import { AttrCommonSchema } from "../shared/attr/common";

/**
 * Simplified schema for titleStmt element.
 * @see https://music-encoding.org/guidelines/v5/elements/titleStmt.html
 */
export const TitleStmtSchema = v.intersect([
	v.object({
		...StandardTagSchema.entries,
		...AttrCommonSchema.entries,
		...AttrBiblSchema.entries,
	}),
	HeadLikeSchema,
	TitleLikeSchema,
	RespLikeSchema,
]);

export type TitleStmtData = v.InferOutput<typeof TitleStmtSchema>;
