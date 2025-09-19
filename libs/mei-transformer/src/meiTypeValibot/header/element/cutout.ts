import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrTransSchema } from "../../edittrans";
import {
	AttrCommonSchema,
	AttrDimensionsSchema,
	AttrEvidenceSchema,
	AttrMeasurementSchema,
	AttrXySchema,
} from "../../shared";
import { ModelBifoliumLikeSchema, ModelFoliumLikeSchema } from "..";

/**
 * Base schema with attribute, to simplify types for CutoutSchema
 */
const CutoutBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrDimensionsSchema.entries,
	...AttrEvidenceSchema.entries,
	...AttrMeasurementSchema.entries,
	...AttrTransSchema.entries,
	...AttrXySchema.entries,

	// Direct attributes
	/**
	 * Describes the method of removing the cutout.
	 */
	"@removed.by": v.optional(v.string()),
	/**
	 * Describes the position of the cutout on the parent folium / bifolium.
	 */
	"@removed.from": v.optional(v.string()),
});

/**
 * A cutout is a section of a document sheet that has been removed and is now missing.
 * @see https://music-encoding.org/guidelines/v5/elements/cutout.html
 */
export const CutoutSchema = v.intersect([
	CutoutBaseSchema,
	ModelBifoliumLikeSchema,
	ModelFoliumLikeSchema,
]);

export type CutoutData = v.InferOutput<typeof CutoutSchema>;
