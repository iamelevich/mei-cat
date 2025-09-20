import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { ModelFigDescLikeSchema } from "../../figtable/model/figDescLike";
import { ModelGraphicLikeSchema } from "../../figtable/model/graphicLike";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrCoordinatedSchema } from "../../shared/attr/coordinated";
import { AttrDataPointingSchema } from "../../shared/attr/dataPointing";
import { AttrMetadataPointingSchema } from "../../shared/attr/metadataPointing";
import { AttrStartIdSchema } from "../../shared/attr/startId";
import { ZoneSchema } from "./zone";

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
export const SurfaceSchema = v.lazy(() =>
	v.intersect([
		SurfaceBaseSchema,
		v.object({
			/**
			 * Reference to element zone
			 * @see https://music-encoding.org/guidelines/v5/elements/zone.html
			 */
			zone: v.optional(v.union([v.array(ZoneSchema), ZoneSchema])),
		}),
		ModelFigDescLikeSchema,
		ModelGraphicLikeSchema,
	]),
);

export type SurfaceData = v.InferOutput<typeof SurfaceSchema>;
