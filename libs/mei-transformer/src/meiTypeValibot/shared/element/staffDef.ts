import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrBasicSchema,
	AttrLabelledSchema,
	AttrLinkingSchema,
	AttrMetadataPointingSchema,
	AttrNIntegerSchema,
	AttrResponsibilitySchema,
	AttrStaffDefLogSchema,
	AttrTypedSchema,
	ModelInstrDefLikeSchema,
	ModelLabelLikeSchema,
	ModelLayerDefLikeSchema,
	ModelStaffDefPartSchema,
} from "..";
import { AttrStaffDefAnlSchema } from "../../analytical";
import { AttrStaffDefGesSchema } from "../../gestural";
import { AttrStaffDefVisSchema } from "../../visual";
import { AmbitusSchema } from ".";

/**
 * Base schema with attribute, to simplify types for StaffDefSchema
 */
const StaffDefBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBasicSchema.entries,
	...AttrLabelledSchema.entries,
	...AttrLinkingSchema.entries,
	...AttrMetadataPointingSchema.entries,
	...AttrNIntegerSchema.entries,
	...AttrResponsibilitySchema.entries,
	...AttrStaffDefAnlSchema.entries,
	...AttrStaffDefGesSchema.entries,
	...AttrStaffDefLogSchema.entries,
	...AttrStaffDefVisSchema.entries,
	...AttrTypedSchema.entries,
});

/**
 * Container for staff meta-information.
 * @see https://music-encoding.org/guidelines/v5/elements/staffDef.html
 */
export const StaffDefSchema = v.intersect([
	StaffDefBaseSchema,
	v.object({
		/**
		 * Reference to element ambitus
		 * @see https://music-encoding.org/guidelines/v5/elements/ambitus.html
		 */
		ambitus: v.optional(v.lazy(() => AmbitusSchema)),
	}),
	ModelInstrDefLikeSchema,
	ModelLabelLikeSchema,
	ModelLayerDefLikeSchema,
	ModelStaffDefPartSchema,
]);

export type StaffDefData = v.InferOutput<typeof StaffDefSchema>;
