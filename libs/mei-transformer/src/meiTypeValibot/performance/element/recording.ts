import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrDataPointingSchema } from "../../shared/attr/dataPointing";
import { AttrMediaBoundsSchema } from "../../shared/attr/mediaBounds";
import { AttrMetadataPointingSchema } from "../../shared/attr/metadataPointing";
import { AttrStartIdSchema } from "../../shared/attr/startId";
import { AvFileSchema } from "../element/avFile";
import { ClipSchema } from "../element/clip";
import { WhenSchema } from "../element/when";

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
export const RecordingSchema = v.lazy(() =>
	v.intersect([
		RecordingBaseSchema,
		v.object({
			/**
			 * Reference to element avFile
			 * @see https://music-encoding.org/guidelines/v5/elements/avFile.html
			 */
			avFile: v.optional(v.union([AvFileSchema, v.array(AvFileSchema)])),
			/**
			 * Reference to element clip
			 * @see https://music-encoding.org/guidelines/v5/elements/clip.html
			 */
			clip: v.optional(v.union([ClipSchema, v.array(ClipSchema)])),
			/**
			 * Reference to element when
			 * @see https://music-encoding.org/guidelines/v5/elements/when.html
			 */
			when: v.optional(v.union([WhenSchema, v.array(WhenSchema)])),
		}),
	]),
);

export type RecordingData = v.InferOutput<typeof RecordingSchema>;
