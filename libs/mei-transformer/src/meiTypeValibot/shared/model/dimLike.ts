import * as v from "valibot";
import { type DepthData, DepthSchema } from "../element/depth";
import { type DimData, DimSchema } from "../element/dim";
import { type HeightData, HeightSchema } from "../element/height";
import { type WidthData, WidthSchema } from "../element/width";

/**
 * Groups elements which describe a measurement forming part of the physical dimensions of an object.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.dimLike.html
 */
export const ModelDimLikeSchema: v.GenericSchema<ModelDimLikeData> = v.lazy(
	() =>
		v.object({
			/**
			 * Description of a measurement taken through a three-dimensional object.
			 * @see https://music-encoding.org/guidelines/v5/elements/depth.html
			 */
			depth: v.optional(v.union([DepthSchema, v.array(DepthSchema)])),
			/**
			 * Any single dimensional specification.
			 * @see https://music-encoding.org/guidelines/v5/elements/dim.html
			 */
			dim: v.optional(v.union([DimSchema, v.array(DimSchema)])),
			/**
			 * Description of the vertical size of an object.
			 * @see https://music-encoding.org/guidelines/v5/elements/height.html
			 */
			height: v.optional(v.union([HeightSchema, v.array(HeightSchema)])),
			/**
			 * Description of the horizontal size of an object.
			 * @see https://music-encoding.org/guidelines/v5/elements/width.html
			 */
			width: v.optional(v.union([WidthSchema, v.array(WidthSchema)])),
		}),
);

export type ModelDimLikeData = {
	depth?: DepthData | DepthData[];
	dim?: DimData | DimData[];
	height?: HeightData | HeightData[];
	width?: WidthData | WidthData[];
};
