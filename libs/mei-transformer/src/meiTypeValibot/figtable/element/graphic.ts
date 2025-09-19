import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrCommonSchema,
	AttrCoordinatedUlSchema,
	AttrDimensionsSchema,
	AttrInternetMediaSchema,
	AttrMetadataPointingSchema,
	AttrPointingSchema,
	AttrStartIdSchema,
	AttrVisualOffsetSchema,
} from "../../shared";
import { AttrFacsimileSchema, ZoneSchema } from "../../facsimile";

/**
 * Base schema with attribute, to simplify types for GraphicSchema
 */
const GraphicBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrCoordinatedUlSchema.entries,
	...AttrDimensionsSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrInternetMediaSchema.entries,
	...AttrMetadataPointingSchema.entries,
	...AttrPointingSchema.entries,
	...AttrStartIdSchema.entries,
	...AttrVisualOffsetSchema.entries,
});

/**
 * Indicates the location of an inline graphic.
 * @see https://music-encoding.org/guidelines/v5/elements/graphic.html
 */
export const GraphicSchema = v.intersect([
	GraphicBaseSchema,
	v.object({
		/**
		 * Reference to element zone
		 * @see https://music-encoding.org/guidelines/v5/elements/zone.html
		 */
		zone: v.optional(
			v.union([v.lazy(() => ZoneSchema), v.array(v.lazy(() => ZoneSchema))]),
		),
	}),
]);

export type GraphicData = v.InferOutput<typeof GraphicSchema>;
