import * as v from "valibot";
import { AttrStaffGrpAnlSchema } from "../../analytical";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile";
import { AttrStaffGrpGesSchema } from "../../gestural";
import { AttrStaffGrpVisSchema } from "../../visual";
import {
	AttrCommonSchema,
	AttrMetadataPointingSchema,
	AttrStaffGrpLogSchema,
	ModelInstrDefLikeSchema,
	ModelLabelLikeSchema,
	ModelStaffDefLikeSchema,
	ModelStaffGrpLikeSchema,
} from "..";
import { GrpSymSchema } from ".";

/**
 * Base schema with attribute, to simplify types for StaffGrpSchema
 */
const StaffGrpBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrMetadataPointingSchema.entries,
	...AttrStaffGrpAnlSchema.entries,
	...AttrStaffGrpGesSchema.entries,
	...AttrStaffGrpLogSchema.entries,
	...AttrStaffGrpVisSchema.entries,
});

/**
 * A group of bracketed or braced staves.
 * @see https://music-encoding.org/guidelines/v5/elements/staffGrp.html
 */
export const StaffGrpSchema = v.intersect([
	StaffGrpBaseSchema,
	v.object({
		/**
		 * Reference to element grpSym
		 * @see https://music-encoding.org/guidelines/v5/elements/grpSym.html
		 */
		grpSym: v.optional(
			v.union([
				v.lazy(() => GrpSymSchema),
				v.array(v.lazy(() => GrpSymSchema)),
			]),
		),
	}),
	ModelInstrDefLikeSchema,
	ModelLabelLikeSchema,
	ModelStaffDefLikeSchema,
	ModelStaffGrpLikeSchema,
]);

export type StaffGrpData = v.InferOutput<typeof StaffGrpSchema>;
