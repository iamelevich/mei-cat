import * as v from "valibot";
import { AttrOssiaAnlSchema } from "../../analytical/attr/ossia.anl";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrOssiaGesSchema } from "../../gestural/attr/ossia.ges";
import { AttrCommonSchema } from "../../shared/attr/common";
import { ModelLayerLikeSchema } from "../../shared/model/layerLike";
import { ModelStaffLikeSchema } from "../../shared/model/staffLike";
import { AttrOssiaVisSchema } from "../../visual/attr/ossia.vis";
import { AttrOssiaLogSchema } from "../attr/ossia.log";
import { OLayerSchema } from "./oLayer";
import { OStaffSchema } from "./oStaff";

/**
 * Base schema with attribute, to simplify types for OssiaSchema
 */
const OssiaBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrOssiaAnlSchema.entries,
	...AttrOssiaGesSchema.entries,
	...AttrOssiaLogSchema.entries,
	...AttrOssiaVisSchema.entries,
});

/**
 * Captures original notation and a differently notated version <hi rend="bold">*present in the source being transcribed*</hi>.
 * @see https://music-encoding.org/guidelines/v5/elements/ossia.html
 */
export const OssiaSchema = v.lazy(() =>
	v.intersect([
		OssiaBaseSchema,
		v.object({
			/**
			 * Reference to element oLayer
			 * @see https://music-encoding.org/guidelines/v5/elements/oLayer.html
			 */
			oLayer: v.optional(v.union([v.array(OLayerSchema), OLayerSchema])),
			/**
			 * Reference to element oStaff
			 * @see https://music-encoding.org/guidelines/v5/elements/oStaff.html
			 */
			oStaff: v.optional(v.union([v.array(OStaffSchema), OStaffSchema])),
		}),
		ModelLayerLikeSchema,
		ModelStaffLikeSchema,
	]),
);

export type OssiaData = v.InferOutput<typeof OssiaSchema>;
