import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrRecordTypeSchema } from "../../header/attr/recordType";
import { AttrComponentTypeSchema } from "../../msDesc/attr/componentType";
import { AttrBiblSchema } from "../attr/bibl";
import { AttrCommonSchema } from "../attr/common";
import { AttrDataPointingSchema } from "../attr/dataPointing";
import { AttrPointingSchema } from "../attr/pointing";
import { AttrTargetEvalSchema } from "../attr/targetEval";
import { ModelRespLikePartSchema } from "../model/respLikePart";
import { BiblScopeSchema } from "./biblScope";
import { IdentifierSchema } from "./identifier";
import { RespStmtSchema } from "./respStmt";
import { TitleSchema } from "./title";

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
export const AnalyticSchema = v.lazy(() =>
	v.intersect([
		AnalyticBaseSchema,
		v.object({
			/**
			 * Reference to element biblScope
			 * @see https://music-encoding.org/guidelines/v5/elements/biblScope.html
			 */
			biblScope: v.optional(
				v.union([v.array(BiblScopeSchema), BiblScopeSchema]),
			),
			/**
			 * Reference to element identifier
			 * @see https://music-encoding.org/guidelines/v5/elements/identifier.html
			 */
			identifier: v.optional(IdentifierSchema),
			/**
			 * Reference to element respStmt
			 * @see https://music-encoding.org/guidelines/v5/elements/respStmt.html
			 */
			respStmt: v.optional(v.union([v.array(RespStmtSchema), RespStmtSchema])),
			/**
			 * Reference to element title
			 * @see https://music-encoding.org/guidelines/v5/elements/title.html
			 */
			title: v.optional(v.union([v.array(TitleSchema), TitleSchema])),
		}),
		ModelRespLikePartSchema,
	]),
);

export type AnalyticData = v.InferOutput<typeof AnalyticSchema>;
