import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrBiblSchema,
	AttrCommonSchema,
	BiblScopeSchema,
	type BiblScopeData,
	ModelHeadLikeSchema,
	type ModelHeadLikeData,
	ModelIdentifierLikeSchema,
	type ModelIdentifierLikeData,
	ModelRespLikePartSchema,
	type ModelRespLikePartData,
	ModelTitleLikeSchema,
	type ModelTitleLikeData,
	RespStmtSchema,
	type RespStmtData,
} from "../../shared";
import { ContentsSchema, type ContentsData } from ".";

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
export const SeriesStmtSchema: v.GenericSchema<SeriesStmtData> = v.intersect([
	SeriesStmtBaseSchema,
	v.object({
		/**
		 * Reference to element biblScope
		 * @see https://music-encoding.org/guidelines/v5/elements/biblScope.html
		 */
		biblScope: v.optional(
			v.union([
				v.lazy(() => BiblScopeSchema),
				v.array(v.lazy(() => BiblScopeSchema)),
			]),
		),
		/**
		 * Reference to element contents
		 * @see https://music-encoding.org/guidelines/v5/elements/contents.html
		 */
		contents: v.optional(
			v.union([
				v.lazy(() => ContentsSchema),
				v.array(v.lazy(() => ContentsSchema)),
			]),
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
		/**
		 * Reference to element seriesStmt
		 * @see https://music-encoding.org/guidelines/v5/elements/seriesStmt.html
		 */
		seriesStmt: v.optional(
			v.union([
				v.lazy(() => SeriesStmtSchema),
				v.array(v.lazy(() => SeriesStmtSchema)),
			]),
		),
	}),
	ModelHeadLikeSchema,
	ModelIdentifierLikeSchema,
	ModelRespLikePartSchema,
	ModelTitleLikeSchema,
]);

export type SeriesStmtData = SeriesStmtBaseData & {
	biblScope?: BiblScopeData | BiblScopeData[];
	contents?: ContentsData | ContentsData[];
	respStmt?: RespStmtData | RespStmtData[];
	seriesStmt?: SeriesStmtData | SeriesStmtData[];
} & ModelHeadLikeData &
	ModelIdentifierLikeData &
	ModelRespLikePartData &
	ModelTitleLikeData;
