import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrDataPointingSchema } from "../../shared/attr/dataPointing";
import { AttrMediaBoundsSchema } from "../../shared/attr/mediaBounds";
import { AttrMetadataPointingSchema } from "../../shared/attr/metadataPointing";
import { AttrStartIdSchema } from "../../shared/attr/startId";
import { AvFileSchema } from "../element/avFile";
import { WhenSchema } from "../element/when";

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
export const ClipSchema = v.lazy(() =>
	v.intersect([
		ClipBaseSchema,
		v.object({
			/**
			 * Reference to element avFile
			 * @see https://music-encoding.org/guidelines/v5/elements/avFile.html
			 */
			avFile: v.optional(v.union([v.array(AvFileSchema), AvFileSchema])),
			/**
			 * Reference to element when
			 * @see https://music-encoding.org/guidelines/v5/elements/when.html
			 */
			when: v.optional(v.union([v.array(WhenSchema), WhenSchema])),
		}),
	]),
);

export type ClipData = v.InferOutput<typeof ClipSchema>;
