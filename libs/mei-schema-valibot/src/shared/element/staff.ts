import * as v from "valibot";
import { AttrStaffAnlSchema } from "../../analytical/attr/staff.anl";
import { StandardTagSchema } from "../../common";
import { ModelAppLikeSchema } from "../../critapp/model/appLike";
import { ModelEditLikeSchema } from "../../edittrans/model/editLike";
import { ModelTranscriptionLikeSchema } from "../../edittrans/model/transcriptionLike";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrStaffGesSchema } from "../../gestural/attr/staff.ges";
import { ModelGraphicPrimitiveLikeSchema } from "../../usersymbols/model/graphicPrimitiveLike";
import { AttrStaffVisSchema } from "../../visual/attr/staff.vis";
import { AttrBasicSchema } from "../attr/basic";
import { AttrLabelledSchema } from "../attr/labelled";
import { AttrLinkingSchema } from "../attr/linking";
import { AttrMetadataPointingSchema } from "../attr/metadataPointing";
import { AttrNIntegerSchema } from "../attr/nInteger";
import { AttrResponsibilitySchema } from "../attr/responsibility";
import { AttrStaffLogSchema } from "../attr/staff.log";
import { AttrTypedSchema } from "../attr/typed";
import { ModelAnnotLikeSchema } from "../model/annotLike";
import { ModelMilestoneLikeMusicSchema } from "../model/milestoneLike.music";
import { ModelRelationLikeSchema } from "../model/relationLike";
import { ModelStaffDefLikeSchema } from "../model/staffDefLike";
import { ModelStaffPartSchema } from "../model/staffPart";

/**
 * Base schema with attribute, to simplify types for StaffSchema
 */
const StaffBaseSchema = v.object({
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
 * A group of equidistant horizontal lines on which notes are placed in order to represent pitch or a grouping element for individual 'strands' of notes, rests, etc. that may or may not actually be rendered on staff lines; that is, both diastematic and non-diastematic signs.
 * @see https://music-encoding.org/guidelines/v5/elements/staff.html
 */
export const StaffSchema = v.lazy(() =>
	v.intersect([
		StaffBaseSchema,
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

export type StaffData = v.InferOutput<typeof StaffSchema>;
