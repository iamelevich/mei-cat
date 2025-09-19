import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrCommonSchema,
	AttrDataPointingSchema,
	AttrMediaBoundsSchema,
	AttrMetadataPointingSchema,
	AttrStartIdSchema,
} from "../../shared";
import { AvFileSchema, ClipSchema, WhenSchema } from ".";

/**
 * Base schema with attribute, to simplify types for RecordingSchema
 */
const RecordingBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrDataPointingSchema.entries,
	...AttrMediaBoundsSchema.entries,
	...AttrMetadataPointingSchema.entries,
	...AttrStartIdSchema.entries,
});

/**
 * A recorded performance.
 * @see https://music-encoding.org/guidelines/v5/elements/recording.html
 */
export const RecordingSchema = v.intersect([
	RecordingBaseSchema,
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
		 * Reference to element clip
		 * @see https://music-encoding.org/guidelines/v5/elements/clip.html
		 */
		clip: v.optional(
			v.union([v.lazy(() => ClipSchema), v.array(v.lazy(() => ClipSchema))]),
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

export type RecordingData = v.InferOutput<typeof RecordingSchema>;
