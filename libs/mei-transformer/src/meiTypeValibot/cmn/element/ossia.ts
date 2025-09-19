import * as v from "valibot";
import { AttrOssiaAnlSchema } from "../../analytical";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile";
import { AttrOssiaGesSchema } from "../../gestural";
import {
	AttrCommonSchema,
	ModelLayerLikeSchema,
	ModelStaffLikeSchema,
} from "../../shared";
import { AttrOssiaVisSchema } from "../../visual";
import { AttrOssiaLogSchema } from "..";
import { OLayerSchema, OStaffSchema } from ".";

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
export const OssiaSchema = v.intersect([
	OssiaBaseSchema,
	v.object({
		/**
		 * Reference to element oLayer
		 * @see https://music-encoding.org/guidelines/v5/elements/oLayer.html
		 */
		oLayer: v.union([
			v.lazy(() => OLayerSchema),
			v.array(v.lazy(() => OLayerSchema)),
		]),
		/**
		 * Reference to element oStaff
		 * @see https://music-encoding.org/guidelines/v5/elements/oStaff.html
		 */
		oStaff: v.union([
			v.lazy(() => OStaffSchema),
			v.array(v.lazy(() => OStaffSchema)),
		]),
	}),
	ModelLayerLikeSchema,
	ModelStaffLikeSchema,
]);

export type OssiaData = v.InferOutput<typeof OssiaSchema>;
