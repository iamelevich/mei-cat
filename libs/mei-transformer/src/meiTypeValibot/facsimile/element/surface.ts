import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { ModelFigDescLikeSchema, ModelGraphicLikeSchema } from "../../figtable";
import {
	AttrCommonSchema,
	AttrCoordinatedSchema,
	AttrDataPointingSchema,
	AttrMetadataPointingSchema,
	AttrStartIdSchema,
} from "../../shared";
import { ZoneSchema } from ".";

/**
 * Base schema with attribute, to simplify types for SurfaceSchema
 */
const SurfaceBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrCoordinatedSchema.entries,
	...AttrDataPointingSchema.entries,
	...AttrMetadataPointingSchema.entries,
	...AttrStartIdSchema.entries,
});

/**
 * Defines a writing surface in terms of a rectangular coordinate space, optionally grouping one or more graphic representations of that space, and rectangular zones of interest within it.
 * @see https://music-encoding.org/guidelines/v5/elements/surface.html
 */
export const SurfaceSchema = v.intersect([
	SurfaceBaseSchema,
	v.object({
		/**
		 * Reference to element zone
		 * @see https://music-encoding.org/guidelines/v5/elements/zone.html
		 */
		zone: v.optional(
			v.union([v.lazy(() => ZoneSchema), v.array(v.lazy(() => ZoneSchema))]),
		),
	}),
	ModelFigDescLikeSchema,
	ModelGraphicLikeSchema,
]);

export type SurfaceData = v.InferOutput<typeof SurfaceSchema>;
