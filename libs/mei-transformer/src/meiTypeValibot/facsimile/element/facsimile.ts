import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { GraphicSchema } from "../../figtable/element/graphic";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrMetadataPointingSchema } from "../../shared/attr/metadataPointing";
import { SurfaceSchema } from "../element/surface";

/**
 * Base schema with attribute, to simplify types for FacsimileSchema
 */
const FacsimileBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrMetadataPointingSchema.entries,
});

/**
 * Contains a representation of a written source in the form of a set of images rather than as transcribed or encoded text.
 * @see https://music-encoding.org/guidelines/v5/elements/facsimile.html
 */
export const FacsimileSchema = v.lazy(() =>
	v.intersect([
		FacsimileBaseSchema,
		v.object({
			/**
			 * Reference to element graphic
			 * @see https://music-encoding.org/guidelines/v5/elements/graphic.html
			 */
			graphic: v.optional(v.union([GraphicSchema, v.array(GraphicSchema)])),
			/**
			 * Reference to element surface
			 * @see https://music-encoding.org/guidelines/v5/elements/surface.html
			 */
			surface: v.optional(v.union([SurfaceSchema, v.array(SurfaceSchema)])),
		}),
	]),
);

export type FacsimileData = v.InferOutput<typeof FacsimileSchema>;
