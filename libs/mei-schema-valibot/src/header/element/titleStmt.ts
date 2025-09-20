import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrBiblSchema } from "../../shared/attr/bibl";
import { AttrCommonSchema } from "../../shared/attr/common";
import { ModelHeadLikeSchema } from "../../shared/model/headLike";
import { ModelRespLikeSchema } from "../../shared/model/respLike";
import { ModelTitleLikeSchema } from "../../shared/model/titleLike";

/**
 * Base schema with attribute, to simplify types for TitleStmtSchema
 */
const TitleStmtBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
});

/**
 * Container for title and responsibility meta-data.
 * @see https://music-encoding.org/guidelines/v5/elements/titleStmt.html
 */
export const TitleStmtSchema = v.lazy(() =>
	v.intersect([
		TitleStmtBaseSchema,
		ModelHeadLikeSchema,
		ModelRespLikeSchema,
		ModelTitleLikeSchema,
	]),
);

export type TitleStmtData = v.InferOutput<typeof TitleStmtSchema>;
