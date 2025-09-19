import * as v from "valibot";
import { AttrStaffAnlSchema } from "../../analytical";
import { StandardTagSchema } from "../../common";
import { ModelAppLikeSchema } from "../../critapp";
import {
	ModelEditLikeSchema,
	ModelTranscriptionLikeSchema,
} from "../../edittrans";
import { AttrFacsimileSchema } from "../../facsimile";
import { AttrStaffGesSchema } from "../../gestural";
import {
	AttrBasicSchema,
	AttrLabelledSchema,
	AttrLinkingSchema,
	AttrMetadataPointingSchema,
	AttrNIntegerSchema,
	AttrResponsibilitySchema,
	AttrStaffLogSchema,
	AttrTypedSchema,
	ModelAnnotLikeSchema,
	ModelMilestoneLikeMusicSchema,
	ModelRelationLikeSchema,
	ModelStaffDefLikeSchema,
	ModelStaffPartSchema,
} from "../../shared";
import { ModelGraphicPrimitiveLikeSchema } from "../../usersymbols";
import { AttrStaffVisSchema } from "../../visual";

/**
 * Base schema with attribute, to simplify types for OStaffSchema
 */
const OStaffBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBasicSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLabelledSchema.entries,
	...AttrLinkingSchema.entries,
	...AttrMetadataPointingSchema.entries,
	...AttrNIntegerSchema.entries,
	...AttrResponsibilitySchema.entries,
	...AttrStaffAnlSchema.entries,
	...AttrStaffGesSchema.entries,
	...AttrStaffLogSchema.entries,
	...AttrStaffVisSchema.entries,
	...AttrTypedSchema.entries,
});

/**
 * A staff that holds an alternative passage which may be played instead of the original material.
 * @see https://music-encoding.org/guidelines/v5/elements/oStaff.html
 */
export const OStaffSchema = v.intersect([
	OStaffBaseSchema,
	ModelAnnotLikeSchema,
	ModelAppLikeSchema,
	ModelEditLikeSchema,
	ModelGraphicPrimitiveLikeSchema,
	ModelMilestoneLikeMusicSchema,
	ModelRelationLikeSchema,
	ModelStaffDefLikeSchema,
	ModelStaffPartSchema,
	ModelTranscriptionLikeSchema,
]);

export type OStaffData = v.InferOutput<typeof OStaffSchema>;
