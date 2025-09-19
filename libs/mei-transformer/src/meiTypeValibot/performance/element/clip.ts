import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrCommonSchema,
	AttrDataPointingSchema,
	AttrMediaBoundsSchema,
	AttrMetadataPointingSchema,
	AttrStartIdSchema,
} from "../../shared";
import { AvFileSchema, WhenSchema } from ".";

/**
 * Base schema with attribute, to simplify types for ClipSchema
 */
const ClipBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrDataPointingSchema.entries,
	...AttrMediaBoundsSchema.entries,
	...AttrMetadataPointingSchema.entries,
	...AttrStartIdSchema.entries,
});

/**
 * Defines a time segment of interest within a recording or within a digital audio or video file.
 * @see https://music-encoding.org/guidelines/v5/elements/clip.html
 */
export const ClipSchema = v.intersect([
	ClipBaseSchema,
	v.object({
		/**
		 * Reference to element avFile
		 * @see https://music-encoding.org/guidelines/v5/elements/avFile.html
		 */
		avFile: v.optional(
			v.union([
				v.lazy(() => AvFileSchema),
				v.array(v.lazy(() => AvFileSchema)),
			]),
		),
		/**
		 * Reference to element when
		 * @see https://music-encoding.org/guidelines/v5/elements/when.html
		 */
		when: v.optional(
			v.union([v.lazy(() => WhenSchema), v.array(v.lazy(() => WhenSchema))]),
		),
	}),
]);

export type ClipData = v.InferOutput<typeof ClipSchema>;
