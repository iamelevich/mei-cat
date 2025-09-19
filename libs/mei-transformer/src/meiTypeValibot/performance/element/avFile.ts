import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile";
import {
	AttrBiblSchema,
	AttrCommonSchema,
	AttrInternetMediaSchema,
	AttrMetadataPointingSchema,
	AttrPointingSchema,
} from "../../shared";
import { ClipSchema } from ".";

/**
 * Base schema with attribute, to simplify types for AvFileSchema
 */
const AvFileBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrInternetMediaSchema.entries,
	...AttrMetadataPointingSchema.entries,
	...AttrPointingSchema.entries,
});

/**
 * References an external digital audio or video file.
 * @see https://music-encoding.org/guidelines/v5/elements/avFile.html
 */
export const AvFileSchema = v.intersect([
	AvFileBaseSchema,
	v.object({
		/**
		 * Reference to element clip
		 * @see https://music-encoding.org/guidelines/v5/elements/clip.html
		 */
		clip: v.optional(
			v.union([v.lazy(() => ClipSchema), v.array(v.lazy(() => ClipSchema))]),
		),
	}),
]);

export type AvFileData = v.InferOutput<typeof AvFileSchema>;
