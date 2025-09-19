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
import { ModelGraphicPrimitiveLikeSchema } from "../../usersymbols";
import { AttrStaffVisSchema } from "../../visual";
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
} from "..";

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
export const StaffSchema = v.intersect([
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
]);

export type StaffData = v.InferOutput<typeof StaffSchema>;
