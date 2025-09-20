import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrBiblSchema } from "../../shared/attr/bibl";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrInternetMediaSchema } from "../../shared/attr/internetMedia";
import { AttrMetadataPointingSchema } from "../../shared/attr/metadataPointing";
import { AttrPointingSchema } from "../../shared/attr/pointing";
import { type ClipData, ClipSchema } from "./clip";

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

type AvFileBaseData = v.InferOutput<typeof AvFileBaseSchema>;

/**
 * References an external digital audio or video file.
 * @see https://music-encoding.org/guidelines/v5/elements/avFile.html
 */
export const AvFileSchema: v.GenericSchema<AvFileData> = v.lazy(() =>
	v.intersect([
		AvFileBaseSchema,
		v.object({
			/**
			 * Reference to element clip
			 * @see https://music-encoding.org/guidelines/v5/elements/clip.html
			 */
			clip: v.optional(v.union([v.array(ClipSchema), ClipSchema])),
		}),
	]),
);

export type AvFileData = AvFileBaseData & {
	clip?: ClipData | ClipData[];
};
