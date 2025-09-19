import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrRecordTypeSchema } from "../../header";
import { AttrComponentTypeSchema } from "../../msDesc";
import {
	AttrBiblSchema,
	AttrCommonSchema,
	AttrDataPointingSchema,
	AttrPointingSchema,
	AttrTargetEvalSchema,
	ModelRespLikePartSchema,
} from "..";
import {
	BiblScopeSchema,
	IdentifierSchema,
	RespStmtSchema,
	TitleSchema,
} from ".";

/**
 * Base schema with attribute, to simplify types for AnalyticSchema
 */
const AnalyticBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrComponentTypeSchema.entries,
	...AttrDataPointingSchema.entries,
	...AttrPointingSchema.entries,
	...AttrRecordTypeSchema.entries,
	...AttrTargetEvalSchema.entries,
});

/**
 * Contains bibliographic elements describing an item (<abbr>e.g.</abbr>, an article or poem) published within a monograph or journal and not as an independent publication.
 * @see https://music-encoding.org/guidelines/v5/elements/analytic.html
 */
export const AnalyticSchema = v.intersect([
	AnalyticBaseSchema,
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
		 * Reference to element identifier
		 * @see https://music-encoding.org/guidelines/v5/elements/identifier.html
		 */
		identifier: v.optional(v.lazy(() => IdentifierSchema)),
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
		 * Reference to element title
		 * @see https://music-encoding.org/guidelines/v5/elements/title.html
		 */
		title: v.optional(
			v.union([v.lazy(() => TitleSchema), v.array(v.lazy(() => TitleSchema))]),
		),
	}),
	ModelRespLikePartSchema,
]);

export type AnalyticData = v.InferOutput<typeof AnalyticSchema>;
