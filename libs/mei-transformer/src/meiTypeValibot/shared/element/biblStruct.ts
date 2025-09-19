import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrBiblSchema,
	AttrCommonSchema,
	AttrDataPointingSchema,
	AttrLangSchema,
	AttrPointingSchema,
	AttrTargetEvalSchema,
	ModelAnnotLikeSchema,
} from "..";
import { AttrRecordTypeSchema } from "../../header";
import {
	AnalyticSchema,
	IdentifierSchema,
	MonogrSchema,
	RelatedItemSchema,
	SeriesSchema,
} from ".";

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
export const BiblStructSchema = v.intersect([
	BiblStructBaseSchema,
	v.object({
		/**
		 * Reference to element analytic
		 * @see https://music-encoding.org/guidelines/v5/elements/analytic.html
		 */
		analytic: v.union([
			v.lazy(() => AnalyticSchema),
			v.array(v.lazy(() => AnalyticSchema)),
		]),
		/**
		 * Reference to element identifier
		 * @see https://music-encoding.org/guidelines/v5/elements/identifier.html
		 */
		identifier: v.union([
			v.lazy(() => IdentifierSchema),
			v.array(v.lazy(() => IdentifierSchema)),
		]),
		/**
		 * Reference to element monogr
		 * @see https://music-encoding.org/guidelines/v5/elements/monogr.html
		 */
		monogr: v.union([
			v.lazy(() => MonogrSchema),
			v.array(v.lazy(() => MonogrSchema)),
		]),
		/**
		 * Reference to element relatedItem
		 * @see https://music-encoding.org/guidelines/v5/elements/relatedItem.html
		 */
		relatedItem: v.union([
			v.lazy(() => RelatedItemSchema),
			v.array(v.lazy(() => RelatedItemSchema)),
		]),
		/**
		 * Reference to element series
		 * @see https://music-encoding.org/guidelines/v5/elements/series.html
		 */
		series: v.union([
			v.lazy(() => SeriesSchema),
			v.array(v.lazy(() => SeriesSchema)),
		]),
	}),
	ModelAnnotLikeSchema,
]);

export type BiblStructData = v.InferOutput<typeof BiblStructSchema>;
