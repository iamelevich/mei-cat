import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrRecordTypeSchema } from "../../header/attr/recordType";
import { AttrBiblSchema } from "../attr/bibl";
import { AttrCommonSchema } from "../attr/common";
import { AttrDataPointingSchema } from "../attr/dataPointing";
import { AttrLangSchema } from "../attr/lang";
import { AttrPointingSchema } from "../attr/pointing";
import { AttrTargetEvalSchema } from "../attr/targetEval";
import { AnalyticSchema } from "../element/analytic";
import { IdentifierSchema } from "../element/identifier";
import { MonogrSchema } from "../element/monogr";
import { RelatedItemSchema } from "../element/relatedItem";
import { SeriesSchema } from "../element/series";
import { ModelAnnotLikeSchema } from "../model/annotLike";

/**
 * Base schema with attribute, to simplify types for BiblStructSchema
 */
const BiblStructBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrDataPointingSchema.entries,
	...AttrLangSchema.entries,
	...AttrPointingSchema.entries,
	...AttrRecordTypeSchema.entries,
	...AttrTargetEvalSchema.entries,
});

/**
 * Contains a bibliographic citation in which bibliographic sub-elements must appear in a specified order.
 * @see https://music-encoding.org/guidelines/v5/elements/biblStruct.html
 */
export const BiblStructSchema = v.lazy(() =>
	v.intersect([
		BiblStructBaseSchema,
		v.object({
			/**
			 * Reference to element analytic
			 * @see https://music-encoding.org/guidelines/v5/elements/analytic.html
			 */
			analytic: v.union([AnalyticSchema, v.array(AnalyticSchema)]),
			/**
			 * Reference to element identifier
			 * @see https://music-encoding.org/guidelines/v5/elements/identifier.html
			 */
			identifier: v.union([IdentifierSchema, v.array(IdentifierSchema)]),
			/**
			 * Reference to element monogr
			 * @see https://music-encoding.org/guidelines/v5/elements/monogr.html
			 */
			monogr: v.union([MonogrSchema, v.array(MonogrSchema)]),
			/**
			 * Reference to element relatedItem
			 * @see https://music-encoding.org/guidelines/v5/elements/relatedItem.html
			 */
			relatedItem: v.union([RelatedItemSchema, v.array(RelatedItemSchema)]),
			/**
			 * Reference to element series
			 * @see https://music-encoding.org/guidelines/v5/elements/series.html
			 */
			series: v.union([SeriesSchema, v.array(SeriesSchema)]),
		}),
		ModelAnnotLikeSchema,
	]),
);

export type BiblStructData = v.InferOutput<typeof BiblStructSchema>;
