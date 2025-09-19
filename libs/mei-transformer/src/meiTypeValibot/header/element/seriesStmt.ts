import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrBiblSchema } from "../../shared/attr/bibl";
import { AttrCommonSchema } from "../../shared/attr/common";
import {
	type BiblScopeData,
	BiblScopeSchema,
} from "../../shared/element/biblScope";
import {
	type RespStmtData,
	RespStmtSchema,
} from "../../shared/element/respStmt";
import {
	type ModelHeadLikeData,
	ModelHeadLikeSchema,
} from "../../shared/model/headLike";
import {
	type ModelIdentifierLikeData,
	ModelIdentifierLikeSchema,
} from "../../shared/model/identifierLike";
import {
	type ModelRespLikePartData,
	ModelRespLikePartSchema,
} from "../../shared/model/respLikePart";
import {
	type ModelTitleLikeData,
	ModelTitleLikeSchema,
} from "../../shared/model/titleLike";
import { type ContentsData, ContentsSchema } from "../element/contents";

/**
 * Base schema with attribute, to simplify types for SeriesStmtSchema
 */
const SeriesStmtBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
});

type SeriesStmtBaseData = v.InferOutput<typeof SeriesStmtBaseSchema>;

/**
 * Groups information about the series, if any, to which a publication belongs.
 * @see https://music-encoding.org/guidelines/v5/elements/seriesStmt.html
 */
export const SeriesStmtSchema: v.GenericSchema<SeriesStmtData> = v.lazy(() =>
	v.intersect([
		SeriesStmtBaseSchema,
		v.object({
			/**
			 * Reference to element biblScope
			 * @see https://music-encoding.org/guidelines/v5/elements/biblScope.html
			 */
			biblScope: v.optional(
				v.union([v.array(BiblScopeSchema), BiblScopeSchema]),
			),
			/**
			 * Reference to element contents
			 * @see https://music-encoding.org/guidelines/v5/elements/contents.html
			 */
			contents: v.optional(v.union([v.array(ContentsSchema), ContentsSchema])),
			/**
			 * Reference to element respStmt
			 * @see https://music-encoding.org/guidelines/v5/elements/respStmt.html
			 */
			respStmt: v.optional(v.union([v.array(RespStmtSchema), RespStmtSchema])),
			/**
			 * Reference to element seriesStmt
			 * @see https://music-encoding.org/guidelines/v5/elements/seriesStmt.html
			 */
			seriesStmt: v.optional(
				v.union([v.array(SeriesStmtSchema), SeriesStmtSchema]),
			),
		}),
		ModelHeadLikeSchema,
		ModelIdentifierLikeSchema,
		ModelRespLikePartSchema,
		ModelTitleLikeSchema,
	]),
);

export type SeriesStmtData = SeriesStmtBaseData & {
	biblScope?: BiblScopeData | BiblScopeData[];
	contents?: ContentsData | ContentsData[];
	respStmt?: RespStmtData | RespStmtData[];
	seriesStmt?: SeriesStmtData | SeriesStmtData[];
} & ModelHeadLikeData &
	ModelIdentifierLikeData &
	ModelRespLikePartData &
	ModelTitleLikeData;
