import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrTransSchema } from "../../edittrans/attr/trans";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrEvidenceSchema } from "../../shared/attr/evidence";
import { AttrMeasurementSchema } from "../../shared/attr/measurement";
import { AttrXySchema } from "../../shared/attr/xy";
import { ModelBifoliumLikeSchema } from "../model/bifoliumLike";
import { ModelFoliumLikeSchema } from "../model/foliumLike";

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
export const PatchSchema = v.lazy(() =>
	v.intersect([
		PatchBaseSchema,
		ModelBifoliumLikeSchema,
		ModelFoliumLikeSchema,
	]),
);

export type PatchData = v.InferOutput<typeof PatchSchema>;
