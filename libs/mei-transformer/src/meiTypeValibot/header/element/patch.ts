import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrCommonSchema,
	AttrEvidenceSchema,
	AttrMeasurementSchema,
	AttrXySchema,
} from "../../shared";
import { AttrTransSchema } from "../../edittrans";
import { ModelBifoliumLikeSchema, ModelFoliumLikeSchema } from "..";

/**
 * Base schema with attribute, to simplify types for PatchSchema
 */
const PatchBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrEvidenceSchema.entries,
	...AttrMeasurementSchema.entries,
	...AttrTransSchema.entries,
	...AttrXySchema.entries,

	// Direct attributes
	/**
	 * Describes the method of attachment of the patch.
	 */
	"@attached.by": v.optional(v.string()),
	/**
	 * Describes the position of the patch on the parent folium / bifolium.
	 */
	"@attached.to": v.optional(v.string()),
});

/**
 * Describes a physical writing surface attached to the original document.
 * @see https://music-encoding.org/guidelines/v5/elements/patch.html
 */
export const PatchSchema = v.intersect([
	PatchBaseSchema,
	ModelBifoliumLikeSchema,
	ModelFoliumLikeSchema,
]);

export type PatchData = v.InferOutput<typeof PatchSchema>;
