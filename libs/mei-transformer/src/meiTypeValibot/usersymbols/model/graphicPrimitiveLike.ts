import * as v from "valibot";
import {
	type AnchoredTextData,
	AnchoredTextSchema,
	type CurveData,
	CurveSchema,
	type LineData,
	LineSchema,
} from "..";

/**
 * Groups elements that function as drawing primitives.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.graphicPrimitiveLike.html
 */
export const ModelGraphicPrimitiveLikeSchema: v.GenericSchema<ModelGraphicPrimitiveLikeData> =
	v.object({
		/**
		 * Container for text that is fixed to a particular page location, regardless of changes made to the layout of the measures around it.
		 * @see https://music-encoding.org/guidelines/v5/elements/anchoredText.html
		 */
		anchoredText: v.optional(
			v.union([
				v.lazy(() => AnchoredTextSchema),
				v.array(v.lazy(() => AnchoredTextSchema)),
			]),
		),
		/**
		 * A curved line that cannot be represented by a more specific element, such as a slur.
		 * @see https://music-encoding.org/guidelines/v5/elements/curve.html
		 */
		curve: v.optional(
			v.union([v.lazy(() => CurveSchema), v.array(v.lazy(() => CurveSchema))]),
		),
		/**
		 * A visual line that cannot be represented by a more specific; i.e. , semantic, element.
		 * @see https://music-encoding.org/guidelines/v5/elements/line.html
		 */
		line: v.optional(
			v.union([v.lazy(() => LineSchema), v.array(v.lazy(() => LineSchema))]),
		),
	});

export type ModelGraphicPrimitiveLikeData = {
	anchoredText?: AnchoredTextData | AnchoredTextData[];
	curve?: CurveData | CurveData[];
	line?: LineData | LineData[];
};
