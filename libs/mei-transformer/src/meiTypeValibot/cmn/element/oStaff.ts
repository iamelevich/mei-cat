import * as v from "valibot";
import { AttrStaffAnlSchema } from "../../analytical/attr/staff.anl";
import { StandardTagSchema } from "../../common";
import { ModelAppLikeSchema } from "../../critapp/model/appLike";
import { ModelEditLikeSchema } from "../../edittrans/model/editLike";
import { ModelTranscriptionLikeSchema } from "../../edittrans/model/transcriptionLike";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrStaffGesSchema } from "../../gestural/attr/staff.ges";
import { AttrBasicSchema } from "../../shared/attr/basic";
import { AttrLabelledSchema } from "../../shared/attr/labelled";
import { AttrLinkingSchema } from "../../shared/attr/linking";
import { AttrMetadataPointingSchema } from "../../shared/attr/metadataPointing";
import { AttrNIntegerSchema } from "../../shared/attr/nInteger";
import { AttrResponsibilitySchema } from "../../shared/attr/responsibility";
import { AttrStaffLogSchema } from "../../shared/attr/staff.log";
import { AttrTypedSchema } from "../../shared/attr/typed";
import { ModelAnnotLikeSchema } from "../../shared/model/annotLike";
import { ModelMilestoneLikeMusicSchema } from "../../shared/model/milestoneLike.music";
import { ModelRelationLikeSchema } from "../../shared/model/relationLike";
import { ModelStaffDefLikeSchema } from "../../shared/model/staffDefLike";
import { ModelStaffPartSchema } from "../../shared/model/staffPart";
import { ModelGraphicPrimitiveLikeSchema } from "../../usersymbols/model/graphicPrimitiveLike";
import { AttrStaffVisSchema } from "../../visual/attr/staff.vis";

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
export const OStaffSchema = v.lazy(() =>
	v.intersect([
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
	]),
);

export type OStaffData = v.InferOutput<typeof OStaffSchema>;
