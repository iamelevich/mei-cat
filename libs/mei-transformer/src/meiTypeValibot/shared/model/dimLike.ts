import * as v from "valibot";
import {
	type DepthData,
	DepthSchema,
	type DimData,
	DimSchema,
	type HeightData,
	HeightSchema,
	type WidthData,
	WidthSchema,
} from "..";

/**
 * Groups elements which describe a measurement forming part of the physical dimensions of an object.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.dimLike.html
 */
export const ModelDimLikeSchema: v.GenericSchema<ModelDimLikeData> = v.object({
	/**
	 * Description of a measurement taken through a three-dimensional object.
	 * @see https://music-encoding.org/guidelines/v5/elements/depth.html
	 */
	depth: v.optional(
		v.union([v.lazy(() => DepthSchema), v.array(v.lazy(() => DepthSchema))]),
	),
	/**
	 * Any single dimensional specification.
	 * @see https://music-encoding.org/guidelines/v5/elements/dim.html
	 */
	dim: v.optional(
		v.union([v.lazy(() => DimSchema), v.array(v.lazy(() => DimSchema))]),
	),
	/**
	 * Description of the vertical size of an object.
	 * @see https://music-encoding.org/guidelines/v5/elements/height.html
	 */
	height: v.optional(
		v.union([v.lazy(() => HeightSchema), v.array(v.lazy(() => HeightSchema))]),
	),
	/**
	 * Description of the horizontal size of an object.
	 * @see https://music-encoding.org/guidelines/v5/elements/width.html
	 */
	width: v.optional(
		v.union([v.lazy(() => WidthSchema), v.array(v.lazy(() => WidthSchema))]),
	),
});

export type ModelDimLikeData = {
	depth?: DepthData | DepthData[];
	dim?: DimData | DimData[];
	height?: HeightData | HeightData[];
	width?: WidthData | WidthData[];
};
